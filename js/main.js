$(document).ready(function(){
    $('#telefone').mask('(00) 00000-0000',{
        placeholder: '(00) 00000-0000'
    })
    $('#cpf').mask('000.000.000-00',{
        placeholder: 'XXX.XXX.XXX-XX'
        })
    $('#cep').mask('00000-000',{
        placeholder: '00000-000'
    })
    $('form').validate({
        rules:{
            nome: {
                required:true
            },
            email: {
                required:true
            },
            telefone: {
                required:true
            },
            cpf: {
                required:true
            },
            endereco: {
                required:true
            },
            cep: {
                required:true
            }
        },
        messages:{
            nome:"Insira seu Nome",
            email:"Insira seu E-Mail",
            telefone:"Insira seu Telefone",
            cpf:"Insira seu CPF",
            endereco:"Insira seu Endereço",
            cep:"Insira seu CEP"
        }
    })
})