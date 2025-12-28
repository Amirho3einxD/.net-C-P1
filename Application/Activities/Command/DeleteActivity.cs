using System;
using MediatR;
using AutoMapper;
using Domain;
using Persistence;

namespace Application.Activities.Command;

public class DeleteActivity
{
    public class Command : IRequest
    {
           public required string Id {get;set;}
    }
    public class Hanler(AppDbContext context) : IRequestHandler<Command>
    {
        public async Task Handle(Command request, CancellationToken cancellationToken)
        {
            var activity = await context.Activities.FindAsync([request.Id],cancellationToken)
            ?? throw new Exception("can not find activity");
            context.Remove(activity);
            await context.SaveChangesAsync(cancellationToken);
        }
    }
}
