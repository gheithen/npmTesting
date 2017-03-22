using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace npmTesting.Controllers
{
    public class HomeController : Controller
    {
        [Route("")]
        [Route("*")]
        [Route("Signup")]
        public IActionResult Index()
        {
            return View();
        }

    }
}
