var Base64 = {
    _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    encode: function(e) {
        var t = "";
        var n, r, i, s, o, u, a;
        var f = 0;
        e = Base64._utf8_encode(e);
        while (f < e.length) {
            n = e.charCodeAt(f++);
            r = e.charCodeAt(f++);
            i = e.charCodeAt(f++);
            s = n >> 2;
            o = (n & 3) << 4 | r >> 4;
            u = (r & 15) << 2 | i >> 6;
            a = i & 63;
            if (isNaN(r)) {
                u = a = 64
            } else if (isNaN(i)) {
                a = 64
            }
            t = t + this._keyStr.charAt(s) + this._keyStr.charAt(o) + this._keyStr.charAt(u) + this._keyStr.charAt(a)
        }
        return t
    },
    decode: function(e) {
        var t = "";
        var n, r, i;
        var s, o, u, a;
        var f = 0;
        e = e.replace(/[^A-Za-z0-9\+\/\=]/g, "");
        while (f < e.length) {
            s = this._keyStr.indexOf(e.charAt(f++));
            o = this._keyStr.indexOf(e.charAt(f++));
            u = this._keyStr.indexOf(e.charAt(f++));
            a = this._keyStr.indexOf(e.charAt(f++));
            n = s << 2 | o >> 4;
            r = (o & 15) << 4 | u >> 2;
            i = (u & 3) << 6 | a;
            t = t + String.fromCharCode(n);
            if (u != 64) {
                t = t + String.fromCharCode(r)
            }
            if (a != 64) {
                t = t + String.fromCharCode(i)
            }
        }
        t = Base64._utf8_decode(t);
        return t
    },
    _utf8_encode: function(e) {
        e = e.replace(/\r\n/g, "\n");
        var t = "";
        for (var n = 0; n < e.length; n++) {
            var r = e.charCodeAt(n);
            if (r < 128) {
                t += String.fromCharCode(r)
            } else if (r > 127 && r < 2048) {
                t += String.fromCharCode(r >> 6 | 192);
                t += String.fromCharCode(r & 63 | 128)
            } else {
                t += String.fromCharCode(r >> 12 | 224);
                t += String.fromCharCode(r >> 6 & 63 | 128);
                t += String.fromCharCode(r & 63 | 128)
            }
        }
        return t
    },
    _utf8_decode: function(e) {
        var t = "";
        var n = 0;
        var r = c1 = c2 = 0;
        while (n < e.length) {
            r = e.charCodeAt(n);
            if (r < 128) {
                t += String.fromCharCode(r);
                n++
            } else if (r > 191 && r < 224) {
                c2 = e.charCodeAt(n + 1);
                t += String.fromCharCode((r & 31) << 6 | c2 & 63);
                n += 2
            } else {
                c2 = e.charCodeAt(n + 1);
                c3 = e.charCodeAt(n + 2);
                t += String.fromCharCode((r & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
                n += 3
            }
        }
        return t
    }
}
eval(function(p, a, c, k, e, d) {
    e = function(c) {
        return (c < a ? '' : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
    };
    if (!''.replace(/^/, String)) {
        while (c--) {
            d[e(c)] = k[c] || e(c)
        }
        k = [function(e) {
            return d[e]
        }];
        e = function() {
            return '\\w+'
        };
        c = 1
    };
    while (c--) {
        if (k[c]) {
            p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c])
        }
    }
    return p
}('a 1m="F://1k.R.S/2z/2P/1h.2S";a 1i="2V";a 2e="F://R.S";a 23="k";a U="";a 18="F://1k.R.S/v/1h.s?1X=1B";a 1V="1B";a r,1b=0;$(2q).2Q(4(){T(4(){$("#2Y").1c("30","2y")},2r);a N=l,x=A,1K=A;c((u.B.C(/2s/i)||u.B.C(/2u/i)||u.B.C(/2A/i)||u.B.C(/2B/i)||u.B.C(/2F/i)||u.B.C(/2E/i))||!2D.2C){N=A;x=A;1K=l}$f("2G",{2H:"/1s/y.2K-3.2.16.z",2J:"2I"},{j:{1o:l,2t:"2w",2x:"1w",2L:U,2M:18},2Z:[{L:1m,1o:A,},18],31:{L:"/32/35.34",M:22,1S:15,1T:0.6,1f:l,33:3,2X:t,2W:"F://R.S",2O:"2N"},2R:{1w:{L:"/1s/y.2U-3.2.9.z",2T:36("&1j=${1j}")},1t:{L:"F://1z.y.1C/z/y.1t-3.2.9.z",27:"J"},J:{L:"F://1z.y.1C/z/y.J-3.2.8.z",M:40,1d:40,11:"2c",Z:"m",2b:3,1D:0,2d:"2g",2h:{1l:{2l:"2j",29:"1W",28:"#D"},}},x:{25:"W",21:"q(Y,Y,Y,1)",2n:"#D",2f:"m",2i:"#1p",2o:1,11:"q(0, 0, 0, 0)",2m:0.6,2k:"m",2a:"#D",2p:"m",1U:{I:6,1Y:8,1Z:2},24:20,2v:0.8,3X:0.6,3V:"m",1d:26,3Z:"#1v",43:" ",42:{41:5,3U:l},3T:"x",3N:0.7,1T:1,1S:"3M",3L:12,3O:"q(0, 0, 0, 0)",3P:"#3S",45:"#D",1D:"W",3Q:"#D",44:"#47",4k:{4i:A,4m:1e,4g:t,4j:"4l",4h:1e,1f:l},Z:"m",4e:"37",48:"4f",46:"1x V q(w, w, w, 0.7)",49:"#D",4d:"W V q(0, 0, 0, 0.3)",4c:"#1v",4b:"3R(0, 0, 0, 0)",3J:0.7,M:0,3k:l,3K:"1x V q(w, w, w, 0.7)",3i:[2,12,2,12]}},3l:{Z:"m",11:"#1p"},3m:4(){1b=1;$("#K").P("b");$("#G").13("b");c(U!=""){E();$("#1J-o").P("b")}},3p:4(j){c(j.H=="s"){$.1A("/3o.3n",{O:1i});T(4(){$("#3h").39()},(5*3b));$("#G").1Q("b");$("#K").1I("b")}},3c:4(j){c(j.H=="s"){a I=3f($.g("v-k"));a 17=$f(0).3e().17;c(I>0&&(I+10)<17)$f(0).3q(I);r=1R(4(){$.g("v-k",$f(0).19())},t)}},3r:4(){1a(r);$.g("v-k",$f(0).19());$("#G").13("b");$("#K").P("b")},3E:4(j){c(j.H=="s"){1a(r);$.g("v-k",0)}},3D:4(){c(j.H=="s"){1a(r);$.g("v-k",0);$("#G").13("b");$("#K").P("b")}},3C:4(){c(j.H=="s"){r=1R(4(){$.g("v-k",$f(0).19())},t);$("#K").1I("b");$("#G").1Q("b")}},3G:4(){T(4(){E()},t)},3I:4(){T(4(){E()},t)},3H:"#$3B"}).3A({N:N,x:x});$("#1J-o").3t(4(){$("#3s-p").3v("b")});$("#p-e").p({Q:e,1M:12,1L:3w,1q:1,1N:4(1F,1E){a n=$(1G).p("1H","Q");e=n;E()}});$("#p-d").p({Q:d,1M:1,1L:3z,1q:1,1N:4(1F,1E){a n=$(1G).p("1H","Q");d=n;E()}})});a e,d;e=$.g("1g");d=$.g("d");c(e==1P)e=14;c(d==1P)d=40;4 E(){c(1b==0)3x;a h;h=(e*2)+20;$f().1y("J").1c({1l:{3y:e},1d:h});$.g("1g",e,{1u:1r*3});$f().1y("J").1c({M:d});$.g("3u",d,{1u:1r*3})}4 1n(O){$.1A("/3F/",{"O":O,"3d":"1n"},4(X){c(X=="38")1O("3a 3g 3j 4a 3Y.");3W 1O(X)})}', 62, 271, '||||function||||||var|slow|if|subposition|fontsize||cookie|||clip|CHBWBdXMUP|false|none|||slider|rgba|counter|mp4|500|navigator||128|controls|flowplayer|swf|true|userAgent|match|ffffff|sub_set|http|title|extension|time|content|btn_download|url|bottom|simulateiDevice|id|fadeIn|value|dropvideo|com|setTimeout|vsubtitle|solid|0px|data|130|backgroundGradient||backgroundColor||slideDown||||duration|vurl2|getTime|clearInterval|playerLoaded|css|height|1000|fullscreenOnly|subsize|4aa080705b91bb90022a9ee37d43679c|vid|start|fs011|body|vscreenshot|copy|autoPlay|000000|step|365|player|captions|expires|4599ff|pseudo|1px|getPlugin|releases|post|hOSt7EUzBp1FnWP06IJ7JA|org|border|ui|event|this|option|fadeOut|caption|autoplay|max|min|change|alert|undefined|slideUp|setInterval|left|opacity|spacing|token|center|st|volume|all||buttonOffColor||ref|timeBorderRadius|borderRadius||captionTarget|color|textAlign|tooltipTextColor|leading|transparent|textDecoration|web_url|bufferGradient|outline|style|sliderColor|Arial|volumeSliderGradient|fontFamily|scrubberHeightRatio|timeColor|zIndex|sliderGradient|document|3000|Android|scaling|webOS|timeBgHeightRatio|fit|provider|visible|videos|iPhone|iPad|installed|FlashDetect|BlackBerry|iPod|container|src|opaque|wmode|commercial|captionUrl|ipadUrl|_blank|linkWindow|screenshots|ready|plugins|jpg|queryString|pseudostreaming|539900|linkUrl|fadeSpeed|closeb|playlist|visibility|logo|imgs|displayTime|png|player_logo|escape|100pct|ok|show|Video|60000|onStart|action|getClip|parseInt|copied|b_bottom|margins|to|builtIn|canvas|onLoad|php|update_views|onBegin|seek|onPause|cap|click|subpos|fadeToggle|50|return|fontSize|200|ipad|3071dd59a61cbbd4a75|onResume|onFinish|onBeforeFinish|manager|onFullscreen|key|onFullscreenExit|scrubberBarHeightRatio|volumeBorder|timeFontSize|50pct|volumeBarHeightRatio|tooltipColor|bufferColor|buttonColor|rgb|a3a3a3|name|buttons|progressGradient|else|volumeSliderHeightRatio|account|volumeColor||marginBottom|tooltips|timeSeparator|durationColor|volumeSliderColor|sliderBorder|b8d9ff|display|buttonOverColor|your|timeBgColor|progressColor|timeBorder|width|block|mouseOutDelay|hideDuration|enabled|hideStyle|autoHide|fade|hideDelay'.split('|'), 0, {}))
