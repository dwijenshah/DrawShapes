using System.Linq;
using DrawShapes.Web.MVC.Services;
using DrawShapes.Web.MVC.Services.Contracts;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace DrawShapes.Web.Mvc.Tests
{
  [TestClass]
  public class ShapesParsingServiceTests_Rectangle
  {
    [TestMethod]
    public void Test_That_Parsing_Rectangle_Succeeds_When_Specifying_Height_And_Width()
    {
      IShapesParsingService service = new ShapesParsingService();
      var response = service.Parse("Draw a Rectangle with height of 100 and width of 200");
      Assert.IsTrue(response.ErrorMessages == null || !response.ErrorMessages.Any());
      Assert.AreEqual(ShapesParsingService.SupportedShapesEnum.Rectangle.ToString().ToLower(), response.Data.ShapeType);
      Assert.AreEqual(100, response.Data.Height);
      Assert.AreEqual(200, response.Data.Width);
    }
  }
}
