using System.Web.Mvc;

namespace CheckWriter.Areas.Admin
{
    public class AdminAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "Admin";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "Admin_default",
                "Admin/south-america/{controller}/{action}/{id}",
                new {   action = "Index", id = UrlParameter.Optional }
            );

            context.MapRoute(
                "Admin_Europe",
                "Admin/europe/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );

            context.MapRoute(
                "Admin_Asia",
                "Admin/asia/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}