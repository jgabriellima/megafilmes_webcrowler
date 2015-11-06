/*http://megafilmeshd.net/o-melhor-amigo-do-amor/

*/
var request = require('request');
var cheerio = require('cheerio');
/**/
var urlbase = "http://megafilmeshd.net/o-melhor-amigo-do-amor/";
/**/
request(urlbase, function(error, response, body) {
    if (!error && response.statusCode == 200) {
        /**/
        $ = cheerio.load(body);
        /**/
        var url = $('input.cboxElement').attr('href');
        request(url, function(error, response, body) {
            if (!error && response.statusCode == 200) {
                $ = cheerio.load(body);

            }
        });

    }
})
