using System;
using Application.Profiles.DTOs;
using Microsoft.AspNetCore.Http;

namespace Application.Interfaces;

public interface IPhotoService
{
    Task<PhotoUploadResult?> UpliadPhoto(IFormFile file);
    Task<string> DeletePhoto(string publicId);
}
