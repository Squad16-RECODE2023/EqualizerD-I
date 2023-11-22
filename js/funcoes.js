// [saibaM.html] Lógica para o funcionamento troca de conteúdo (Artigos, Cursos e Downloads): =======================================================
document.addEventListener("DOMContentLoaded", function () {
    // Seleciona os botões e as divs
    var btnArtigo = document.getElementById("btnArtigo");
    var btnCurso = document.getElementById("btnCurso");
    var btnDownload = document.getElementById("btnDownload");
    
    var grupoArtigos = document.getElementById("grupoArtigos");
    var grupoCursos = document.getElementById("grupoCursos");
    var grupoDownloads = document.getElementById("grupoDownloads");

    // Adiciona o evento de clique ao botão "Artigos"
    btnArtigo.addEventListener("click", function () {
        grupoArtigos.style.display = "flex";
        grupoCursos.style.display = "none";
        grupoDownloads.style.display = "none";
    });

    // Adiciona o evento de clique ao botão "Cursos"
    btnCurso.addEventListener("click", function () {
        grupoArtigos.style.display = "none";
        grupoCursos.style.display = "flex";
        grupoDownloads.style.display = "none";
    });

    // Adiciona o evento de clique ao botão "Downloads"
    btnDownload.addEventListener("click", function () {
        grupoArtigos.style.display = "none";
        grupoCursos.style.display = "none";
        grupoDownloads.style.display = "flex";
    });

    // Por padrão, exibe o conteúdo do botão "Artigos"
    grupoArtigos.style.display = "flex";
    grupoCursos.style.display = "none";
    grupoDownloads.style.display = "none";
});
//Fim - [saibaM.html] Lógica para o funcionamento troca de conteúdo (Artigos, Cursos e Downloads): ====================================

  // Lógica para p : ====================================================
  document.addEventListener('DOMContentLoaded', function() {
    // Selecione o botão pelo id
    var modalBtnAvaliador = document.getElementById('modalBtnAvaliador');
    // Adicione um ouvinte de evento de clique
    modalBtnAvaliador.addEventListener('click', function() {
      // Redirecione o usuário para a página desejada, por exemplo:
      window.location.href = '_html/avaliador.html';
    });
  });
  //Fim - Lógica para p . =============================================