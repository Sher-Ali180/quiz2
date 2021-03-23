bool1 = true;
bool2 = true;
bool3 = true;
$(function () {
  $("#myForm").submit(handleFormSubmit);

});

function handleFormSubmit(e) {
  if(document.getElementById("name").value.length <= 5){
    $("#namediv").append("<div ><p>Name should be longer than 5 characters</p></div>");
    $("#name").addClass("red");
    
    e.preventDefault();
    bool1=false;
    
  }
  else{
  bool1 = true;
  $("#namediv").find('p').remove();
  $('#name').removeClass("red");
  }
  
  
  if(document.getElementById("password").value.length < 8){
    $("#passdiv").append("<div ><p>Pass should be longer than 8 characters</p></div>");
    $("#password").addClass("red");
    
    e.preventDefault();
    bool2=false;
    
    
  }
  else{
  bool2 = true;
  $("#passdiv").find('p').remove();
  $('#password').removeClass("red");
}
  if(document.getElementById("password").value != document.getElementById("confirm_password").value){
    $("#conpassdiv").append("<div ><p>Passwords should Match</div>");
    $("#confirm_password").addClass("red");
   
    e.preventDefault();
    bool3=false;
    
    
  }
  else{
  bool3 = true;
  $("#conpassdiv").find('p').remove();
  $('#confirm_password').removeClass("red");

}
  

  if(bool1== true && bool2==true &&  bool3==true)
  {
    alert("Form submitted");
  }
}