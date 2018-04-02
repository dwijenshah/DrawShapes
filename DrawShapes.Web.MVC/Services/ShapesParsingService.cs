using System.Collections.Generic;
using System.Linq;
using DrawShapes.Web.MVC.Models;
using DrawShapes.Web.MVC.Services.Contracts;

namespace DrawShapes.Web.MVC.Services
{
  public class ShapesParsingService : IShapesParsingService
  {
    private string[] _supportedShapes = new[]
    {
      "Triangle",
      "Rectangle",
      "Square",
      "Pentagon",
      "Hexagon",
      "Heptagon",
      "Octagon",
      "Circle",
      "Oval",
      "Parallelogram"
    };

    private string[] ValidateCommand(string command)
    {
      var errorMessages = new List<string>();

      if (string.IsNullOrEmpty(command))
      {
        errorMessages.Add("Please specify the command to draw the shape. Example: Draw a rectangle with a width of 250 and a height of 400");
        return errorMessages.ToArray();
      }

      if (!this._supportedShapes.Any(s => command.ToLower().Contains(s.ToLower())))
      {
        errorMessages.Add($"Invalid Command: Please specify one of these supported shapes ({string.Join(",", _supportedShapes)}) in your command");
      }

      return errorMessages.ToArray();
    }

    public Response<ShapeAttributes> Parse(string command)
    {
      var errorMessages = ValidateCommand(command);

      if (errorMessages != null && errorMessages.Length > 0)
      {
        return new Response<ShapeAttributes>(null, errorMessages);
      }
      
      return new Response<ShapeAttributes>(new ShapeAttributes()
      {
        ShapeType = "Circle".ToLower(),
        Height = 200,
        Width = 200
      });
    }
  }
}
