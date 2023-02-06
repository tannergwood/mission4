using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace mission4.Controllers
{
    public class MissionController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Mission()
        {
            return View();
        }
    }
}
