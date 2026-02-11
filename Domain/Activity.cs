using System;
using System.ComponentModel.DataAnnotations;
namespace Domain;

public class Activity
{
    [Key]
    public string Id { get; set; } = Guid.NewGuid().ToString();
    public required DateTime Date { get; set; }
    public required double Latitude { get; set; }
    public required double Longitude { get; set; }
    public required string Country { get; set; }
    public required string Address { get; set; }
    public required string Title { get; set; }
    public required string Description { get; set; }
    public required int Capacity { get; set; }
    public required string Category { get; set; }
    public required string Status { get; set; }
    public required double Price { get; set; }
    public bool isCancelled { get; set; } =false;

    //navigation properties
    public ICollection<ActivityAttendee> Attendees { get; set; }=[];
    public ICollection<Comment> Comments { get; set; }=[];
}
