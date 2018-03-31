using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using Microsoft.AspNetCore.Mvc;

namespace AngularAndDotnet.Controllers
{
  [Route("api/[controller]")]
  public class ValuesController : Controller
  {
    // GET api/values
    public IEnumerable<string> Get()
    {
      return new string[] { "value1", "value2" };
    }

    [HttpGet("[action]")]
    // GET api/values/5
    public string Get(int id)
    {
      return $@"value returned at {DateTime.Now.ToLongTimeString()}"  ;
    }

    [HttpPost("[action]")]
    // POST api/values
    public string Post([FromBody]string value)
    {
      return $@"you posted ${value} at {DateTime.Now.ToLongTimeString()}";
    }

    // PUT api/values/5
    public void Put(int id, [FromBody]string value)
    {
    }

    // DELETE api/values/5
    public void Delete(int id)
    {
    }
  }
}
