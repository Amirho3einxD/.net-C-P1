using Microsoft.AspNetCore.Http.Extensions;
using Microsoft.EntityFrameworkCore;
using Persistence;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();
builder.Services.AddDbContext <AppDbContext>(opt =>
{
    opt.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection"));

});

var app = builder.Build();

// Configure the HTTP request pipeline.
app.MapControllers();

using var scope=app.Services.CreateScope();
var services=scope.ServiceProvider;

try
{
var context=services.GetRequiredService<AppDbContext>();
await context.Database.MigrateAsync();
await Dbinitializer.SeedData(context);

}
catch(Exception e)
{
    var log=services.GetRequiredService<ILogger<Program>>();
    log.LogError(e,"ridi.");
}

app.Run();
