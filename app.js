    var url = require('url');
    var sys = require('sys');
    var request = require('request');
    var cheerio = require('cheerio');
    var Base64 = require('js-base64').Base64;

    var urlbase = "http://megafilmeshd.net/";


    /**/
    getCategorias(function(result) {
        console.log(result);
    });

    function getCategorias(callback) {
        request(urlbase, function(error, response, body) {
            if (!error && response.statusCode == 200) {
                $ = cheerio.load(body);
                /*lista de categorias*/
                var objs = [];
                $('ul#menu li').each(function(index, value) {
                    /*itera cada li*/
                    var obj = {};
                    obj.nome = $(this).find('span.nome-categoria-red').text();
                    obj.acessos = $(this).find("span.numero-post-lancamento").text();
                    /* attr => obter atributo */
                    obj.link = $(this).find("a").attr('href');
                    objs.push(obj);
                    // console.log(obj);
                });
                callback(objs)
            }
        });
    }
    getFilmesByCategoria('http://megafilmeshd.net/category/comedia-romantica/', function(result) {
        console.log(result);
    });

    function getFilmesByCategoria(url, callback) {
        request(url, function(error, response, body) {
            if (!error && response.statusCode == 200) {
                $ = cheerio.load(body);
                /*lista de categorias*/
                var objs = [];
                $('ul#category-thumbs li').each(function(index, value) {
                    /*itera cada li*/
                    var obj = {};
                    obj.nome = $(this).attr('title');
                    obj.link = $(this).find('a').attr('href');
                    obj.img = $(this).find('img').attr('src');
                    objs.push(obj);
                });
                callback(objs);
            }
        })
    }
    var url = "http://megafilmeshd.net/phineas-e-ferb-o-filme-atraves-da-2a-dimensao/";

    getFilme(url, function(result) {
        console.log(result);
    });

    function getFilme(url, callback) {
        request(url, function(error, response, body) {
            if (!error && response.statusCode == 200) {
                $ = cheerio.load(body);
                var conteudo = $('#conteudo-s');
                var obj = {};
                obj.nome = conteudo.find("div#center-video div.btn-ver input").attr('alt');
                obj.src = conteudo.find("div#center-video div.btn-ver input").attr('src');
                obj.urlPlayersOptions = conteudo.find("div#center-video div.btn-ver input").attr('href');
                var url_parts = require('url').parse(obj.urlPlayersOptions, true);
                query = url_parts.query;
                obj.players = [];
                obj.playersUrl = [];
                for (q in query) {
                    var str = Base64.decode(query[q]);
                    if(str.indexOf("http")){
                        obj.players.push(str);
                    }else{
                        obj.playersUrl.push(str);
                    }
                }
                callback(obj);
            }
        });
    }
