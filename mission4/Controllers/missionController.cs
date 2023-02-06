using Microsoft.AspNetCore.Mvc;
using mission4.Models;
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
        //In this thing you'll put the name of the view/.cshtml page and then youre golden
        [HttpGet]
        public IActionResult Calculator()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Calculator(CalculatorModel calculate)
        {
            return View();
        }
    }
}
