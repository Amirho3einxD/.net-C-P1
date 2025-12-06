using System;
using System.ComponentModel.DataAnnotations;

namespace Domain;

public class Activity
{
    [Key]
    public string Id { get; set; } = Guid.NewGuid().ToString();
    public DateTime Date { get; set; }
    public bool Cancelled { get; set; }
    public double latitude { get; set; }
    public required string City { get; set; }

    
}
