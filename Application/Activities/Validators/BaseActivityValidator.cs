using System;
using Application.Activities.DTO;
using FluentValidation;

namespace Application.Activities.Validators;

public class BaseActivityValidator<T, TDto> : AbstractValidator<T> where TDto : BaseActivityDto
{
    public BaseActivityValidator(Func<T, TDto> selector)
    {
        RuleFor(x => selector(x).Title)
               .NotEmpty().WithMessage("Title is required")
               .MaximumLength(100).WithMessage("Title must not exeed 100 charecters");


        RuleFor(x => selector(x).Description)
              .NotEmpty().WithMessage("Description is required")
              .MaximumLength(200).WithMessage("Description must not exeed 200 charecters");

        RuleFor(x => selector(x).Category)
        .NotEmpty().WithMessage("Category is required"); 

        RuleFor(x => selector(x).Date)
              .GreaterThan(DateTime.UtcNow).WithMessage("Date must be in future");

        RuleFor(x => selector(x).Country)
             .NotEmpty().WithMessage("Country is required");

        RuleFor(x => selector(x).Address)
        .NotEmpty().WithMessage("Address is required");

        RuleFor(x => selector(x).CreatedBy)
        .NotEmpty().WithMessage("Creator name is required");
        RuleFor(x => selector(x).Status)
        .NotEmpty().WithMessage("Status name is required");
        RuleFor(x => selector(x).Latitude)
        .NotEmpty().WithMessage("Latitude is required")
        .InclusiveBetween(-90, 90).WithMessage("Latitude mut be between -90 and 90");

        RuleFor(x => selector(x).Longitude)
        .NotEmpty().WithMessage("Longitude is required")
        .InclusiveBetween(-180, 180).WithMessage("Latitude mut be between -180 and 180");

        RuleFor(x => selector(x).Price)
            .NotEmpty().WithMessage("Price is required")
            .GreaterThanOrEqualTo(0)
            .WithMessage("Price can not be negative");
        RuleFor(x => selector(x).Capacity)
            .NotEmpty().WithMessage("Capacity is required")
            .GreaterThan(0)
            .WithMessage("Capacity must be greater than 0");
    }
}
