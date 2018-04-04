using System;
using System.Collections.Generic;
using System.Linq;
using DrawShapes.Web.MVC.Models;
using DrawShapes.Web.MVC.Services.Contracts;

namespace DrawShapes.Web.MVC.Services
{
  /// <summary>
  /// ShapesParsingService provides all parsing of a command using natural language.
  /// </summary>
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

    /// <summary>
    /// This method validates the command and returns validation messages for invalid command items.
    /// </summary>
    /// <param name="command">This is a natural language command. Example: Draw a rectangle with a width of 250 and a height of 400</param>
    /// <returns></returns>
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

    /// <summary>
    /// The main parse method, which does parsing to create any type of supported shape.
    /// </summary>
    /// <param name="command">This is a natural language command. Example: Draw a rectangle with a width of 250 and a height of 400</param>
    /// <returns></returns>
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
        //This statement parses and returns all attributes of a circle.
        return parseCircleOrOval(command, shapeType);
      }
      if (shapeType == SupportedShapesEnum.Square.ToString()
          || shapeType == SupportedShapesEnum.Rectangle.ToString()
          || shapeType == SupportedShapesEnum.Parallelogram.ToString())
      {
        //This statement parses and returns all attributes like height and width of a square or rectangle or parellellogram.
        return parseSquareOrRectangleOrParallelogram(command, shapeType);
      }

      if (shapeType == SupportedShapesEnum.Triangle.ToString())
      {
        //This statement parses and returns all attributes like height and width of a triangle.
        return parseTriangle(command, shapeType);
      }

      //This statement parses and returns all attributes like sides of a polygon (pentagon or hexagon or heptagon or octagon).
      return parsePolygon(command, shapeType);
    }

    /// <summary>
    /// This method takes the command and searches for the keyword from "following" parameter and then returns the number found after that keyword.
    /// </summary>
    /// <param name="command"></param>
    /// <param name="following">After which keyword, the number should be found.</param>
    /// <returns></returns>
    private int? getValueFollowing(string command, string following)
    {
      int idx = command.IndexOf(following, StringComparison.CurrentCultureIgnoreCase);  //find the index of "following" keyword.
      if (idx <= 0) return null;

      int startPos = idx + following.Length;
      string digits = "";

      bool digitFound = false;
      //search for number starting with the end index of "following" keyword.
      for (int i = startPos; i < command.Length; i++)
      {
        string characterAtIndex = command.Substring(i, 1);
        if (IsInteger(characterAtIndex))
        {
          digitFound = true;
          digits = digits + characterAtIndex; //append to digits
        }
        else
        {
          if (digitFound) break;  //if the character is not a valid numeric digit then end the digit search.
        }
      }

      if (!IsInteger(digits)) return null;

      return Convert.ToInt32(digits); //convert all digits which are found together to integer.
    }

    /// <summary>
    /// Returns if the value is integer or not.
    /// </summary>
    /// <param name="val"></param>
    /// <returns></returns>
    private bool IsInteger(string val)
    {
      int result;
      return int.TryParse(val, out result);
    }

    /// <summary>
    /// Following method parses the command to get the attributes of a circle/oval like radius or height or width.
    /// </summary>
    /// <param name="command"></param>
    /// <param name="shapeType"></param>
    /// <returns></returns>
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
        parsedHeight = radius.Value * 2;  //calculate height = radius * 2
        parsedWidth = radius.Value * 2;  //calculate width = radius * 2
      }
      else
      {
        if (height > 0)
        {
          parsedHeight = height;
          parsedWidth = (shapeType == SupportedShapesEnum.Circle.ToString() ? height : width); //height and width should be same if its a circle.
        }
        if (width > 0)
        {
          parsedHeight = (shapeType == SupportedShapesEnum.Circle.ToString() ? width : height); //height and width should be same if its a circle.
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

    /// <summary>
    /// Following method parses the command to get the attributes of a Square Or Rectangle Or Parallelogram like height and/or width.
    /// </summary>
    /// <param name="command"></param>
    /// <param name="shapeType"></param>
    /// <returns></returns>
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

    /// <summary>
    /// Following method parses the command to get the attributes of a Triangle like height and/or width.
    /// </summary>
    /// <param name="command"></param>
    /// <param name="shapeType"></param>
    /// <returns></returns>
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

    /// <summary>
    /// Following method parses the command to get the attributes of a polygon (pentagon or hexagon or heptagon or octagon) like length of all sides.
    /// </summary>
    /// <param name="command"></param>
    /// <param name="shapeType"></param>
    /// <returns></returns>
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
