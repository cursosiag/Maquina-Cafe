/*
 * Máquina de Café - 1.0
 * Script para realizar sorteio
 * Criado por: Davi Oliveira (Cursos IAG - http://cursosiag.com.br)
*/

$(document).ready(function() {
    Raffle.setup(); /* Inicia Script */
});


/* Esconde o botão de refresh */
$('#raffle-refresh').hide();

/* Funfção para o botão de refresh */
function reloadPage() {
    location.reload();
}

/* Contagem de participantes */
var count_itens = $('.list-group li').length;

/* Script */
var Raffle = {
    
    /* Adicione aqui os participantes do sorteio */    
    contestants: new Array('Maria', 'João'),
    winner: null,
    
    /* Função para o botão de start */
    setup: function() {
        $('#raffle-start').live('click', Raffle.on_choose);
    },
  
    /* Funcão atribuida ao botão start */
    on_choose: function() {
        Raffle.insert_previous_winner_into_list();
        
        $('#show-name, #raffle-start').hide();
        
        $('#show-name h1').html("Escolhendo...");
        
        $('#show-name').fadeIn();
        
        setTimeout('Raffle.pick_winner()', 1600);    
        
        return false;
    },
  
    
    /* Faz o "Random" de acordo com os participantes inseridos (Não sorteia a mesma pessoa duas vezes) */
    pick_winner: function() {
        $('#show-name').hide();
        var randomnumber = Math.floor(Math.random()*Raffle.contestants.length);
        Raffle.winner = Raffle.contestants.splice(randomnumber, 1);
        Raffle.display_winner();
    },
    
    /* Insere o sorteado em uma lista */
    insert_previous_winner_into_list: function() {
        
        if(Raffle.winner) {
        
            if(Raffle.contestants.length > count_itens) {
                 $('.list-group').append("<li class='list-group-item'>" + Raffle.winner + "</li>");   
            }
            
        }
    },
    
    /* Exibir textos e botões */
    display_winner: function() {
        if(Raffle.winner != '') {
            $('#show-name h1').html(Raffle.winner + "!");
            $('#raffle-start').show();
            $('#show-name').fadeIn();
        } else {
            $('#show-name h1').html("Todos já foram sorteados!");
            $('#raffle-refresh').show();
            $('#show-name').fadeIn();    
        }
    }
};
