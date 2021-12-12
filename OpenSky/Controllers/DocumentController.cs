using OpenSky.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace OpenSky.Controllers
{
    public class DocumentController : Controller
    {
        // GET: Document
        public ActionResult Index()
        { 
            return View();
        }

        public ActionResult ListaDocumentos()
        {
            List<DocumentInfoModel> documento = new List<DocumentInfoModel>();
            documento.Add(new DocumentInfoModel { Titulo = "teste 1", Descricao = "descricao do documento teste 1", NomeArquivo = "teste_1"});
            documento.Add(new DocumentInfoModel { Titulo = "teste 2", Descricao = "descricao do documento teste 2", NomeArquivo = "teste_2"});
            documento.Add(new DocumentInfoModel { Titulo = "teste 3", Descricao = "descricao do documento teste 3", NomeArquivo = "teste_3"});
                return View(documento);
        }
    }
}