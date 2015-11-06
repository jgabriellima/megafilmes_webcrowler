var url = require('url');
var sys = require('sys');
var Base64 = require('js-base64').Base64;
/**/
var url_parts = url.parse("http://megafilmeshd.net/player/opcoes.php?opc1=RHJvcFZpZGVv&opc2=VmlkZW9QVw==&opc3=VmlkdG8=&opc4=Q2xvdWRaaWxsYQ==&opc5=U3RyZWFtaW4=&filme1=aHR0cDovL21lZ2FmaWxtZXNoZC5uZXQvcGxheWVyL2Ryb3AucGhwP3Y9Z1BVT2JHUUtWUw==&filme2=aHR0cDovL21lZ2FmaWxtZXNoZC5uZXQvcGxheWVyL3Zwdy5waHA/dj01ejYzNmlhNmZkMDFjMmc=&filme3=aHR0cDovL21lZ2FmaWxtZXNoZC5uZXQvcGxheWVyL3ZkbS5waHA/dj1sY21tNTNmbzNncmQ=&filme4=aHR0cDovL21lZ2FmaWxtZXNoZC5uZXQvcGxheWVyL2N6LnBocD92PVM2QUNXTFY2SEJCRkpWTERGTVZTRE80UDU=&filme5=aHR0cDovL21lZ2FmaWxtZXNoZC5uZXQvcGxheWVyL3N0cm1uLnBocD92PWk2cm1taTc0N2Y0Yw==", true);
var query = url_parts.query;
// console.log(query);

for(q in query){
	console.log(q,Base64.decode(query[q]));
	// console.log(url.parse(Base64.decode(query[q])));
}