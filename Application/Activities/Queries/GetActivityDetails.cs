using System;
using Domain;
using MediatR;
using Persistence;

namespace Application.Activities.Queries;

public class GetActivityDetails
{
  public class Query : IRequest<Activity>
    {
        public required string Id {get;set;}

    }
    public class Handle(AppDbContext context) : IRequestHandler<Query, Activity>
    {
        async Task<Activity> IRequestHandler<Query,Activity>.Handle(Query request, CancellationToken cancellationToken)
        {
           var activity = await context.Activities.FindAsync([request.Id],cancellationToken);
           if (activity is null) throw new Exception("not fount");
           return activity;
        }
    }
}
