// JavaScript Document

//ÐÂÎÅÇÐ»»
function tab(m,n) { 
    var tli=document.getElementById("tabmenu"+m).getElementsByTagName("li"); 
    var lli=document.getElementById("tablist"+m).getElementsByTagName("li");
    var mli=document.getElementById("tabmore"+m).getElementsByTagName("span"); 
    for(i=0;i<tli.length;i++){ 
        tli[i].className=i==n?"hover":""; 
        lli[i].style.display=i==n?"block":"none";
        mli[i].style.display=i==n?"block":"none";
    } 
}
