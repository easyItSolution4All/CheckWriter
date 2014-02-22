using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace CheckWriter.Models
{
    public class Appointment
    {
        public int Id { get; set; }

        [Required]
        public DateTime AppointmentStartDate { get; set; }
        [Required]
        public string AppointmentStartTime { get; set; }
        [Required]
        public DateTime AppointmentEndDate { get; set; }
        public string AppointmentEndTime { get; set; }
        public string AppointmentLocation { get; set; }
        public DateTime AppointmentCreateDate { get; set; }

    }
}