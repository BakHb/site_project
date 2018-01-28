function envoyer() {
var titre_annonce = document.getElementById("titre_annonce").value;
var vendeur = document.getElementById("vendeur").value;
var prix = document.getElementById("prix").value; 
var tel = document.getElementById("tel").value;
var model = document.getElementById("model").value; 
var année_sortie = document.getElementById("année_sortie").value; 
var AA = document.getElementById("AA").value; 
var Num = document.getElementById("00").value; 
var vitesse = document.getElementById("vitesse").value; 
var kilometrage = document.getElementById("kilometrage").value; 
var img1 = document.getElementById("img1").value;
var img2 = document.getElementById("img2").value;
var img3 = document.getElementById("img3").value; 
var infoSup = document.getElementById("infoSup").value;
document.getElementById("form_id").submit();
alert(" titre_annonce : " + titre_annonce + " \n vendeur : " + vendeur + " \n prix : " + prix + " \n tel : " + tel + " \n model : " + model + " \n année_sortie : " + année_sortie + " \n AA : " + AA + " \n Num : " + Num + " \n vitesse : " + vitesse + " \n kilometrage : " + kilometrage + " \n img1 : " + img1 + " \n img2 : " + img2 + " \n img3 : " + img3 + " \n infoSup : " + infoSup + " \n Form Id : " + document.getElementById("form_id").getAttribute("id") + "\n\n Form Submitted Successfully......");
}