/**
 * This file controls the page logic
 *
 * depends on jQuery>=1.7
 */

var surname;
var soundHandle = new Audio();
//var soundcounter= 0;
var triggered=false;
var nosound=true;
var color1 = '#ff95c8';

var colortxt1 = '#F860AA';

//Select the background color
var color =color1;
//Select the text color
var colortxt = colortxt1;
var gendertext1 = "It is a Girl!";
var gendertext = gendertext1;
var catText = ["Inside the House","Outside the House", "Food Related", "Adventurous","Sensual","Love Vouchers"]
var col = ['#ff9900','#7b94ff','#38b6ff','#c1ff72','#ff7272','#ff00cf'];
var loc = ["inside.html","outside.html","food.html","adventure.html","sensual.html","love.html"];
function shadeColor(color, percent) {

    var R = parseInt(color.substring(1,3),16);
    var G = parseInt(color.substring(3,5),16);
    var B = parseInt(color.substring(5,7),16);

    R = parseInt(R * (100 + percent) / 100);
    G = parseInt(G * (100 + percent) / 100);
    B = parseInt(B * (100 + percent) / 100);

    R = (R<255)?R:255;  
    G = (G<255)?G:255;  
    B = (B<255)?B:255;  

    R = Math.round(R)
    G = Math.round(G)
    B = Math.round(B)

    var RR = ((R.toString(16).length==1)?"0"+R.toString(16):R.toString(16));
    var GG = ((G.toString(16).length==1)?"0"+G.toString(16):G.toString(16));
    var BB = ((B.toString(16).length==1)?"0"+B.toString(16):B.toString(16));

    return "#"+RR+GG+BB;
}
const pSBC=(p,c0,c1,l)=>{
    let r,g,b,P,f,t,h,i=parseInt,m=Math.round,a=typeof(c1)=="string";
    let pSBCr = null;
    if(typeof(p)!="number"||p<-1||p>1||typeof(c0)!="string"||(c0[0]!='r'&&c0[0]!='#')||(c1&&!a))return null;
    if(!pSBCr) pSBCr=(d)=>{
        let n=d.length,x={};
        if(n>9){
            [r,g,b,a]=d=d.split(","),n=d.length;
            if(n<3||n>4)return null;
            x.r=i(r[3]=="a"?r.slice(5):r.slice(4)),x.g=i(g),x.b=i(b),x.a=a?parseFloat(a):-1
        }else{
            if(n==8||n==6||n<4)return null;
            if(n<6)d="#"+d[1]+d[1]+d[2]+d[2]+d[3]+d[3]+(n>4?d[4]+d[4]:"");
            d=i(d.slice(1),16);
            if(n==9||n==5)x.r=d>>24&255,x.g=d>>16&255,x.b=d>>8&255,x.a=m((d&255)/0.255)/1000;
            else x.r=d>>16,x.g=d>>8&255,x.b=d&255,x.a=-1
        }return x};
    h=c0.length>9,h=a?c1.length>9?true:c1=="c"?!h:false:h,f=pSBCr(c0),P=p<0,t=c1&&c1!="c"?pSBCr(c1):P?{r:0,g:0,b:0,a:-1}:{r:255,g:255,b:255,a:-1},p=P?p*-1:p,P=1-p;
    if(!f||!t)return null;
    if(l)r=m(P*f.r+p*t.r),g=m(P*f.g+p*t.g),b=m(P*f.b+p*t.b);
    else r=m((P*f.r**2+p*t.r**2)**0.5),g=m((P*f.g**2+p*t.g**2)**0.5),b=m((P*f.b**2+p*t.b**2)**0.5);
    a=f.a,t=t.a,f=a>=0||t>=0,a=f?a<0?t:t<0?a:a*P+t*p:0;
    if(h)return"rgb"+(f?"a(":"(")+r+","+g+","+b+(f?","+m(a*1000)/1000:"")+")";
    else return"#"+(4294967296+r*16777216+g*65536+b*256+(f?m(a*255):0)).toString(16).slice(1,f?undefined:-2)
}
function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
};
function randomInRangeint(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
};
function getCatText(i){
    return catText[i];
}
function getlocAddress(i){
    return loc[i];
}
function confetti_effect(index) {
    soundHandle.src = 'audio/celebrate.mp3';
    $("#spinbtn").hide();
    $("#button").hide();

    $('#tboy').show();
    $('#tboy').text(catText[index]);
    $('#tboy').css('color',col[index]);
    $('#boy').hide();
    //$('.images').hide();
    $('#or').hide();
    $('#girl').hide();
    document.getElementsByTagName("body")[0].style.backgroundColor = pSBC(-0.3,col[index],false,true);
    document.getElementsByTagName("body")[0].style.backgroundImage = 'none';
    //document.getElementById("H3").insertAdjacentHTML('afterend', "<h4 id='testtext' style='white-space:normal'> Depending on the product you buy, here it will say either <br> 'It is a Girl!' or 'It is a Boy! with pink or blue background.</h4>");

    $('#H3').hide();
    $('#H4').hide();
    if(triggered==true) {
        return;
    }
    if (!nosound) {
        soundHandle.volume=0.5;
        soundHandle.play();
    }
    triggered=true;
   // do this for 10 seconds
   var duration = 1 * 1000;
   var end = Date.now() + duration;
   var defaults = { startVelocity: 10, spread: 360, ticks: 70, zIndex: 0 };
   var particleCount = 5 ;
   (function frame() {
   // launch a few confetti from the left edge
   confetti({...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }, colors: ['#FFFFFF']}
   );
   // and launch a few from the right edge
   confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },colors: ['#FFFFFF']}
   );

   // keep going until we are out of time
   if (Date.now() < end && triggered==true) {
       requestAnimationFrame(frame);
       
       return;
   }
   $("#spinbtn").show();
   
   }());
          
 };

 export {confetti_effect, getCatText,getlocAddress};

    function playticksound() {
        if (!nosound ) {
            createjs.Sound.volume = 0.2;
            createjs.Sound.play("sound");
        }

    }
