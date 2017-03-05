function calcularImc(){

    var peso = document.getElementById("peso").value;
    var altura = document.getElementById("altura").value;
    var imc = (peso/(altura*altura)).toFixed(2);
    alert("Su índice de peso corporal es: "+imc);
}
