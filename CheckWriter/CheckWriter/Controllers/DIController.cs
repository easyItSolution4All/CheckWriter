using CheckWriter.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace CheckWriter.Controllers
{
    public class DIController : Controller
    {


        private readonly IEmailService _emailService;
        private readonly IConverterService _converterSvc;
        public DIController(IEmailService emailService, IConverterService converterService)
        {
            _emailService = emailService;
            _converterSvc = converterService;
        }

        public ActionResult Index()
        {

            _emailService.SendDailyEmails();
            return View();
        }

        public ActionResult ViewEmails ()
        {
            string currentValue = _converterSvc.Convert(300);
            ViewBag.Message = _converterSvc.Convert(300);
            var emailList = _emailService.GetAllEmails();
            return View(emailList);
        }
	}
}