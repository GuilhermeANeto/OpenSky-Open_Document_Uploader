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

            var html = '<div id="document_' + obj.IdDocument + '" class="row documentoDaLista">';
            html += '       <div class="form-group form-group-sm col-sm-6 col-sm-offset-3" style="margin-bottom:0">';
            html += '           <a href="#" class="list-group-item">';
            html += '           <h4 class="list-group-item-heading">' + titulo + '<small class="versao">' + versao + '</small>'
            html += !obj.EditDate ? '' : '< small class="pull-right" style = "margin-top:5px" > Modificado:' + obj.EditDate + '</small >';
            html += '           </h4 >';
            html += '           <p class="list-group-item-text">' + descricao + '</p>';
            html += '           </a>';
            html += '       </div>';
            html += '       <div style="margin-top: 25px">';
            html += '           <button type="button" class="btn btn-sm btn-default" style="" onclick="BuscarDocumento(' + obj.IdDocument + ');"><i class="fa fa-edit"></i></button>';
            html += '           <button type="button" class="btn btn-sm btn-default" style="" onclick="BuscarDocumentos(' + obj.IdDocument + ');"><i class="fa fa-download"></i></button>';
            html += '       </div>';
            html += '       <span class="titulo" style="display:none">' + obj.Title + '</span>';
            html += '       <span class="descricao" style="display:none">' + obj.Description + '</span>';
            html += '       <span class="id" style="display:none">' + obj.IdDocument + '</span>';
            html += '       <span class="nomeArquivo" style="display:none">' + obj.FileName + '</span>';
            html += '   </div>';

            $("#divDocumentList").append(html);
        });
    });
}

function BuscarDocumento(id) {
    ToggleDivCadastro(true);
    $(".spnEditing").text("Editar");
    $("#labelAdicionarNovoArquivo").show();
    $('#divLabelsArquivo').css("margin-top", "30px");
    $("#fileArquivo").hide();

    var titulo = $("#document_" + id).find(".titulo").text();
    var versao = $("#document_" + id).find(".versao").text();
    var descricao = $("#document_" + id).find(".descricao").text();
    var nomeArquivo = $("#document_" + id).find(".nomeArquivo").text();

    $("#hddIdDocumentoEdicao").val(id);
    $("#txtTitulo").val(titulo);
    $("#txtDescricao").val(descricao);
    $("#txtVersao").val(versao);
    $("#fileArquivo").val("");
}

function SalvarDocumento() {
    if (!ValidarCampos())
        return

    var dados = {
        id: $("#hddIdDocumentoEdicao").val(),
        titulo: $("#txtTitulo").val(),
        descricao: $("#txtDescricao").val(),
        versao: $("#fileArquivo").val(),
        versao: $("#txtVersao").val(),
        adicionarArquivoEdicao: $("#chkAdicionarNovoArquivo").prop("checked"),
        versao: $("#fileArquivo").val()
    };

    var url = "/api/DocumentAPI";
    $.get(url, dados, function (data) { }

};

function ValidarCampos() {
    if ($("#txtTitulo").val() == "") {
        $('#spnCampoObrigatorio').text("Título");
        $('#navbar-notification').slideDown();
        return false;
    } else {
        $('#navbar-notification').slideUp();
    }

    if ($("#txtDescricao").val() == "") {
        $('#spnCampoObrigatorio').text("Descrição");
        $('#navbar-notification').slideDown();
        return false;
    } else {
        $('#navbar-notification').slideUp();
    }
    if ($("#hddIdDocumentoEdicao").val() == "") {
        if ($('#fileArquivo').get(0).files.length == 0) {
            $('#spnCampoObrigatorio').text("O Arquivo");
            $('#navbar-notification').slideDown();
            return false
        } else {
            $('#navbar-notification').slideUp();
        }
    }
    return true;
}

function ToggleDivCadastro(editando) {
    if (editando)
        $('#divDocInfo').slideDown();
    else {
        $('#divDocInfo').slideToggle();
    }
    LimparCampos();
}

function ToggleInputArquivo() {
    if ($("#chkAdicionarNovoArquivo").prop("checked")) {
        $('#fileArquivo').slideDown();
        $('#divLabelsArquivo').css("margin-top", "0");
    } else {
        $('#fileArquivo').slideUp();
        $('#divLabelsArquivo').css("margin-top", "30px");
    }
}

function LimparCampos() {
    $(".spnEditing").text("Cadastrar Novo");
    $("#labelAdicionarNovoArquivo").hide();
    $("#fileArquivo").show();
    $('#divLabelsArquivo').css("margin-top", "0");

    $("#chkAdicionarNovoArquivo").prop("checked", "");
    $("#hddIdDocumentoEdicao").val("");
    $("#txtTitulo").val("");
    $("#txtDescricao").val("");
    $("#txtVersao").val("");
    $("#fileArquivo").val("");
}