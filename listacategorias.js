/*
lista de categorias: 
$('ul#menu li')
- Nome da categoria:  $('span.nome-categoria-red')
- Números da categoria:  $("span.numero-post-lancamento")
*/

var request = require('request');
var cheerio = require('cheerio'); 
/**/
var urlbase = "http://megafilmeshd.net/";
/**/
request(urlbase, function(error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body);
    	
    	$ = cheerio.load(body);
    	/*lista de categorias*/
    	$('ul#menu li').each(function(index,value){
    		/*itera cada li*/
    		var obj = {};
    		obj.nome = $(this).find('span.nome-categoria-red').text();
    		obj.acessos = $(this).find("span.numero-post-lancamento").text();
    		/* attr => obter atributo */
    		obj.link = $(this).find("a").attr('href');

    		console.log(obj);
    	});

    }
})
