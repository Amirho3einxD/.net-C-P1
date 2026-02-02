using System;
using Application.Core;
using Domain;
using MediatR;
using Persistence;

namespace Application.Activities.Queries;

public class GetActivityDetails
{
  public class Query : IRequest<Result<Activity>>
    {
        public required string Id {get;set;}

    }
    public class Handle(AppDbContext context) : IRequestHandler<Query, Result<Activity>>
    {
        async Task<Result<Activity>> IRequestHandler<Query,Result<Activity>>.Handle(Query request, CancellationToken cancellationToken)
        {
           var activity = await context.Activities.FindAsync([request.Id],cancellationToken);
           if (activity is null) return Result<Activity>.Failure("Activity not found",404);
           return Result<Activity>.Success(activity);
        }
    }
}
