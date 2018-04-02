using System;
using System.Text.RegularExpressions;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace DrawShapes.Web.MVC.Tests
{
  [TestClass]
  public class UnitTest1
  {
    [TestMethod]
    public void TestMethod1()
    {
      var regex = new Regex("[0-9]");

      Console.WriteLine(regex.IsMatch("abcd1"));
      Console.WriteLine(regex.IsMatch("1"));
    }
  }
}
