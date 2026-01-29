using System;
using Domain;

namespace Persistence;

public class Dbinitializer
{
    public static async Task SeedData(AppDbContext context)
    {
        if (context.Activities.Any()) return;

        var activities = new List<Activity>
        {
            new Activity
            {
                Date = DateTime.Now.AddDays(-2),
                Cancelled = false,
                Latitude = 40.7128,
                Longitude = -74.0060,
                Country = "USA",
                Address = "123 Main St, New York",
                Title = "New York Event",
                Description = "Description for New York event",
                Capacity = 100,
                ReservedCount = 10,
                Status = "Active",
                IsPublic = true,
                Price = 50.0,
                CreatedBy = "Admin",
                CreatedAt = DateTime.UtcNow,
                UpdatedAt = DateTime.UtcNow
            },
            new Activity
            {
                Date = DateTime.Now.AddDays(-1),
                Cancelled = true,
                Latitude = 34.0522,
                Longitude = -118.2437,
                Country = "USA",
                Address = "456 Sunset Blvd, Los Angeles",
                Title = "Los Angeles Event",
                Description = "Description for Los Angeles event",
                Capacity = 80,
                ReservedCount = 20,
                Status = "Cancelled",
                IsPublic = false,
                Price = 40.0,
                CreatedBy = "Admin",
                CreatedAt = DateTime.UtcNow,
                UpdatedAt = DateTime.UtcNow
            },
            new Activity
            {
                Date = DateTime.Now,
                Cancelled = false,
                Latitude = 51.5074,
                Longitude = -0.1278,
                Country = "UK",
                Address = "789 London Rd, London",
                Title = "London Event",
                Description = "Description for London event",
                Capacity = 150,
                ReservedCount = 50,
                Status = "Pending",
                IsPublic = true,
                Price = 60.0,
                CreatedBy = "Admin",
                CreatedAt = DateTime.UtcNow,
                UpdatedAt = DateTime.UtcNow
            }
        };

        context.Activities.AddRange(activities);
        await context.SaveChangesAsync();
    }
}
