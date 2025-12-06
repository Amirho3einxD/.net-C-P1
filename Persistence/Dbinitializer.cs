using System;
using Domain;

namespace Persistence;

public class Dbinitializer
{
public static async Task SeedData(AppDbContext context)
    {
        if(context.Activities.Any()){return;}
       var Activities= new List<Activity>
       {
    new() 
    {
        Date = DateTime.Now.AddDays(-2),
        Cancelled = false,
        latitude = 40.7128,
        City = "New York"
    },
    new ()
    {
        Date = DateTime.Now.AddDays(-1),
        Cancelled = true,
        latitude = 34.0522,
        City = "Los Angeles"
    },
    new ()
    {
        Date = DateTime.Now,
        Cancelled = false,
        latitude = 51.5074,
        City = "London"
    }

       };

      context.Activities.AddRange(Activities);

      await context.SaveChangesAsync();
    }
}
