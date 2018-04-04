using System.Linq;
using DrawShapes.Web.MVC.Services;
using DrawShapes.Web.MVC.Services.Contracts;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace DrawShapes.Web.Mvc.Tests
{
  [TestClass]
  public class ShapesParsingServiceTests_Parallelogram
  {
    [TestMethod]
    public void Test_That_Parsing_Parallelogram_Succeeds_When_Specifying_Just_Height()
    {
      IShapesParsingService service = new ShapesParsingService();
      var response = service.Parse("Draw a Parallelogram with height of 100");
      Assert.IsTrue(response.ErrorMessages == null || !response.ErrorMessages.Any());
      Assert.AreEqual(ShapesParsingService.SupportedShapesEnum.Parallelogram.ToString().ToLower(), response.Data.ShapeType);
      Assert.AreEqual(100, response.Data.Height);
      Assert.AreEqual(100, response.Data.Width);
    }

    [TestMethod]
    public void Test_That_Parsing_Parallelogram_Succeeds_When_Specifying_Just_Width()
    {
      IShapesParsingService service = new ShapesParsingService();
      var response = service.Parse("Draw a Parallelogram with width of 100");
      Assert.IsTrue(response.ErrorMessages == null || !response.ErrorMessages.Any());
      Assert.AreEqual(ShapesParsingService.SupportedShapesEnum.Parallelogram.ToString().ToLower(), response.Data.ShapeType);
      Assert.AreEqual(100, response.Data.Height);
      Assert.AreEqual(100, response.Data.Width);
    }

    [TestMethod]
    public void Test_That_Parsing_Parallelogram_Succeeds_When_Specifying_Height_And_Width()
    {
      IShapesParsingService service = new ShapesParsingService();
      var response = service.Parse("Draw a Parallelogram with width of 100 and height of 100");
      Assert.IsTrue(response.ErrorMessages == null || !response.ErrorMessages.Any());
      Assert.AreEqual(ShapesParsingService.SupportedShapesEnum.Parallelogram.ToString().ToLower(), response.Data.ShapeType);
      Assert.AreEqual(100, response.Data.Height);
      Assert.AreEqual(100, response.Data.Width);
    }
  }
}
