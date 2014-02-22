using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CheckWriter.Services
{
    public class ConverterService : IConverterService
    {
        public string Convert(int number)
        {
            return "This is my Converter Service";
        }
    }
}