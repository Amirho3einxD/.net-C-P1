using Application.Core;
using MediatR;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ApiController : ControllerBase
    {
        private IMediator? _mediator;

        protected IMediator Mediator => _mediator ??= HttpContext.RequestServices.GetService<IMediator>()
            ?? throw new InvalidOperationException("service is unavailable");

        protected ActionResult HandleResult<T>(Result<T> result)
        {
            if (!result.Issuccess && result.Code == 404) return NotFound();
            if (result.Issuccess && result.Value != null) return Ok(result.Value);
            return BadRequest(result.Error);
        }
    }
}
