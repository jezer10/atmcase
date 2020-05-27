var x=document.getElementById("password");
var a=document.getElementById("monto");
var saldo = localStorage.getItem("data");
var i = 3;
class clave{
    constructor(pass){
        this.pass=pass;
    }
    validate(){
        if (this.pass=="12345678"){
            Boolean =true;
        }
        else{
            Boolean=false;
        }
        return Boolean;
    }
}
function cancelar(){
    document.getElementById("password").value="";
}
function cancelar2(){
    document.getElementById("monto").value="";
}
function limpiar() {
    var z = x.value;
    var y = z.length-1;
    document.getElementById("password").value = z.substr(0,y);
}
function limpiar2(){
    var c = a.value;
    var d = c.length-1;
    document.getElementById("monto").value = c.substr(0,d); 
}
function nomi(n){
    var s=x.value;
    x.value=s+n;
}
function nom(b){
    var s=a.value;
    a.value=s+b;
}
function deshabilitar(){
    document.getElementById("1").disabled=true;
}
function login(){
    var p  = new clave(x.value);
    if(p.validate()){
        si();
        localStorage.setItem("data",5000);
    }else{
        i--;
        if(i==0){
            alert("ya no le quedan intentos");
            deshabilitar();
        }else{
            alert("Le quedan "+i+" intentos");
            cancelar();
        }

    }
}
function money(){
    var s= parseInt(localStorage.getItem("data"));
    if(a.value>s){
        alert("No cuenta con saldo suficiente.")
        cancelar2();
    } else{
        if((a.value%10)>0){
            alert("No es multiplo de 10.");
            cancelar2();
        }else{
            s = s-a.value;
            localStorage.setItem("data",s);
            window.location.href="transaccion.html";
        }
    }
}
function money2(n){
    var s= parseInt(localStorage.getItem("data"));
    if(n>s){
        alert("No cuenta con saldo suficiente.")
    } else{
            s = s-n;
            localStorage.setItem("data",s);
            window.location.href="transaccion.html";
    }
}
function si(){
    window.location.href="main.html";
}
function no(){
    window.location.href="fin.html";
}
function retiro(){
    window.location.href="retiro.html";
}
function retirosoles(){
    window.location.href="retiro2.html";
}
function otromonto(){
    window.location.href="retiro3.html"; 
}
function volver(){
    si();
}
function volver2(){
    retiro();
}
function volver3(){
    retirosoles();
}
function consulta(){
    window.location.href="consulta.html";
}
function mostrarsaldo(){
    document.getElementById("titulofin2").innerHTML= "hola"+saldo;

}
document.getElementById("cons").innerHTML= "S/. "+localStorage.getItem("data");
