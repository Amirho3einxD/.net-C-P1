using System;

namespace Application.Core;

public class AppExeption(int statusCode,string message,string?details)
{
   public int StatusCode { get; set; }=statusCode;
   public string Message { get; set; }=message;
   public string? Details { get; set; }=details;
}
