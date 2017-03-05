function pesoPlaneta(){

    var peso = document.getElementById("peso");
    var jupiter = peso.value * 0.39;
    var venus   = peso.value * 0.87;
    var urano   = peso.value * 0.99;
    var marte   = peso.value * 0.38;
    var saturno = peso.value * 0.93;
    var neptuno = peso.value * 1.38;

    if(peso.value){
    document.getElementById("resultado").innerHTML = "<strong>"+
                                                      "<ul>" +
                                                      "<li>" + "Peso en Jupiter: " + jupiter.toFixed(2) + "</li>" +
                                                      "<li>" + "Peso en Venus: "+ venus.toFixed(2) + "</li>" +
                                                      "<li>" + "Peso en Urano: " + urano.toFixed(2) + "</li>" +
                                                      "<li>" + "Peso en Marte: "+marte.toFixed(2) + "</li>"+
                                                      "<li>" + "Peso en Saturno: "+saturno.toFixed(2) + "</li>"+
                                                      "<li>" + "Peso en Neptuno: "+neptuno.toFixed(2) + "</li>"+
                                                      "</ul></strong>";
                                                    }

}
