using System;
using Domain;
using Microsoft.AspNetCore.Identity;

namespace Persistence;

public class Dbinitializer
{

    private static List<ActivityAttendee> CreateAttendees(
        User host,
        params User[] guests)
    {
        var attendees = new List<ActivityAttendee>
    {
        new ActivityAttendee
        {
            UserId = host.Id,
            IsHost = true
        }
    };

        attendees.AddRange(
            guests.Select(g => new ActivityAttendee
            {
                UserId = g.Id,
                IsHost = false
            })
        );

        return attendees;
    }

    public static async Task SeedData(AppDbContext context, UserManager<User> userManager)
    {
        var users = new List<User>
            {
                new() {DisplayName="OozBeleb",UserName="OozBeleb@test.com",Email="OozBeleb@test.com"},
                new() {DisplayName="Tom",UserName="tom@test.com",Email="tom@test.com"},
                new() {DisplayName="Ali",UserName="ali@user.com",Email="ali@user.com"},
                new() {DisplayName="Moz",UserName="moz@user.com",Email="moz@user.com"}
            };
        if (!userManager.Users.Any())
        {
            foreach (var user in users)
            {
                await userManager.CreateAsync(user, "Pa$$w0rd");
            }
        }
        if (context.Activities.Any()) return;

        var activities = new List<Activity>
        {
    new()
    {
        Title = "Past Activity 1",
        Date = DateTime.Now.AddMonths(-2),
        Description = "Activity 2 months ago",
        Category = "drinks",
        Country = "United Kingdom",
        Address = "The Lamb and Flag, Covent Garden, London",
        Latitude = 51.51171665,
        Longitude = -0.1256611057818921,
        CreatedBy = users[0].DisplayName!,
        Price = 40,
        Capacity = 43,
        Status = "pending",
        Attendees = CreateAttendees(users[0], users[1])
    },

    new()
    {
        Title = "Past Activity 2",
        Date = DateTime.Now.AddMonths(-1),
        Description = "Activity 1 month ago",
        Category = "culture",
        Country = "France",
        Address = "Louvre Museum, Paris",
        Latitude = 48.8611473,
        Longitude = 2.33802768704666,
        CreatedBy = users[1].DisplayName!,
        Price = 25,
        Capacity = 30,
        Status = "completed",
        Attendees = CreateAttendees(users[1], users[2], users[0])
    },

    new()
    {
        Title = "Future Activity 1",
        Date = DateTime.Now.AddMonths(1),
        Description = "Activity 1 month in future",
        Category = "culture",
        Country = "United Kingdom",
        Address = "Natural History Museum, London",
        Latitude = 51.4965109,
        Longitude = -0.1760019,
        CreatedBy = users[2].DisplayName!,
        Price = 15,
        Capacity = 20,
        Status = "active",
        Attendees = CreateAttendees(users[2])
    },

    new()
    {
        Title = "Future Activity 2",
        Date = DateTime.Now.AddMonths(2),
        Description = "Activity 2 months in future",
        Category = "music",
        Country = "United Kingdom",
        Address = "The O2 Arena, London",
        Latitude = 51.50293665,
        Longitude = 0.0032029278126681844,
        CreatedBy = users[0].DisplayName!,
        Price = 60,
        Capacity = 100,
        Status = "active",
        Attendees = CreateAttendees(users[0], users[2])
    },

    new()
    {
        Title = "Future Activity 3",
        Date = DateTime.Now.AddMonths(3),
        Description = "Activity 3 months in future",
        Category = "drinks",
        Country = "United Kingdom",
        Address = "The Mayflower Pub, London",
        Latitude = 51.501778,
        Longitude = -0.053577,
        CreatedBy = users[1].DisplayName!,
        Price = 20,
        Capacity = 25,
        Status = "active",
        Attendees = CreateAttendees(users[1])
    }
       };

        context.Activities.AddRange(activities);
        await context.SaveChangesAsync();
    }
}
