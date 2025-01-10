(window.onload = function() {
var inputLtc = document.getElementById("Fname");
var inputLtc2 = document.getElementById("Tname");

//var sharebtn = document.getElementById("sharebtn");
var add = "https://artisartstudio.github.io/BrGrlSptWhll/index.html?"

inputLtc.addEventListener('keyup',OnKeyUp);
inputLtc2.addEventListener('keyup',OnKeyUp);

var inputBtc = document.getElementById("address");
inputBtc.textContent = add;
document.addEventListener("mousedown",function(e){
   var target = e.target;
   //if((target.contains(inputBtc) || target.contains(sharebtn)) && !inputLtc.value){
   var fname = inputLtc.value;
   var tname = inputLtc2.value;

   if(target.contains(inputBtc) && (!inputLtc.value || fname.replace(/\s/g, '').length==0) && (!inputLtc2.value || tname.replace(/\s/g, '').length==0)){
      //console.log("click");
      window.alert("Please enter valid names!");
      inputBtc.style.pointerEvents = "none";
      sharebtn.disabled =true;
   } 
});
var constantNumber = 2;

function OnKeyUp(e) {
   var result = inputLtc.value;
   if (result){
      result = add + "fname=" +result.charAt(0).toUpperCase() + result.slice(1);
   } else {
      result=add + "fname=";
      //sharebtn.disabled =true;
      inputBtc.style.pointerEvents = "none";
   }
   var result2 = inputLtc2.value;
   if (result2){
      result = result + "&tname=" +result2.charAt(0).toUpperCase() + result2.slice(1);
   } else {
      result=result+"&tname=";
      //sharebtn.disabled =true;
      inputBtc.style.pointerEvents = "none";
   }
   if (result && result2) {
      inputBtc.style.pointerEvents = "auto";
   }
   inputBtc.textContent = result;
   inputBtc.href= result;
};


// $("#emailLinkbtn").on("click", function(){
//    txt_email = $("#emailSendLink").val()
//    txt_link = $("#address").text()
//    txt_surname = $("#Surname").val()
//    $("#modalClose").trigger("click")
//    var mail = document.createElement("a");
//    mail.href = `mailto:${txt_email}?subject=Your link for ${txt_surname}-baby scratch off card&body=${txt_link}`;
//    mail.click();
//    alert(`The link ${txt_link} is sent to ${txt_email}`)
//  })
 });