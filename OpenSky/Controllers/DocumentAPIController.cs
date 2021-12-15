using OpenSky.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace OpenSky.Controllers
{
    public class DocumentAPIController : ApiController
    {
        List<DocumentModel> documents = new List<DocumentModel>();

        public void DocumentList()
        {
            documents.Add(new DocumentModel { IdDocument = 1, Title = "Autorização de Acesso ao Predio", Description = "Formulario de acesso ao predio para suporte e funcionarios filiais." });
            documents.Add(new DocumentModel { IdDocument = 2, Title = "Protocolo", Description = "Protocolo de teste" });
            documents.Add(new DocumentModel { IdDocument = 3, Title = "Document3", Description = "teste 3" });
        }

        // POST: api/DocumentAPI
        public List<DocumentModel> Post(string value)
        {
            DocumentList();
            return documents;
        }

        // GET: api/DocumentAPI
        public List<DocumentModel> Get()
        {
            DocumentList();
            return documents;
        }

        // GET: api/DocumentAPI/5
        public string Get(int id)
        {
            return "value";
        }

        // PUT: api/DocumentAPI/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/DocumentAPI/5
        public void Delete(int id)
        {
        }
    }
}
