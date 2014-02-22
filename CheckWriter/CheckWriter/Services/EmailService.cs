using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CheckWriter.Services
{
    public class EmailService : IEmailService
    {
        public void SendDailyEmails()
        {
            //throw new NotImplementedException();
        }
        public List<string> GetAllEmails()
        {
            return new List<string> {"saroj@yahoo.com", "samri@grass.com", "MeenaSmith@yahoo.com" };
        }
    }
}