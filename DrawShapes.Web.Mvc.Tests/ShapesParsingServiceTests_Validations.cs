using System.Linq;
using DrawShapes.Web.MVC.Services;
using DrawShapes.Web.MVC.Services.Contracts;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace DrawShapes.Web.Mvc.Tests
{
  [TestClass]
  public class ShapesParsingServiceTests_Validations
  {
    [TestMethod]
    public void Test_That_When_Command_Is_Empty_Then_Validation_Fails()
    {
      IShapesParsingService service = new ShapesParsingService();
      var response = service.Parse("");
      Assert.IsTrue(response.ErrorMessages != null && response.ErrorMessages.Any());
    }

    [TestMethod]
    public void Test_That_When_No_Circle_Radius_Height_Or_Width_Specified_Then_Validation_Fails()
    {
      IShapesParsingService service = new ShapesParsingService();
      var response = service.Parse("Draw a circle with 100");
      Assert.IsTrue(response.ErrorMessages != null && response.ErrorMessages.Any());
    }

    [TestMethod]
    public void Test_That_When_Specified_Different_Height_And_Width_For_Circle_Validation_Fails()
    {
      IShapesParsingService service = new ShapesParsingService();
      var response = service.Parse("Draw a circle with width of 100 and height of 200");
      Assert.IsTrue(response.ErrorMessages != null && response.ErrorMessages.Any());
    }

    [TestMethod]
    public void Test_That_When_No_Oval_Height_And_Width_Specified_Then_Validation_Fails()
    {
      IShapesParsingService service = new ShapesParsingService();
      var response = service.Parse("Draw a Oval");
      Assert.IsTrue(response.ErrorMessages != null && response.ErrorMessages.Any());

      response = service.Parse("Draw a Oval with a radius of 100");
      Assert.IsTrue(response.ErrorMessages != null && response.ErrorMessages.Any());

      response = service.Parse("Draw a Oval with a height of 100");
      Assert.IsTrue(response.ErrorMessages != null && response.ErrorMessages.Any());

      response = service.Parse("Draw a Oval with a width of 100");
      Assert.IsTrue(response.ErrorMessages != null && response.ErrorMessages.Any());
    }

    [TestMethod]
    public void Test_That_When_Specified_Same_Height_And_Width_For_Oval_Validation_Fails()
    {
      IShapesParsingService service = new ShapesParsingService();
      var response = service.Parse("Draw a Oval with width of 100 and height of 100");
      Assert.IsTrue(response.ErrorMessages != null && response.ErrorMessages.Any());
    }

    [TestMethod]
    public void Test_That_When_Not_Specified_Height_And_Width_For_Square_Validation_Fails()
    {
      IShapesParsingService service = new ShapesParsingService();
      var response = service.Parse("Draw a square");
      Assert.IsTrue(response.ErrorMessages != null && response.ErrorMessages.Any());
    }

    [TestMethod]
    public void Test_That_When_Specified_Different_Height_And_Width_For_Square_Validation_Fails()
    {
      IShapesParsingService service = new ShapesParsingService();
      var response = service.Parse("Draw a square with width of 100 and height of 200");
      Assert.IsTrue(response.ErrorMessages != null && response.ErrorMessages.Any());
    }

    [TestMethod]
    public void Test_That_When_Not_Specified_Height_And_Width_For_Rectangle_Validation_Fails()
    {
      IShapesParsingService service = new ShapesParsingService();
      var response = service.Parse("Draw a Rectangle");
      Assert.IsTrue(response.ErrorMessages != null && response.ErrorMessages.Any());
    }

    [TestMethod]
    public void Test_That_When_Specified_Same_Height_And_Width_For_Rectangle_Validation_Fails()
    {
      IShapesParsingService service = new ShapesParsingService();
      var response = service.Parse("Draw a Rectangle with width of 100 and height of 100");
      Assert.IsTrue(response.ErrorMessages != null && response.ErrorMessages.Any());
    }

    [TestMethod]
    public void Test_That_When_Not_Specified_Height_And_Width_For_Triangle_Validation_Fails()
    {
      IShapesParsingService service = new ShapesParsingService();
      var response = service.Parse("Draw a Triangle");
      Assert.IsTrue(response.ErrorMessages != null && response.ErrorMessages.Any());
    }

    [TestMethod]
    public void Test_That_When_Specified_Radius_For_Triangle_Validation_Fails()
    {
      IShapesParsingService service = new ShapesParsingService();
      var response = service.Parse("Draw a Triangle with a radius of 100");
      Assert.IsTrue(response.ErrorMessages != null && response.ErrorMessages.Any());
    }

    [TestMethod]
    public void Test_That_When_Not_Specified_Sides_For_Pentagon_Validation_Fails()
    {
      IShapesParsingService service = new ShapesParsingService();
      var response = service.Parse("Draw a Pentagon");
      Assert.IsTrue(response.ErrorMessages != null && response.ErrorMessages.Any());

      response = service.Parse("Draw a Pentagon with a height of 100 and width of 200");
      Assert.IsTrue(response.ErrorMessages != null && response.ErrorMessages.Any());
    }

    [TestMethod]
    public void Test_That_When_Not_Specified_Sides_For_Hexagon_Validation_Fails()
    {
      IShapesParsingService service = new ShapesParsingService();
      var response = service.Parse("Draw a Hexagon");
      Assert.IsTrue(response.ErrorMessages != null && response.ErrorMessages.Any());

      response = service.Parse("Draw a Hexagon with a height of 100 and width of 200");
      Assert.IsTrue(response.ErrorMessages != null && response.ErrorMessages.Any());
    }

    [TestMethod]
    public void Test_That_When_Not_Specified_Sides_For_Heptagon_Validation_Fails()
    {
      IShapesParsingService service = new ShapesParsingService();
      var response = service.Parse("Draw a Heptagon");
      Assert.IsTrue(response.ErrorMessages != null && response.ErrorMessages.Any());

      response = service.Parse("Draw a Heptagon with a height of 100 and width of 200");
      Assert.IsTrue(response.ErrorMessages != null && response.ErrorMessages.Any());
    }

    [TestMethod]
    public void Test_That_When_Not_Specified_Sides_For_Octagon_Validation_Fails()
    {
      IShapesParsingService service = new ShapesParsingService();
      var response = service.Parse("Draw a Octagon");
      Assert.IsTrue(response.ErrorMessages != null && response.ErrorMessages.Any());

      response = service.Parse("Draw a Octagon with a height of 100 and width of 200");
      Assert.IsTrue(response.ErrorMessages != null && response.ErrorMessages.Any());
    }

    [TestMethod]
    public void Test_That_When_Not_Specified_Height_And_Width_For_Parellelogram_Validation_Fails()
    {
      IShapesParsingService service = new ShapesParsingService();
      var response = service.Parse("Draw a Parallelogram");
      Assert.IsTrue(response.ErrorMessages != null && response.ErrorMessages.Any());
    }
  }
}