export {playticksound};

    function supportsCanvas() {
        return !!document.createElement('canvas').getContext;
    };
    
    

    function onResetClicked() {
        //$("#resetbutton").hide();
        $("#button").hide();
        $('#tboy').hide();
        $('#boy').show();
        $('#or').show();
        document.getElementById("spinbtn").value = "Spin!";
        document.getElementsByTagName("body")[0].style.backgroundColor = "#FFFFFF";
        triggered = false;
        confetti.reset();
        soundHandle.pause();
        soundHandle.currentTime = 0;    
        return false;
    };
    export {onResetClicked};

   
    
    function initPage() {
        var i, i1;
        //document.getElementById('intro').innerHTML= "This is a gender reveal spin the wheel for <strong>" + surname + "</strong> family. It contains high level sound. Do you want to continue with sound?";
        document.getElementById('id01').style.display='none';
        document.getElementById('myDropdown').style.display='none';

        $('.dropbtn').on("click", function(e) {
            document.getElementById('myDropdown').style.display='block';

        });
        $('.nosoundbtn').on("click", function (e) {
            document.getElementById('id01').style.display='none';
            nosound=true;
        });
        $('.withsoundbtn').on("click", function (e) {
            document.getElementById('id01').style.display='none';
            nosound=false;
            soundHandle = document.getElementById('soundHandle');              
            soundHandle.autoplay = true;
            soundHandle.muted=false;
            soundHandle.src = "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA";
            soundHandle.play();
            soundHandle.pause();
            createjs.Sound.registerSound({src:"audio/tick.mp3", id:"sound"});
    
        });
       
    };
    
    /**
     * Handle page load
     */
    $(function() {
        if (supportsCanvas()) {
            initPage();
        } else {
            $('#scratcher-box').hide();
            $('#lamebrowser').show();
        }
    });
        