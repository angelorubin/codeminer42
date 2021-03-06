/**
 * Objeto Literal - Log Exercicios
 */

 /**
  * Problemas a solucionar
  * 1 - listrar tr's
 */
var log = {
	
	iniciar: function()
	{
		$(document).on('click', '#adicionar', function() {
			log.adicionar();
		});

		$(document).on('click', '.remover', function() {
			log.remover($(this));
		});
	},

	adicionar: function()
	{
		var tempo = $('#tempo').val();
		var tipos = parseInt($('#tipo').val());
		var data = $('#data').val();

		switch(tipos)
		{
		case 1:
			tipo = 'Corrida';
			break;
		case 2:
			tipo = 'Natação';
			break;
		case 3:
			tipo = 'Bicicleta';
			break;
		}

		$(
			'<tr>'+
				'<td>' + tempo + 'h</td>'+
				'<td>' + tipo + '</td>'+
				'<td>' + data + '</td>'+
				'<td><img src="assets/img/icon-remove.png" class="remover" width="25" height="25"></td>'+
			'</tr>'
		).appendTo ('#table-log');
		$('#table-log tr:odd').addClass('odd');	
		log.calcular();
	},

	calcular: function()
	{
		var totalizador = 0;
		$( "#table-log td:first-child" ).each(function() {
			totalizador += parseInt($(this).text().replace(/[^\d]+/g,''));
		});
		$('#totalizador').text('Você já fez ' + totalizador + ' horas de exercícios.');
	},

	remover: function(elemento)
	{
		$(elemento).parents('tr').remove();
		log.calcular();		
		$( "#table-log tr" ).removeClass('odd');
		$( "#table-log tr:odd" ).addClass('odd');
	}

};
/**
 * Inicializador
 */
$(function(){
	log.iniciar();
});