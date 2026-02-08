using System;

namespace Application.Profiles.DTOs;

public class PhotoUploadResult
{
    public required string PublicID { get; set; }
    public required string Url { get; set; }
}
