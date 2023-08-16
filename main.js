$(document).ready(function(){

    function OnClicked(){

        $(this).attr('id','clicado');
    }
    
    

    $('form').on('submit',function(e){
        
        e.preventDefault();
        const novoAfazer =$('#novo_afazer').val();
        const novoItemAfazer = $(`<li id="naoclicado"><p>${novoAfazer}</p></li>`);
        
        $('#novo_afazer').val('');

        novoItemAfazer.click(OnClicked);
        $(novoItemAfazer).appendTo('#lista_deAfazeres');
    })

    $('#lista_deAfazeres li').click(OnClicked);
    
})