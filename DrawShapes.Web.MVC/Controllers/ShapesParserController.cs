using Microsoft.AspNetCore.Mvc;
using System;

namespace DrawShapes.Web.MVC.Controllers
{
  [Route("api/[controller]")]
  public class ShapesParserController : Controller
  {
    [HttpPost("[action]")]
    // POST api/values
    public string Parse([FromBody]string value)
    {
      return $@"you posted {value} at {DateTime.Now.ToLongTimeString()}";
    }
  }
}
