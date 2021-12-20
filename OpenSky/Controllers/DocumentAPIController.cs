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
            documents.Add(new DocumentModel { IdDocument = 1, Version = "1.0", LastModification = DateTime.Now.AddMonths(-1), Title = "Manual de Gestão e Fiscalização de Contratos 2021", Description = "A gestão e a fiscalização são atividades exercidas para controle, acompanhamento e monitoramento do cumprimento das obrigações contratuais, com o fim de assegurar a qualidade da execução do objeto contratado, o respeito às regras do ajuste e das normas vigentes." });
            documents.Add(new DocumentModel { IdDocument = 2, Version = "2", LastModification = DateTime.Now.AddMonths(-3), Title = "AUTORIZAÇÃO DE EMISSÃO DE NOTA FISCAL ", Description = "aturamento dos serviços mediante emissão de nota fiscal no exato valor dimensionado neste Termo e, com fulcro no art. 24 da Lei 9784/99" });
            documents.Add(new DocumentModel { IdDocument = 3, Version = "2", LastModification = DateTime.Now.AddMonths(-2), Title = "RELATÓRIO DE FISCALIZAÇÃO SETORIAL ", Description = "EXECUÇÃO CONTRATUAL (deverá ser relatada a forma que vem sendo prestado o serviço, conforme pactuado no Contrato, e cada problema      detectado) " });
        }

        // POST: api/DocumentAPI
        public List<DocumentModel> Post(DocumentModel document)
        {
            DocumentList();
            var index = documents.FindLastIndex(obj => obj.IdDocument == document.IdDocument);
            if (index != -1)
            {
                documents[index].LastModification = DateTime.Now;
                documents[index].Title = document.Title;
                documents[index].Description = document.Description;
                documents[index].Version = document.Version;
            }
            else
            {
                documents.Add(document);
            }

            return documents;
        }

        public List<DocumentModel> Get()
        {
            DocumentList();
            return documents;
        }

        public List<DocumentModel> Get(string pesquisa)
        {
            DocumentList();
            if (!String.IsNullOrEmpty(pesquisa))
            {
                pesquisa = pesquisa.ToLower();
                var resultado = documents.Where(r => (r.Title.ToLower().Contains(pesquisa)) || r.Description.ToLower().Contains(pesquisa)).ToList();
                return resultado;
            }
            else
            {
                return documents;
            }

        }

        public List<DocumentModel> Delete(string pesquisa)
        {
            DocumentList();
            var item = documents.SingleOrDefault(obj => obj.IdDocument == int.Parse(pesquisa));
            if (item != null)
                documents.Remove(item);

            return documents;
        }
    }
}
