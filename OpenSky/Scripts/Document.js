$(document).ready(function () {
    BuscarDocumentos();
});

function BuscarDocumentos() {
    // add txtBuscar and make it POST
    var url = "/api/DocumentAPI";
    $.get(url, null, function (data) {
        data.forEach(function (obj) {
            var titulo = obj.Title.length > 45 ? obj.Title.substring(0, 45) + "..." : obj.Title;
            var descricao = obj.Description.length > 100 ? obj.Description.substring(0, 100) + "..." : obj.Description;
            var versao = !obj.version ? "" : obj.version

            var html = '<div class="row documentoDaLista">';
            html += '       <div class="form-group form-group-sm col-sm-6 col-sm-offset-3">';
            html += '           <a href="#" class="list-group-item">';
            html += '           <h4 class="list-group-item-heading">' + titulo + '<small class="vercao">' + versao + '</small>'
            html += !obj.EditDate ? '' : '< small class="pull-right" style = "margin-top:5px" > Modificado:' + obj.EditDate + '</small >';
            html += '           </h4 >';
            html += '           <p class="list-group-item-text">' + descricao + '</p>';
            html += '           </a>';
            html += '       </div>';
            html += '   <div style="margin-top: 25px">';
            html += '       <button type="button" class="btn btn-sm btn-default" style="" onclick="BuscarDocumento(this);"><i class="fa fa-edit"></i></button>';
            html += '       <button type="button" class="btn btn-sm btn-default" style="" onclick="BuscarDocumentos();"><i class="fa fa-download"></i></button>';
            html += '   </div>';
            html += '   <span class="titulo" style="display:none">' + obj.Title + '</span>';
            html += '   <span class="descricao" style="display:none">' + obj.Description + '</span>';
            html += '   <span class="id" style="display:none">' + obj.Id + '</span>';
            html += '   <span class="nomeArquivo" style="display:none">' + obj.FileName + '</span>';
            html += '</div>';

            $("#divDocumentList").append(html);
        });
    });
}

function BuscarDocumento() {
    $(".spnEditing").text("Editar");
    $('#divDocInfo').slideDown();
}

function SalvarDocumento() {
    var dados = {
        titulo: $("#txtTitulo").val(),
        descricao: $("#txtDescricao").val(),
        versao: $("#txtVersao").val()
    }
};

function get() {
    var url = "/api/DocumentAPI";
    $.post(url, { value: 1 }, function (data) {
        data.forEach(obj => console.log(obj.IdDocument))
    });

}

function LimparCampos() {
    $(".spnEditing").text("Cadastrar Novo");
    $("#txtTitulo").val("");
    $("#txtDescricao").val("");
    $("#txtVersao").val("");
    $("#txtVersao").val("");
    $("#txtDataUltimaModificacao").val("");
    $("#fileArquivo").val("");
}