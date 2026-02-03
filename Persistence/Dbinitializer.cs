using System;
using Domain;
using Microsoft.AspNetCore.Identity;

namespace Persistence;

public class Dbinitializer
{
    public static async Task SeedData(AppDbContext context, UserManager<User> userManager)
    {
        if (!userManager.Users.Any())
        {
            var users=new List<User>
            {
                new() {DisplayName="Mamad",UserName="mamad@user.com",Email="mamad@user.com"},
                new() {DisplayName="Tom",UserName="tom@user.com",Email="tom@user.com"},
                new() {DisplayName="Ali",UserName="ali@user.com",Email="ali@user.com"},
                new() {DisplayName="Moz",UserName="moz@user.com",Email="moz@user.com"}
            };

            foreach(var user in users)
            {
                await userManager.CreateAsync(user,"Pass$$w0rd");
            }
        }
        if (context.Activities.Any()) return;

        var activities = new List<Activity>
        {
            new Activity
            {
                Date = DateTime.Now.AddDays(-2),
                Latitude = 40.7128,
                Longitude = -74.0060,
                Country = "USA",
                Address = "123 Main St, New York",
                Title = "New York Event",
                Description = "Description for New York event",
                Capacity = 100,
                Status = "pending",
                Price = 50.0,
                CreatedBy = "Admin",
                Category="food"
            },
            new Activity
            {
                Date = DateTime.Now.AddDays(-1),
                Latitude = 34.0522,
                Longitude = -118.2437,
                Country = "USA",
                Address = "456 Sunset Blvd, Los Angeles",
                Title = "Los Angeles Event",
                Description = "Description for Los Angeles event",
                Capacity = 80,
                Status = "pending",
                Price = 40.0,
                CreatedBy = "Admin",
                Category="music"
            }
        };

        context.Activities.AddRange(activities);
        await context.SaveChangesAsync();
    }
}
