using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DrawShapes.Web.MVC.Models
{
    public class Response<T> where T: class
    {
      public Response(T data, string[] messages = null)
      {
        this.Data = data;
        this.ErrorMessages = messages;
      }

      public T Data { get; set; }
      public IEnumerable<string> ErrorMessages { get; set; } = null;
    }
}
