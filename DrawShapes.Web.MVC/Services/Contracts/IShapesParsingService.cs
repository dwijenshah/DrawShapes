using DrawShapes.Web.MVC.Models;

namespace DrawShapes.Web.MVC.Services.Contracts
{
  public interface IShapesParsingService
  {
    Response<ShapeAttributes> Parse(string command);
  }
}
