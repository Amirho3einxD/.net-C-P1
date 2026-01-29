using System;
using System.ComponentModel.DataAnnotations;
namespace Domain;

public class Activity
{
    [Key]
    public string Id { get; set; } = Guid.NewGuid().ToString();
    
    public required DateTime Date { get; set; }

    public bool Cancelled { get; set; } = false;

    public  double Latitude { get; set; }

    public  double Longitude { get; set; }

    public required string Country { get; set; }

    public required string Address { get; set; }
    public required string Title { get; set; }

    public required string Description { get; set; }
    public  int Capacity { get; set; }

    public int ReservedCount { get; set; } = 0;

    public string Status { get; set; } = "Pending";

    public bool IsPublic { get; set; } = true;

    public  double Price { get; set; }

    public required string CreatedBy { get; set; }

    public  DateTime CreatedAt { get; set; } = DateTime.UtcNow;

    public  DateTime UpdatedAt { get; set; } = DateTime.UtcNow;

}
