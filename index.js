function data() {
var a=document.getElementById("ema").value;
var b=document.getElementById("pass").value;
if(a==""||b==""){
    alert("All Fields are mandatory");
    return false;
}else if(a=="ubairatangiri@gmail.com"){
    return true;
}else if(a!="ubairatangiri@gmail.com"){
    alert("Entered Email not registered")
    return false;
}
else{
    true;
}
}
