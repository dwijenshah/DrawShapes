
using System.Linq;
using DrawShapes.Web.MVC.Services;
using DrawShapes.Web.MVC.Services.Contracts;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace DrawShapes.Web.Mvc.Tests
{
  [TestClass]
  public class ShapesParsingServiceTests_Polygon_Shapes
  {
    [TestMethod]
    public void Test_That_Parsing_Pentagon_Succeeds_When_Specifying_Side_Length()
    {
      IShapesParsingService service = new ShapesParsingService();
      var response = service.Parse("Draw a Pentagon with side of 100");
      Assert.IsTrue(response.ErrorMessages == null || !response.ErrorMessages.Any());
      Assert.AreEqual(ShapesParsingService.SupportedShapesEnum.Pentagon.ToString().ToLower(), response.Data.ShapeType);
      Assert.AreEqual(5, response.Data.NumberOfAngles);
    }

    [TestMethod]
    public void Test_That_Parsing_Hexagon_Succeeds_When_Specifying_Side_Length()
    {
      IShapesParsingService service = new ShapesParsingService();
      var response = service.Parse("Draw a Hexagon with side of 100");
      Assert.IsTrue(response.ErrorMessages == null || !response.ErrorMessages.Any());
      Assert.AreEqual(ShapesParsingService.SupportedShapesEnum.Hexagon.ToString().ToLower(), response.Data.ShapeType);
      Assert.AreEqual(6, response.Data.NumberOfAngles);
    }

    [TestMethod]
    public void Test_That_Parsing_Heptagon_Succeeds_When_Specifying_Side_Length()
    {
      IShapesParsingService service = new ShapesParsingService();
      var response = service.Parse("Draw a Heptagon with side of 100");
      Assert.IsTrue(response.ErrorMessages == null || !response.ErrorMessages.Any());
      Assert.AreEqual(ShapesParsingService.SupportedShapesEnum.Heptagon.ToString().ToLower(), response.Data.ShapeType);
      Assert.AreEqual(7, response.Data.NumberOfAngles);
    }

    [TestMethod]
    public void Test_That_Parsing_Octagon_Succeeds_When_Specifying_Side_Length()
    {
      IShapesParsingService service = new ShapesParsingService();
      var response = service.Parse("Draw a Octagon with side of 100");
      Assert.IsTrue(response.ErrorMessages == null || !response.ErrorMessages.Any());
      Assert.AreEqual(ShapesParsingService.SupportedShapesEnum.Octagon.ToString().ToLower(), response.Data.ShapeType);
      Assert.AreEqual(8, response.Data.NumberOfAngles);
    }
  }
}
