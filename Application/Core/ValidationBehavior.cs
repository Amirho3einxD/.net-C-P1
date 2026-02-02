using System;
using FluentValidation;
using FluentValidation.TestHelper;
using MediatR;

namespace Application.Core;

public class ValidationBehavior<Trequest, TResponse>(IValidator<Trequest>? validator = null)
: IPipelineBehavior<Trequest, TResponse> where Trequest : notnull
{
    public async Task<TResponse> Handle(Trequest request, RequestHandlerDelegate<TResponse> next, CancellationToken cancellationToken)
    {
        if(validator==null) return await next();
        var validationResault=await validator.ValidateAsync(request,cancellationToken);
        if (!validationResault.IsValid)
        {
            throw new ValidationException(validationResault.Errors);
        }
        return await next();
    }
}
