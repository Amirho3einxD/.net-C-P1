using System;
using Application.Profiles.DTOs;

namespace Application.Activities.DTO;

public class ActivityDto
{
    public required string Id { get; set; }
    public DateTime Date { get; set; }
    public  double Latitude { get; set; }
    public  double Longitude { get; set; }
    public required string Country { get; set; }
    public required string Address { get; set; }
    public required string Title { get; set; }
    public required string Description { get; set; }
    public required int Capacity { get; set; }
    public required string Category { get; set; }
    public required string Status { get; set; }
    public required double Price { get; set; }
    public required string CreatedBy { get; set; }
    public bool isCancelled { get; set; }
    public required string HostDisplayName { get; set; }
    public required string HostId { get; set; }

    //navigation properties
    public ICollection<UserProfile> Attendees { get; set; } = [];
}
