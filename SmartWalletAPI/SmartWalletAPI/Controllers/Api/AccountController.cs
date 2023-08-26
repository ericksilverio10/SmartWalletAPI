using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;


namespace SmartWalletAPI.Controllers.Api
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : Controller
    {
        [HttpGet]
        [Route("get")]
        public String Index()
        {
            return "Olá mundo!";
        }
    }
}

