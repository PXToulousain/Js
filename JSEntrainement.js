function additionner(){
    var A1 = document.getElementById("chiffre1").value;
    var A2 = document.getElementById("chiffre2").value;
    var resultat =parseInt(A1)+parseInt(A2);
    document.getElementById("resultat").value=resultat;
}
function multiplier(){
    var M1 = document.getElementById("chiffre1").value;
    var M2 = document.getElementById("chiffre2").value;
    var resultat =parseInt(M1)*parseInt(M2);
    document.getElementById("resultat").value=resultat;
}

function soustraction(){
    var S1 = document.getElementById("chiffre1").value;
    var S2 = document.getElementById("chiffre2").value;
    if (S2>S1){
        var resultat = parseInt(S2)-parseInt(S1);
    }
    else{
        var resultat = parseInt(S1)-parseInt(S2);
    }
    document.getElementById("resultat").value=resultat;
}
function CompteARebours(){
    var R1 = document.getElementById("chiffre1").value;
    while (R1>=0){
        document.getElementById("resultat").value += R1+" ";
        R1--;
        
    }
}