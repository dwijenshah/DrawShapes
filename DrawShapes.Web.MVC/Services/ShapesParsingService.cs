using System;
using System.Collections.Generic;
using System.Linq;
using DrawShapes.Web.MVC.Models;
using DrawShapes.Web.MVC.Services.Contracts;

namespace DrawShapes.Web.MVC.Services
{
  public class ShapesParsingService : IShapesParsingService
  {
    public enum PolygonTypesWithAngles
    {
      Pentagon = 5,
      Hexagon = 6,
      Heptagon = 7,
      Octagon = 8
    }

    private enum SupportedShapesEnum
    {
      Triangle,
      Rectangle,
      Square,
      Pentagon,
      Hexagon,
      Heptagon,
      Octagon,
      Circle,
      Oval,
      Parallelogram
    }

    private string[] ValidateCommand(string command)
    {
      var errorMessages = new List<string>();

      if (string.IsNullOrEmpty(command))
      {
        errorMessages.Add("Please specify the command to draw the shape. Example: Draw a rectangle with a width of 250 and a height of 400.");
        return errorMessages.ToArray();
      }

      var supportedShapes = Enum.GetNames(typeof(SupportedShapesEnum));
      if (!supportedShapes.Any(s => command.ToLower().Contains(s.ToLower())))
      {
        errorMessages.Add($"Invalid Command: Please specify one of these supported shapes ({string.Join(", ", supportedShapes)} in your command.");
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

      var supportedShapes = Enum.GetNames(typeof(SupportedShapesEnum));
      var shapeType = supportedShapes.FirstOrDefault(s => command.ToLower().Contains(s.ToLower()));
      

      if (shapeType == SupportedShapesEnum.Circle.ToString() || shapeType == SupportedShapesEnum.Oval.ToString())
      {
        return parseCircleOrOval(command, shapeType);
      }
      if (shapeType == SupportedShapesEnum.Square.ToString()
          || shapeType == SupportedShapesEnum.Rectangle.ToString()
          || shapeType == SupportedShapesEnum.Parallelogram.ToString())
      {
        return parseSquareOrRectangleOrParallelogram(command, shapeType);
      }

      if (shapeType == SupportedShapesEnum.Triangle.ToString())
      {
        return parseTriangle(command, shapeType);
      }

      return parsePolygon(command, shapeType);
      //return new Response<ShapeAttributes>(null, new string[] { "This shape has not been implemented yet." });
    }

    public int? getValueFollowing(string command, string following)
    {
      int idx = command.IndexOf(following, StringComparison.CurrentCultureIgnoreCase);
      if (idx <= 0) return null;

      int startPos = idx + following.Length;
      string digits = "";

      bool digitFound = false;
      for (int i = startPos; i < command.Length; i++)
      {
        string characterAtIndex = command.Substring(i, 1);
        if (IsInteger(characterAtIndex))
        {
          digitFound = true;
          digits = digits + characterAtIndex;
        }
        else
        {
          if (digitFound) break;
        }
      }

      if (!IsInteger(digits)) return null;

      return Convert.ToInt32(digits);
    }


    private bool IsInteger(string val)
    {
      int result;
      return int.TryParse(val, out result);
    }

    private Response<ShapeAttributes> parseCircleOrOval(string command, string shapeType)
    {
      int? parsedHeight = 0; int? parsedWidth = 0;

      int? radius = getValueFollowing(command, "radius of");
      int? width = getValueFollowing(command, "width of");
      int? height = getValueFollowing(command, "height of");

      if ((radius == 0 || radius == null) && (height == 0 || height == null) && (width == 0 || width == null))
      {
        return new Response<ShapeAttributes>(null, new string[] { $"Please specify radius/height/width for the {shapeType.ToLower()}." });
      }

      if (radius > 0)
      {
        parsedHeight = radius.Value * 2;
        parsedWidth = radius.Value * 2;
      }
      else
      {
        if (height > 0)
        {
          parsedHeight = height;
          parsedWidth = (shapeType == SupportedShapesEnum.Circle.ToString() ? height : width);
        }
        if (width > 0)
        {
          parsedHeight = (shapeType == SupportedShapesEnum.Circle.ToString() ? width : height);
          parsedWidth = width;
        }

        if (shapeType == SupportedShapesEnum.Circle.ToString())
        {
          if (height > 0 && width > 0 && height != width)
          {
            return new Response<ShapeAttributes>(null, new string[] {"Circle should have same height and width, so please specify same value for height and width of this circle or specify only either height or width value."});
          }
        }
        if (shapeType == SupportedShapesEnum.Oval.ToString())
        {
          if (height == null || width == null || height == 0 || width == 0 || height == width)
          {
            return new Response<ShapeAttributes>(null, new string[] { "Oval should have different height and width, so please specify both height and width which dont match." });
          }
        }
      }

      return new Response<ShapeAttributes>(new ShapeAttributes()
      {
        ShapeType = shapeType.ToLower(),
        Height = parsedHeight.Value,
        Width = parsedWidth.Value,
      });
    }

    private Response<ShapeAttributes> parseSquareOrRectangleOrParallelogram(string command, string shapeType)
    {
      int? parsedHeight = 0; int? parsedWidth = 0;

      int? width = getValueFollowing(command, "width of");
      int? height = getValueFollowing(command, "height of");

      if ((height == 0 || height == null) && (width == 0 || width == null))
      {
        return new Response<ShapeAttributes>(null, new string[] { $"Please specify height/width for the {shapeType.ToLower()}." });
      }

      if (height > 0)
      {
        parsedHeight = height;
        parsedWidth = (shapeType == SupportedShapesEnum.Square.ToString() ? height : width);
      }
      if (width > 0)
      {
        parsedHeight = (shapeType == SupportedShapesEnum.Square.ToString() ? width : height);
        parsedWidth = width;
      }

      if (shapeType == SupportedShapesEnum.Square.ToString())
      {
        if (height > 0 && width > 0 && height != width)
        {
          return new Response<ShapeAttributes>(null, new string[] { $"{shapeType} should have same height and width, so please specify same value for height and width of this {shapeType} or specify only either height or width value." });
        }
      }
      if (shapeType == SupportedShapesEnum.Rectangle.ToString())
      {
        if (height == null || width == null || height == 0 || width == 0 || height == width)
        {
          return new Response<ShapeAttributes>(null, new string[] { $"{shapeType} should have different height and width, so please specify both height and width which dont match." });
        }
      }

      if (shapeType == SupportedShapesEnum.Parallelogram.ToString())
      {
        if (height == null || width == null || height == 0 || width == 0)
        {
          return new Response<ShapeAttributes>(null, new string[] { $"Please specify both height and width for {shapeType}." });
        }
      }

      return new Response<ShapeAttributes>(new ShapeAttributes()
      {
        ShapeType = shapeType.ToLower(),
        Height = parsedHeight.Value,
        Width = parsedWidth.Value,
      });
    }


    private Response<ShapeAttributes> parseTriangle(string command, string shapeType)
    {
      int? width = getValueFollowing(command, "width of");
      int? height = getValueFollowing(command, "height of");

      if ((height == 0 || height == null) && (width == 0 || width == null))
      {
        return new Response<ShapeAttributes>(null, new string[] { $"Please specify height/width for the {shapeType.ToLower()}." });
      }

      if (height > 0 && (width == 0 || width == null)) width = height;
      if ((height == 0 || height == null) && width > 0) height = width;

      return new Response<ShapeAttributes>(new ShapeAttributes()
      {
        ShapeType = shapeType.ToLower(),
        Height = height.Value,
        Width = width.Value
      });
    }

    private Response<ShapeAttributes> parsePolygon(string command, string shapeType)
    {
      int? sideLength = getValueFollowing(command, "side of");

      if (sideLength == 0 || sideLength == null)
      {
        return new Response<ShapeAttributes>(null, new string[] { $"Please specify length for sides of the {shapeType.ToLower()}." });
      }

      int? numberOfAngles = 0;
      if (shapeType == SupportedShapesEnum.Pentagon.ToString()) numberOfAngles = (int) PolygonTypesWithAngles.Pentagon;
      if (shapeType == SupportedShapesEnum.Hexagon.ToString()) numberOfAngles = (int)PolygonTypesWithAngles.Hexagon;
      if (shapeType == SupportedShapesEnum.Heptagon.ToString()) numberOfAngles = (int)PolygonTypesWithAngles.Heptagon;
      if (shapeType == SupportedShapesEnum.Octagon.ToString()) numberOfAngles = (int)PolygonTypesWithAngles.Octagon;

      return new Response<ShapeAttributes>(new ShapeAttributes()
      {
        ShapeType = shapeType.ToLower(),
        Side = sideLength,
        NumberOfAngles = numberOfAngles
      });
    }
  }
  
}
