/*
lista de filmes: 
$('ul#category-thumbs li')
- Nome do Filme:  $('ul#category-thumbs li').attr('title')
- link:  $('ul#category-thumbs li')[0].find('a').attr('href')
- src:  $('ul#category-thumbs li')[0].find('img').attr('src')
*/

var request = require('request');
var cheerio = require('cheerio'); 
/**/
var urlbase = "http://megafilmeshd.net/category/comedia-romantica/";
/**/
request(urlbase, function(error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body);
    	
    	$ = cheerio.load(body);
    	/*lista de categorias*/
    	$('ul#category-thumbs li').each(function(index,value){
    		/*itera cada li*/
    		var obj = {};
    		obj.nome = $(this).attr('title');
    		obj.link = $(this).find('a').attr('href');
    		obj.img = $(this).find('img').attr('src');

    		console.log(obj);
    	});

    }
})
