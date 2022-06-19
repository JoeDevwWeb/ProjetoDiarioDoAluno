// Botao do sidebar
$(document).ready(function(){
    
    $('#btnOpen')
        .click(function(){
        $('.barraferramentas')
            .css("left","0");
    });
    $('#btnClose')
        .click(function(){
        $('.barraferramentas')
            .css("left","-240px");
            
//-------------------- botão de posta
});

$('#addProjeto')
        .click(function(){
        $('.addProjeto')
            .css('display', 'flex');})
  
    $('#btnAdd')
        .click(function(){
        $('.addProjeto')
            .css('display', 'none');})
  
  });


