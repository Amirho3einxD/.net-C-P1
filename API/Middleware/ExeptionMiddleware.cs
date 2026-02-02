using System;
using System.ComponentModel.DataAnnotations;
namespace API.Middleware;

using System.Text.Json;
using Application.Core;
using FluentValidation;
public class ExeptionMiddleware(ILogger<ExeptionMiddleware>logger,IHostEnvironment env) 
: IMiddleware
{
    public async Task InvokeAsync(HttpContext context, RequestDelegate next)
    {
        try
        {
            await next(context);
        }
        catch (ValidationException ex)
        {
            await HandlevValdationExeption(context, ex);
        }
        catch (Exception ex)
        {
            await HandleExeption(context,ex);
        }
    }

    private async Task HandleExeption(HttpContext context, Exception ex)
    {
        logger.LogError(ex,ex.Message);
        context.Response.ContentType="application/json";  
        context.Response.StatusCode=StatusCodes.Status500InternalServerError;

        var response=env.IsDevelopment()
        ?new AppExeption(context.Response.StatusCode,ex.Message,ex.StackTrace)
        :new AppExeption(context.Response.StatusCode,ex.Message,null);

        var options=new JsonSerializerOptions{PropertyNamingPolicy=JsonNamingPolicy.CamelCase};

        var json =JsonSerializer.Serialize(response,options);

        await context.Response.WriteAsync(json);
    }

    private static async Task HandlevValdationExeption(HttpContext context, ValidationException ex)
    {
        var validationErrors = new Dictionary<string, string[]>();
        if (ex.Errors is not null)
        {
            foreach (var error in ex.Errors)
            {
               if(validationErrors.TryGetValue(error.PropertyName,out var extstingErrors))
                {
                    validationErrors[error.PropertyName]=[.. extstingErrors, error.ErrorMessage];
                }
                else
                {
                    validationErrors[error.PropertyName]=[error.ErrorMessage];
                }
            }
        }

        context.Response.StatusCode=StatusCodes.Status400BadRequest;
        var validationProblemDetails=new HttpValidationProblemDetails(validationErrors)
        {
            Status=StatusCodes.Status400BadRequest,
            Type="ValidationFailure",
            Title="Validation error",
            Detail="One or more validation errors has occurred"
        };
        await context.Response.WriteAsJsonAsync(validationProblemDetails);
    }
}
