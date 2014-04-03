/**
 * Objeto Literal - Log Exercicios
 */

 /*
  Problemas a solucionar
  1 - zebrar tr's
  2 - modular css
  3 - 
 */
var log = {
	
	iniciar: function()
	{
		$(document).on('click', '#adicionar', function() {
			log.adicionar();
			log.zebrar('tr:odd');
		});

		$(document).on('click', '.remover', function() {
			log.remover($(this));
		});
	},

	zebrar: function(elemento)
	{
		return $(elemento).css( "background-color", "#E0EEEE" );
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

		$('#table-log').append (
			'<tr>'+
				'<td>' + tempo + 'h</td>'+
				'<td>' + tipo + '</td>'+
				'<td>' + data + '</td>'+
				'<td><img src="assets/img/icon-remove.png" class="remover" width="25" height="25"></td>'+
			'</tr>'
		);
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
	}

};
/**
 * Inicializador
 */
$(function(){
	log.iniciar();
});