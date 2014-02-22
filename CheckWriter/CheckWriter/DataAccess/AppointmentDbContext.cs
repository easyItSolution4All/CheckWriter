using CheckWriter.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace CheckWriter.DataAccess
{
    public class AppointmentDbContext : DbContext
    {
        AppointmentDbContext() : base("") { }
        DbSet<Appointment> Appointments { get; set; }
    }
}