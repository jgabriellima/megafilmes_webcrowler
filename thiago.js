var request = require('request');
var cheerio = require('cheerio');

//var Browser = require('zombie');

var urlBase = "http://megafilmeshd.net/phineas-e-ferb-o-filme-atraves-da-2a-dimensao/";

request(urlBase, function (error, response, body) {
  if (!error && response.statusCode == 200) {

      $ = cheerio.load(body);

      var conteudo = $('#conteudo-s');

      var obj = {};
      obj.nome = conteudo.find("div#center-video div.btn-ver input").attr('alt');
      obj.src = conteudo.find("div#center-video div.btn-ver input").attr('src');
      obj.urlPlayersOptions = conteudo.find("div#center-video div.btn-ver input").attr('href');
      console.log(obj);
      request(obj.urlPlayersOptions, function (error, response, bodyFrame) {
          if (!error && response.statusCode == 200) {
              $ = cheerio.load(bodyFrame);

              $('div.player a').each(function() {

                  request($(this).attr('href'), function (error, response, body) {
                      if (!error && response.statusCode == 200) {
                          $ = cheerio.load(body);

                          console.log('#############  OPCAO ######### ' + $('iframe').attr('src'));

                          //console.log($('param').length);

                          //console.log($('param[name=flashvars]'));

                          //console.log('#############  MP4-1 ######### ' + $('iframe'));

                          request($('iframe').attr('src'), function (error, response, body2) {
                              if (!error && response.statusCode == 200) {
                                  $ = cheerio.load(body2);

                                  //console.log(body2);
                                  //console.log($('div#container').attr('class'));

                                  //console.log($('div#container').html());

                                  console.log('VIDEO ' , $('object').find('param[name=flashvars]').length);



                                  //console.log('#############  MP4-2 ######### ' + $('#player').html());
                              }
                          });

                      }
                  });



              });



//              console.log("@@@@@@"+$('iframe').attr('src'));

              var conteudoFrame = $('#conteudo-s');

              console.log("CONT\n"+ conteudoFrame.text());

             var params =  conteudoFrame.map(function(i, el) {
                  // this === el
                  return $(this).text();
                });


              //console.log(params);
          }
      });


      //console.log(obj);

  }
});

// http://megafilmeshd.net/player/opcoes.php?opc1=RHJvcFZpZGVv&opc2=VmlkZW9QVw==&opc3=VmlkdG8=&opc4=Q2xvdWRaaWxsYQ==&opc5=U3RyZWFtaW4=&filme1=aHR0cDovL21lZ2FmaWxtZXNoZC5uZXQvcGxheWVyL2Ryb3AucGhwP3Y9Z1BVT2JHUUtWUw==&filme2=aHR0cDovL21lZ2FmaWxtZXNoZC5uZXQvcGxheWVyL3Zwdy5waHA/dj01ejYzNmlhNmZkMDFjMmc=&filme3=aHR0cDovL21lZ2FmaWxtZXNoZC5uZXQvcGxheWVyL3ZkbS5waHA/dj1sY21tNTNmbzNncmQ=&filme4=aHR0cDovL21lZ2FmaWxtZXNoZC5uZXQvcGxheWVyL2N6LnBocD92PVM2QUNXTFY2SEJCRkpWTERGTVZTRE80UDU=&filme5=aHR0cDovL21lZ2FmaWxtZXNoZC5uZXQvcGxheWVyL3N0cm1uLnBocD92PWk2cm1taTc0N2Y0Yw==