using DrawShapes.Web.MVC.Models;
using DrawShapes.Web.MVC.Services;
using DrawShapes.Web.MVC.Services.Contracts;
using Microsoft.AspNetCore.Mvc;

namespace DrawShapes.Web.MVC.Controllers
{
  [Route("api/[controller]")]
  public class ShapesParserController : Controller
  {
    [HttpPost("[action]")]
    public Response<ShapeAttributes> Parse([FromBody]string command)
    {
      IShapesParsingService shapesParsingService = new ShapesParsingService();
      return shapesParsingService.Parse(command);
    }
  }
}
