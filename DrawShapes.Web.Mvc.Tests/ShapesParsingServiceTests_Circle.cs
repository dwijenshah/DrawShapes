using System.Linq;
using DrawShapes.Web.MVC.Services;
using DrawShapes.Web.MVC.Services.Contracts;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace DrawShapes.Web.Mvc.Tests
{
  [TestClass]
  public class ShapesParsingServiceTests_Circle
  {
    [TestMethod]
    public void Test_Command_Parsing_Circle_Radius()
    {
      IShapesParsingService service = new ShapesParsingService();
      var response = service.Parse("Draw a circle with radius of 100");
      Assert.IsTrue(response.ErrorMessages == null || !response.ErrorMessages.Any());
      Assert.AreEqual(ShapesParsingService.SupportedShapesEnum.Circle.ToString().ToLower(), response.Data.ShapeType);
      Assert.AreEqual(100 * 2, response.Data.Height);
      Assert.AreEqual(100 * 2, response.Data.Width);
    }

    [TestMethod]
    public void Test_Command_Parsing_Circle_Height()
    {
      IShapesParsingService service = new ShapesParsingService();
      var response = service.Parse("Draw a circle with height of 100");
      Assert.IsTrue(response.ErrorMessages == null || !response.ErrorMessages.Any());
      Assert.AreEqual(ShapesParsingService.SupportedShapesEnum.Circle.ToString().ToLower(), response.Data.ShapeType);
      Assert.AreEqual(100, response.Data.Height);
      Assert.AreEqual(100, response.Data.Width);
    }

    [TestMethod]
    public void Test_Command_Parsing_Circle_Width()
    {
      IShapesParsingService service = new ShapesParsingService();
      var response = service.Parse("Draw a circle with width of 100");
      Assert.IsTrue(response.ErrorMessages == null || !response.ErrorMessages.Any());
      Assert.AreEqual(ShapesParsingService.SupportedShapesEnum.Circle.ToString().ToLower(), response.Data.ShapeType);
      Assert.AreEqual(100, response.Data.Height);
      Assert.AreEqual(100, response.Data.Width);
    }
  }
}
