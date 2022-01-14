var bankGive = document.getElementById("bankGiveAmount");
var chissGive = document.getElementById("chissyGiveAmount");
var bibGive = document.getElementById("biboGiveAmount");
var chissRich = 1500;
var bibRich = 1500
var bankRich = 17580
var chissyMoney = document.getElementById("chissyMoney");
var biboMoney = document.getElementById("biboMoney");
var bankMoney = document.getElementById("bankMoney");
function bank2Chiss() {
    chissRich = chissRich + bankGive.value * 1;
    bankRich = bankRich - bankGive.value;
    bankMoney.innerHTML = "$" + bankRich;
    chissyMoney.innerHTML = "$" + chissRich;
    bankGive.value = "";
}
function bank2Bib() {
    bibRich = bibRich + bankGive.value * 1;
    bankRich = bankRich - bankGive.value;
    bankMoney.innerHTML = "$" + bankRich;
    biboMoney.innerHTML = "$" + bibRich;
    bankGive.value = "";
}
function chiss2Bib() {
    bibRich = bibRich + chissGive.value * 1;
    chissRich = chissRich - chissGive.value;
    chissyMoney.innerHTML = "$" + chissRich;
    biboMoney.innerHTML = "$" + bibRich;
    chissGive.value = "";
}
function bib2Chiss() {
    chissRich = chissRich + bibGive.value * 1;
    bibRich = bibRich - bibGive.value;
    biboMoney.innerHTML = "$" + bibRich;
    chissyMoney.innerHTML = "$" + chissRich;
    bibGive.value = "";
}
function chiss2Bank() {
    bankRich = bankRich + chissGive.value * 1;
    chissRich = chissRich - chissGive.value;
    chissyMoney.innerHTML = "$" + chissRich;
    bankMoney.innerHTML = "$" + bankRich;
    chissGive.value = "";
}
function bib2Bank() {
    bankRich = bankRich + bibGive.value * 1;
    bibRich = bibRich - bibGive.value;
    biboMoney.innerHTML = "$" + bibRich;
    bankMoney.innerHTML = "$" + bankRich;
    bibGive.value = "";
}