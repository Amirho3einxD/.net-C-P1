using System;

namespace Application.Activities.DTO;

public class BaseActivityDto
{
    public DateTime Date { get; set; }
    public double Latitude { get; set; }
    public double Longitude { get; set; }
    public string Country { get; set; } = "";
    public string Status { get; set; } = "";
    public string Address { get; set; } = "";
    public string Title { get; set; } = "";
    public string Description { get; set; } = "";
    public int Capacity { get; set; }
    public double Price { get; set; }
    public string CreatedBy { get; set; } = "";
    public string Category { get; set; } = "";
}
