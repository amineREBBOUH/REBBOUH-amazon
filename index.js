$(window).on('load ',function(){
   
   $(".loading1").fadeOut(10080);
 
   $(".conte").fadeIn(10080);
   
 
});
   
 


function login(){
   document.getElementById('login').style.display='block';
 
   
}
function hide(){
    document.getElementById('login').style.display='none';
    document.getElementById('slide').style.display='none';
    
 }
 function slider(){
    var x= document.getElementById("slide");
    x.style.left='0%';
    x.style.display="block";

   }
   function hida(){

       
      var div1=document.getElementById("form1");
      var div2=document.getElementById("form2");
      var f1=document.getElementById("f1");
      var f2=document.getElementById("f2");
      if(f1.checked==true){
      div1.style.display="block";
      div2.style.display="none";
      }
      if(f2.checked==true){
      div2.style.display="block";
      div1.style.display="none";
      }
      }
    
      var inpu =document.getElementsByClassName("inpu");
      for(var i=0;i<inpu.length;i++){
         inpu[i].required=true;

      }
 var pos=0;
function change(){
   var worker= [["5.png", "guides techniques et documents de référence"],["4.png", "Virtual servers with unbeatable features"],["6.png", "Elastic file System"]];
   var student=[["1.png", "Free online training"],["2.png", "AWS Learning Recommendations"],["3.png", "AWS Certification"]];

if(pos==0){



   var parent=document.getElementsByClassName("love");
   for(var i=0;i<parent.length;i++){
      parent[i].children[0].setAttribute("src", "service/"+worker[i][0]); 
      parent[i].children[1].innerHTML=worker[i][1]; 
   }
   pos++;
}
else{
   var parent=document.getElementsByClassName("love");
   for(var i=0;i<parent.length;i++){
      parent[i].children[0].setAttribute("src", "service/"+student[i][0]); 
      parent[i].children[1].innerHTML=student[i][1]; 
   }
   pos=0;
}
 
}