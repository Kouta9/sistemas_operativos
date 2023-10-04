$(document).ready(function(){
   

    
    /*
    colores de identificacion
    _____________________
    |A1     |#631ea7    |
    |A2     |#2c579b    |
    |A3     |#b3520b    |
    |A4     |#e174bb    |
    |A5     |#dcb017    |
    ---------------------
    */

    $('#boton_iniciar').click(function(){ 
        let contador=Number( $(".casilla_de_numeros_procesos").text())
        let contador_paginas_ocupadas=Number( $(".casilla_de_numeros_procesos").text())
        let seleccionDeTamano =Number( $("#selec_tamano option:selected").text());//eleccion de tamano

        let eleccion = $("#selec_proceso option:selected").text(); /*esto es para jalar la seleccion del select y alojarlo en una variable*/

        // Definir un objeto que contiene las variables y sus colores
        var colores = {
            A1: "#631ea7",
            A2: "#2c579b",
            A3: "#b3520b",
            A4: "#e174bb",
            A5: "#dcb017"
        };
        var variableSeleccionada = $("#selec_proceso option:selected").text(); // Cambia esto según la variable que desees seleccionar
        let colorYVariable = colores[variableSeleccionada]; //junta la variable y el color para modificar el color en el background


        switch (seleccionDeTamano) {
            case 64:
                if ($("#pagina_1").text()=="") { 
                    //modificador de color en pagina
                    $("#pagina_1").text(variableSeleccionada + " 64 bits");
                    $('#pagina_1').css("color", "white")
                    $('#pagina_1').css("background-color",colorYVariable) 
                    //para contador y casilla
                    $(".procesos_activos_a1").text(variableSeleccionada);
                    $('.procesos_activos_a1').css("background-color", colorYVariable);
                    $(".procesos_actovos_a1").css("color","white")
                    $(".casilla_de_numeros_procesos").text(contador + 1);


                    return
                } if ($("#pagina_2").text()=="" && $("#pagina_1").text() !="") {                
                    //modificador de color en pagina
                    $("#pagina_2").text(variableSeleccionada + " 64 bits");
                    $('#pagina_2').css("color", "white")
                    $('#pagina_2').css("background-color",colorYVariable)
                    $(".procesos_activos_a2").text(variableSeleccionada);
                    $('.procesos_activos_a2').css("background-color", colorYVariable);
                    $(".procesos_actovos_a2").css("color","white")
                    $(".casilla_de_numeros_procesos").text(contador + 1);

                    
                    return 
                } if ($("#pagina_3").text()=="" && $("#pagina_2").text() !="" && $("#pagina_1").text() !="") {
                    //modificador de color en pagina
                    $("#pagina_3").text(variableSeleccionada + " 64 bits");
                    $('#pagina_3').css("color", "white")
                    $('#pagina_3').css("background-color", colorYVariable)
                    $(".procesos_activos_a3").text(variableSeleccionada);
                    $('.procesos_activos_a3').css("background-color", colorYVariable);
                    $(".procesos_actovos_a3").css("color","white")
                    $(".casilla_de_numeros_procesos").text(contador + 1);
                    
                    return
                } if ($("#pagina_4").text()=="" && $("#pagina_3").text() !="" && $("#pagina_2").text() !="" && $("#pagina_1").text() !="") {
                    //modificador de color en pagina
                    $("#pagina_4").text(variableSeleccionada + " 64 bits");
                    $('#pagina_4').css("color", "white")
                    $('#pagina_4').css("background-color", colorYVariable) 
                    $(".procesos_activos_a4").text(variableSeleccionada);
                    $('.procesos_activos_a4').css("background-color", colorYVariable);
                    $(".procesos_actovos_a4").css("color","white")
                    $(".casilla_de_numeros_procesos").text(contador + 1);   
                    return    
                } if ($("#pagina_5").text()=="" && $("#pagina_4").text() !="" && $("#pagina_3").text() !="" && $("#pagina_2").text() !="" && $("#pagina_1").text() !=""){
                    //modificador de color en pagina
                    $("#pagina_5").text(variableSeleccionada + " 64 bits");
                    $('#pagina_5').css("color", "white")
                    $('#pagina_5').css("background-color", colorYVariable)
                    $(".procesos_activos_a5").text(variableSeleccionada);
                    $('.procesos_activos_a5').css("background-color", colorYVariable);
                    $(".procesos_actovos_a5").css("color","white")
                    $(".casilla_de_numeros_procesos").text(contador + 1);
                    return
                }if ($("#pagina_6").text()=="" && $("#pagina_5").text() !="" && $("#pagina_4").text() !="" && $("#pagina_3").text() !="" && $("#pagina_2").text() !="" && $("#pagina_1").text() !=""){
                    //modificador de color en pagina
                    $("#pagina_6").text(variableSeleccionada + " 64 bits");
                    $('#pagina_6').css("color", "white")
                    $('#pagina_6').css("background-color",colorYVariable)
                    $(".procesos_activos_a6").text(variableSeleccionada);
                    $('.procesos_activos_a6').css("background-color", colorYVariable);
                    $(".procesos_actovos_a6").css("color","white")
                    $(".casilla_de_numeros_procesos").text(contador + 1);
                    return
                }if ($("#pagina_7").text()=="" && $("#pagina_6").text() !="" && $("#pagina_5").text() !="" && $("#pagina_4").text() !="" && $("#pagina_3").text() !="" && $("#pagina_2").text() !="" && $("#pagina_1").text() !=""){
                    //modificador de color en pagina
                    $("#pagina_7").text(variableSeleccionada + " 64 bits");
                    $('#pagina_7').css("color", "white")
                    $('#pagina_7').css("background-color",colorYVariable)
                    $(".procesos_activos_a7").text(variableSeleccionada);
                    $('.procesos_activos_a7').css("background-color", colorYVariable);
                    $(".procesos_actovos_a7").css("color","white")
                    $(".casilla_de_numeros_procesos").text(contador + 1);
                    return                
                }if ($("#pagina_8").text()=="" && $("#pagina_7").text()!="" && $("#pagina_6").text() !="" && $("#pagina_5").text() !="" && $("#pagina_4").text() !="" && $("#pagina_3").text() !="" && $("#pagina_2").text() !="" && $("#pagina_1").text() !=""){
                    //modificador de color en pagina
                    $("#pagina_8").text(variableSeleccionada + " 64 bits");
                    $('#pagina_8').css("color", "white")
                    $('#pagina_8').css("background-color",colorYVariable)
                    $(".procesos_activos_a8").text(variableSeleccionada);
                    $('.procesos_activos_a8').css("background-color", colorYVariable);
                    $(".procesos_actovos_a8").css("color","white")
                    $(".casilla_de_numeros_procesos").text(contador + 1);
                    return     
                }if ($("#pagina_9").text()==""&& $("#pagina_8").text()!="" && $("#pagina_7").text()!="" && $("#pagina_6").text() !="" && $("#pagina_5").text() !="" && $("#pagina_4").text() !="" && $("#pagina_3").text() !="" && $("#pagina_2").text() !="" && $("#pagina_1").text() !=""){
                    //modificador de color en pagina
                    $("#pagina_9").text(variableSeleccionada + " 64 bits");
                    $('#pagina_9').css("color", "white")
                    $('#pagina_9').css("background-color",colorYVariable)
                    $(".procesos_activos_a9").text(variableSeleccionada);
                    $('.procesos_activos_a9').css("background-color", colorYVariable);
                    $(".procesos_actovos_a9").css("color","white")
                    $(".casilla_de_numeros_procesos").text(contador + 1);
                    return     
                }
                break;
            case 128:
                if ($("#pagina_1").text()=="") { 
                    //modificador de color en pagina
                    $("#pagina_1").text(variableSeleccionada + " 128 bits");
                    $('#pagina_1').css("color", "white")
                    $('#pagina_1').css("background-color",colorYVariable) 
                    //para contador y casilla
                    $(".procesos_activos_a1").text(variableSeleccionada);
                    $('.procesos_activos_a1').css("background-color", colorYVariable);
                    $(".procesos_actovos_a1").css("color","white")
                    $(".casilla_de_numeros_procesos").text(contador + 1);


                    return
                } if ($("#pagina_2").text()=="" && $("#pagina_1").text() !="") {                
                    //modificador de color en pagina
                    $("#pagina_2").text(variableSeleccionada + " 128 bits");
                    $('#pagina_2').css("color", "white")
                    $('#pagina_2').css("background-color",colorYVariable)
                    $(".procesos_activos_a2").text(variableSeleccionada);
                    $('.procesos_activos_a2').css("background-color", colorYVariable);
                    $(".procesos_actovos_a2").css("color","white")
                    $(".casilla_de_numeros_procesos").text(contador + 1);

                    
                    return 
                } if ($("#pagina_3").text()=="" && $("#pagina_2").text() !="" && $("#pagina_1").text() !="") {
                    //modificador de color en pagina
                    $("#pagina_3").text(variableSeleccionada + " 128 bits");
                    $('#pagina_3').css("color", "white")
                    $('#pagina_3').css("background-color", colorYVariable)
                    $(".procesos_activos_a3").text(variableSeleccionada);
                    $('.procesos_activos_a3').css("background-color", colorYVariable);
                    $(".procesos_actovos_a3").css("color","white")
                    $(".casilla_de_numeros_procesos").text(contador + 1);
                    
                    return
                } if ($("#pagina_4").text()=="" && $("#pagina_3").text() !="" && $("#pagina_2").text() !="" && $("#pagina_1").text() !="") {
                    //modificador de color en pagina
                    $("#pagina_4").text(variableSeleccionada + " 128 bits");
                    $('#pagina_4').css("color", "white")
                    $('#pagina_4').css("background-color", colorYVariable) 
                    $(".procesos_activos_a4").text(variableSeleccionada);
                    $('.procesos_activos_a4').css("background-color", colorYVariable);
                    $(".procesos_actovos_a4").css("color","white")
                    $(".casilla_de_numeros_procesos").text(contador + 1);   
                    return    
                } if ($("#pagina_5").text()=="" && $("#pagina_4").text() !="" && $("#pagina_3").text() !="" && $("#pagina_2").text() !="" && $("#pagina_1").text() !=""){
                    //modificador de color en pagina
                    $("#pagina_5").text(variableSeleccionada + " 128 bits");
                    $('#pagina_5').css("color", "white")
                    $('#pagina_5').css("background-color", colorYVariable)
                    $(".procesos_activos_a5").text(variableSeleccionada);
                    $('.procesos_activos_a5').css("background-color", colorYVariable);
                    $(".procesos_actovos_a5").css("color","white")
                    $(".casilla_de_numeros_procesos").text(contador + 1);
                    return
                }if ($("#pagina_6").text()=="" && $("#pagina_5").text() !="" && $("#pagina_4").text() !="" && $("#pagina_3").text() !="" && $("#pagina_2").text() !="" && $("#pagina_1").text() !=""){
                    //modificador de color en pagina
                    $("#pagina_6").text(variableSeleccionada + " 128 bits");
                    $('#pagina_6').css("color", "white")
                    $('#pagina_6').css("background-color",colorYVariable)
                    $(".procesos_activos_a6").text(variableSeleccionada);
                    $('.procesos_activos_a6').css("background-color", colorYVariable);
                    $(".procesos_actovos_a6").css("color","white")
                    $(".casilla_de_numeros_procesos").text(contador + 1);
                    return
                }if ($("#pagina_7").text()=="" && $("#pagina_6").text() !="" && $("#pagina_5").text() !="" && $("#pagina_4").text() !="" && $("#pagina_3").text() !="" && $("#pagina_2").text() !="" && $("#pagina_1").text() !=""){
                    //modificador de color en pagina
                    $("#pagina_7").text(variableSeleccionada + " 128 bits");
                    $('#pagina_7').css("color", "white")
                    $('#pagina_7').css("background-color",colorYVariable)
                    $(".procesos_activos_a7").text(variableSeleccionada);
                    $('.procesos_activos_a7').css("background-color", colorYVariable);
                    $(".procesos_actovos_a7").css("color","white")
                    $(".casilla_de_numeros_procesos").text(contador + 1);
                    return                
                }if ($("#pagina_8").text()=="" && $("#pagina_7").text()!="" && $("#pagina_6").text() !="" && $("#pagina_5").text() !="" && $("#pagina_4").text() !="" && $("#pagina_3").text() !="" && $("#pagina_2").text() !="" && $("#pagina_1").text() !=""){
                    //modificador de color en pagina
                    $("#pagina_8").text(variableSeleccionada + " 128 bits");
                    $('#pagina_8').css("color", "white")
                    $('#pagina_8').css("background-color",colorYVariable)
                    $(".procesos_activos_a8").text(variableSeleccionada);
                    $('.procesos_activos_a8').css("background-color", colorYVariable);
                    $(".procesos_actovos_a8").css("color","white")
                    $(".casilla_de_numeros_procesos").text(contador + 1);
                    return     
                }if ($("#pagina_9").text()==""&& $("#pagina_8").text()!="" && $("#pagina_7").text()!="" && $("#pagina_6").text() !="" && $("#pagina_5").text() !="" && $("#pagina_4").text() !="" && $("#pagina_3").text() !="" && $("#pagina_2").text() !="" && $("#pagina_1").text() !=""){
                    //modificador de color en pagina
                    $("#pagina_9").text(variableSeleccionada + " 128 bits");
                    $('#pagina_9').css("color", "white")
                    $('#pagina_9').css("background-color",colorYVariable)
                    $(".procesos_activos_a9").text(variableSeleccionada);
                    $('.procesos_activos_a9').css("background-color", colorYVariable);
                    $(".procesos_actovos_a9").css("color","white")
                    $(".casilla_de_numeros_procesos").text(contador + 1);
                    return     
                }
                break;
            case 256:
                if ($("#pagina_1").text()=="") {                
                    //modificador de color en pagina
                    $("#pagina_1").text(variableSeleccionada + " 256 bits");
                    $('#pagina_1').css("color", "white")
                    $('#pagina_1').css("background-color",colorYVariable)
                    //pagiina siguiente
                    $("#pagina_2").text(variableSeleccionada + " 256 bits");
                    $('#pagina_2').css("color", "white")
                    $('#pagina_2').css("background-color",colorYVariable)

                    $(".procesos_activos_a1").text(variableSeleccionada);
                    $('.procesos_activos_a1').css("background-color", colorYVariable);
                    $(".procesos_actovos_a1").css("color","white")
                    $(".casilla_de_numeros_procesos").text(contador + 1);
                    
                    $(".procesos_activos_a2").text(variableSeleccionada);
                    $('.procesos_activos_a2').css("background-color", colorYVariable);
                    $(".procesos_actovos_a2").css("color","white")
                    $(".casilla_de_numeros_procesos").text(contador + 1);
                    return 
                }if ($("#pagina_2").text()=="") {                
                    //modificador de color en pagina
                    $("#pagina_2").text(variableSeleccionada+ " 256 bits");
                    $('#pagina_2').css("color", "white")
                    $('#pagina_2').css("background-color",colorYVariable)
                    //pagiina siguiente
                    $("#pagina_3").text(variableSeleccionada+ " 256 bits");
                    $('#pagina_3').css("color", "white")
                    $('#pagina_3').css("background-color",colorYVariable)

                    $(".procesos_activos_a2").text(variableSeleccionada);
                    $('.procesos_activos_a2').css("background-color", colorYVariable);
                    $(".procesos_actovos_a2").css("color","white")
                    $(".casilla_de_numeros_procesos").text(contador + 1);

                    $(".procesos_activos_a3").text(variableSeleccionada);
                    $('.procesos_activos_a3').css("background-color", colorYVariable);
                    $(".procesos_actovos_a3").css("color","white")
                    $(".casilla_de_numeros_procesos").text(contador + 1);
                    return 
                }if ($("#pagina_3").text()=="") {                
                    //modificador de color en pagina
                    $("#pagina_3").text(variableSeleccionada+ " 256 bits");
                    $('#pagina_3').css("color", "white")
                    $('#pagina_3').css("background-color",colorYVariable)
                    //pagiina siguiente
                    $("#pagina_4").text(variableSeleccionada+ " 256 bits");
                    $('#pagina_4').css("color", "white")
                    $('#pagina_4').css("background-color",colorYVariable)

                    $(".procesos_activos_a3").text(variableSeleccionada);
                    $('.procesos_activos_a3').css("background-color", colorYVariable);
                    $(".procesos_actovos_a3").css("color","white")
                    $(".casilla_de_numeros_procesos").text(contador + 1);

                    $(".procesos_activos_a4").text(variableSeleccionada);
                    $('.procesos_activos_a4').css("background-color", colorYVariable);
                    $(".procesos_actovos_a4").css("color","white")
                    $(".casilla_de_numeros_procesos").text(contador + 1);
                    return 
                }if ($("#pagina_4").text()=="") {                
                    //modificador de color en pagina
                    $("#pagina_4").text(variableSeleccionada+ " 256 bits");
                    $('#pagina_4').css("color", "white")
                    $('#pagina_4').css("background-color",colorYVariable)
                    //pagiina siguiente
                    $("#pagina_5").text(variableSeleccionada+ " 256 bits");
                    $('#pagina_5').css("color", "white")
                    $('#pagina_5').css("background-color",colorYVariable)

                    $(".procesos_activos_a4").text(variableSeleccionada);
                    $('.procesos_activos_a4').css("background-color", colorYVariable);
                    $(".procesos_actovos_a4").css("color","white")
                    $(".casilla_de_numeros_procesos").text(contador + 1);

                    $(".procesos_activos_a5").text(variableSeleccionada);
                    $('.procesos_activos_a5').css("background-color", colorYVariable);
                    $(".procesos_actovos_a5").css("color","white")
                    $(".casilla_de_numeros_procesos").text(contador + 1);
                    return 
                }if ($("#pagina_5").text()=="") {                
                    //modificador de color en pagina
                    $("#pagina_5").text(variableSeleccionada+ " 256 bits");
                    $('#pagina_5').css("color", "white")
                    $('#pagina_5').css("background-color",colorYVariable)
                    //pagiina siguiente
                    $("#pagina_6").text(variableSeleccionada+ " 256 bits");
                    $('#pagina_6').css("color", "white")
                    $('#pagina_6').css("background-color",colorYVariable)

                    $(".procesos_activos_a5").text(variableSeleccionada);
                    $('.procesos_activos_a5').css("background-color", colorYVariable);
                    $(".procesos_actovos_a5").css("color","white")
                    $(".casilla_de_numeros_procesos").text(contador + 1);

                    $(".procesos_activos_a6").text(variableSeleccionada);
                    $('.procesos_activos_a6').css("background-color", colorYVariable);
                    $(".procesos_actovos_a6").css("color","white")
                    $(".casilla_de_numeros_procesos").text(contador + 1);
                    return 
                }if ($("#pagina_6").text()=="") {                
                    //modificador de color en pagina
                    $("#pagina_6").text(variableSeleccionada+ " 256 bits");
                    $('#pagina_6').css("color", "white")
                    $('#pagina_6').css("background-color",colorYVariable)
                    //pagiina siguiente
                    $("#pagina_7").text(variableSeleccionada+ " 256 bits");
                    $('#pagina_7').css("color", "white")
                    $('#pagina_7').css("background-color",colorYVariable)

                    $(".procesos_activos_a6").text(variableSeleccionada);
                    $('.procesos_activos_a6').css("background-color", colorYVariable);
                    $(".procesos_actovos_a6").css("color","white")
                    $(".casilla_de_numeros_procesos").text(contador + 1);

                    $(".procesos_activos_a7").text(variableSeleccionada);
                    $('.procesos_activos_a7').css("background-color", colorYVariable);
                    $(".procesos_actovos_a7").css("color","white")
                    $(".casilla_de_numeros_procesos").text(contador + 1);
                    return 
                }if ($("#pagina_7").text()=="") {                
                    //modificador de color en pagina
                    $("#pagina_7").text(variableSeleccionada+ " 256 bits");
                    $('#pagina_7').css("color", "white")
                    $('#pagina_7').css("background-color",colorYVariable)
                    //pagiina siguiente
                    $("#pagina_8").text(variableSeleccionada+ " 256 bits");
                    $('#pagina_8').css("color", "white")
                    $('#pagina_8').css("background-color",colorYVariable)

                    $(".procesos_activos_a7").text(variableSeleccionada);
                    $('.procesos_activos_a7').css("background-color", colorYVariable);
                    $(".procesos_actovos_a7").css("color","white")
                    $(".casilla_de_numeros_procesos").text(contador + 1);

                    $(".procesos_activos_a8").text(variableSeleccionada);
                    $('.procesos_activos_a8').css("background-color", colorYVariable);
                    $(".procesos_actovos_a8").css("color","white")
                    $(".casilla_de_numeros_procesos").text(contador + 1);
                    return 
                }if ($("#pagina_8").text()=="") {                
                    //modificador de color en pagina
                    $("#pagina_8").text(variableSeleccionada+ " 256 bits");
                    $('#pagina_8').css("color", "white")
                    $('#pagina_8').css("background-color",colorYVariable)
                    //pagiina siguiente
                    $("#pagina_9").text(variableSeleccionada+ " 256 bits");
                    $('#pagina_9').css("color", "white")
                    $('#pagina_9').css("background-color",colorYVariable)

                    $(".procesos_activos_a8").text(variableSeleccionada);
                    $('.procesos_activos_a8').css("background-color", colorYVariable);
                    $(".procesos_actovos_a8").css("color","white")
                    $(".casilla_de_numeros_procesos").text(contador + 1);

                    $(".procesos_activos_a9").text(variableSeleccionada);
                    $('.procesos_activos_a9').css("background-color", colorYVariable);
                    $(".procesos_actovos_a9").css("color","white")
                    $(".casilla_de_numeros_procesos").text(contador + 1);
                    return 
                }if ($("#pagina_9").text()=="") {                
                    alert("no hay espacio sufuciete")
                    $('.alerta_sin_espacio').css("background-color", "red");//      alerta_sin_espacio
                }

            break;

            case 512:
                if ($("#pagina_1").text()=="") {                
                    //modificador de color en pagina
                    $("#pagina_1").text(variableSeleccionada + " 256 bits");
                    $('#pagina_1').css("color", "white")
                    $('#pagina_1').css("background-color",colorYVariable)
                    //pagiina siguiente
                    $("#pagina_2").text(variableSeleccionada + " 256 bits");
                    $('#pagina_2').css("color", "white")
                    $('#pagina_2').css("background-color",colorYVariable)
                    //pagiina siguiente
                    $("#pagina_3").text(variableSeleccionada + " 256 bits");
                    $('#pagina_3').css("color", "white")
                    $('#pagina_3').css("background-color",colorYVariable)
                    //pagiina siguiente
                    $("#pagina_4").text(variableSeleccionada + " 256 bits");
                    $('#pagina_4').css("color", "white")
                    $('#pagina_4').css("background-color",colorYVariable)
                    
                    $(".procesos_activos_a1").text(variableSeleccionada);
                    $('.procesos_activos_a1').css("background-color", colorYVariable);
                    $(".procesos_actovos_a1").css("color","white")
                    $(".casilla_de_numeros_procesos").text(contador + 1);
                    
                    $(".procesos_activos_a2").text(variableSeleccionada);
                    $('.procesos_activos_a2').css("background-color", colorYVariable);
                    $(".procesos_actovos_a2").css("color","white")
                    $(".casilla_de_numeros_procesos").text(contador + 1);

                    $(".procesos_activos_a3").text(variableSeleccionada);
                    $('.procesos_activos_a3').css("background-color", colorYVariable);
                    $(".procesos_actovos_a3").css("color","white")
                    $(".casilla_de_numeros_procesos").text(contador + 1);

                    $(".procesos_activos_a4").text(variableSeleccionada);
                    $('.procesos_activos_a4').css("background-color", colorYVariable);
                    $(".procesos_actovos_a4").css("color","white")
                    $(".casilla_de_numeros_procesos").text(contador + 1);

                    return 
                }if ($("#pagina_2").text()=="") {                
                    //modificador de color en pagina
                    $("#pagina_2").text(variableSeleccionada + " 256 bits");
                    $('#pagina_2').css("color", "white")
                    $('#pagina_2').css("background-color",colorYVariable)
                    //pagiina siguiente
                    $("#pagina_3").text(variableSeleccionada + " 256 bits");
                    $('#pagina_3').css("color", "white")
                    $('#pagina_3').css("background-color",colorYVariable)
                    //pagiina siguiente
                    $("#pagina_4").text(variableSeleccionada + " 256 bits");
                    $('#pagina_4').css("color", "white")
                    $('#pagina_4').css("background-color",colorYVariable)
                    //pagiina siguiente
                    $("#pagina_5").text(variableSeleccionada + " 256 bits");
                    $('#pagina_5').css("color", "white")
                    $('#pagina_5').css("background-color",colorYVariable)
                    
                    $(".procesos_activos_a2").text(variableSeleccionada);
                    $('.procesos_activos_a2').css("background-color", colorYVariable);
                    $(".procesos_actovos_a2").css("color","white")
                    $(".casilla_de_numeros_procesos").text(contador + 1);
                    
                    $(".procesos_activos_a3").text(variableSeleccionada);
                    $('.procesos_activos_a3').css("background-color", colorYVariable);
                    $(".procesos_actovos_a3").css("color","white")
                    $(".casilla_de_numeros_procesos").text(contador + 1);

                    $(".procesos_activos_a4").text(variableSeleccionada);
                    $('.procesos_activos_a4').css("background-color", colorYVariable);
                    $(".procesos_actovos_a4").css("color","white")
                    $(".casilla_de_numeros_procesos").text(contador + 1);

                    $(".procesos_activos_a5").text(variableSeleccionada);
                    $('.procesos_activos_a5').css("background-color", colorYVariable);
                    $(".procesos_actovos_a5").css("color","white")
                    $(".casilla_de_numeros_procesos").text(contador + 1);
                  
                    return 
                }if ($("#pagina_3").text()=="") {                
                    //modificador de color en pagina
                    $("#pagina_3").text(variableSeleccionada + " 256 bits");
                    $('#pagina_3').css("color", "white")
                    $('#pagina_3').css("background-color",colorYVariable)
                    //pagiina siguiente
                    $("#pagina_4").text(variableSeleccionada + " 256 bits");
                    $('#pagina_4').css("color", "white")
                    $('#pagina_4').css("background-color",colorYVariable)
                    //pagiina siguiente
                    $("#pagina_5").text(variableSeleccionada + " 256 bits");
                    $('#pagina_5').css("color", "white")
                    $('#pagina_5').css("background-color",colorYVariable)
                    //pagiina siguiente
                    $("#pagina_6").text(variableSeleccionada + " 256 bits");
                    $('#pagina_6').css("color", "white")
                    $('#pagina_6').css("background-color",colorYVariable)
                    
                    $(".procesos_activos_a3").text(variableSeleccionada);
                    $('.procesos_activos_a3').css("background-color", colorYVariable);
                    $(".procesos_actovos_a3").css("color","white")
                    $(".casilla_de_numeros_procesos").text(contador + 1);
                    
                    $(".procesos_activos_a4").text(variableSeleccionada);
                    $('.procesos_activos_a4').css("background-color", colorYVariable);
                    $(".procesos_actovos_a4").css("color","white")
                    $(".casilla_de_numeros_procesos").text(contador + 1);

                    $(".procesos_activos_a5").text(variableSeleccionada);
                    $('.procesos_activos_a5').css("background-color", colorYVariable);
                    $(".procesos_actovos_a5").css("color","white")
                    $(".casilla_de_numeros_procesos").text(contador + 1);

                    $(".procesos_activos_a6").text(variableSeleccionada);
                    $('.procesos_activos_a6').css("background-color", colorYVariable);
                    $(".procesos_actovos_a6").css("color","white")
                    $(".casilla_de_numeros_procesos").text(contador + 1);
                    
                    return 
                }if ($("#pagina_4").text()=="") {                
                    //modificador de color en pagina
                    $("#pagina_4").text(variableSeleccionada + " 256 bits");
                    $('#pagina_4').css("color", "white")
                    $('#pagina_4').css("background-color",colorYVariable)
                    //pagiina siguiente
                    $("#pagina_5").text(variableSeleccionada + " 256 bits");
                    $('#pagina_5').css("color", "white")
                    $('#pagina_5').css("background-color",colorYVariable)
                    //pagiina siguiente
                    $("#pagina_6").text(variableSeleccionada + " 256 bits");
                    $('#pagina_6').css("color", "white")
                    $('#pagina_6').css("background-color",colorYVariable)
                    //pagiina siguiente
                    $("#pagina_7").text(variableSeleccionada + " 256 bits");
                    $('#pagina_7').css("color", "white")
                    $('#pagina_7').css("background-color",colorYVariable)
                    
                   
                    $(".procesos_activos_a4").text(variableSeleccionada);
                    $('.procesos_activos_a4').css("background-color", colorYVariable);
                    $(".procesos_actovos_a4").css("color","white")
                    $(".casilla_de_numeros_procesos").text(contador + 1);
                    
                    $(".procesos_activos_a5").text(variableSeleccionada);
                    $('.procesos_activos_a5').css("background-color", colorYVariable);
                    $(".procesos_actovos_a5").css("color","white")
                    $(".casilla_de_numeros_procesos").text(contador + 1);

                    $(".procesos_activos_a6").text(variableSeleccionada);
                    $('.procesos_activos_a6').css("background-color", colorYVariable);
                    $(".procesos_actovos_a6").css("color","white")
                    $(".casilla_de_numeros_procesos").text(contador + 1);

                    $(".procesos_activos_a7").text(variableSeleccionada);
                    $('.procesos_activos_a7').css("background-color", colorYVariable);
                    $(".procesos_actovos_a7").css("color","white")
                    $(".casilla_de_numeros_procesos").text(contador + 1);
                    
                    return 
                }if ($("#pagina_5").text()=="") {                
                    //modificador de color en pagina
                    $("#pagina_5").text(variableSeleccionada + " 256 bits");
                    $('#pagina_5').css("color", "white")
                    $('#pagina_5').css("background-color",colorYVariable)
                    //pagiina siguiente
                    $("#pagina_6").text(variableSeleccionada + " 256 bits");
                    $('#pagina_6').css("color", "white")
                    $('#pagina_6').css("background-color",colorYVariable)
                    //pagiina siguiente
                    $("#pagina_7").text(variableSeleccionada + " 256 bits");
                    $('#pagina_7').css("color", "white")
                    $('#pagina_7').css("background-color",colorYVariable)
                    //pagiina siguiente
                    $("#pagina_8").text(variableSeleccionada + " 256 bits");
                    $('#pagina_8').css("color", "white")
                    $('#pagina_8').css("background-color",colorYVariable)               

                    $(".procesos_activos_a5").text(variableSeleccionada);
                    $('.procesos_activos_a5').css("background-color", colorYVariable);
                    $(".procesos_actovos_a5").css("color","white")
                    $(".casilla_de_numeros_procesos").text(contador + 1);
                    
                    $(".procesos_activos_a6").text(variableSeleccionada);
                    $('.procesos_activos_a6').css("background-color", colorYVariable);
                    $(".procesos_actovos_a6").css("color","white")
                    $(".casilla_de_numeros_procesos").text(contador + 1);

                    $(".procesos_activos_a7").text(variableSeleccionada);
                    $('.procesos_activos_a7').css("background-color", colorYVariable);
                    $(".procesos_actovos_a7").css("color","white")
                    $(".casilla_de_numeros_procesos").text(contador + 1);

                    $(".procesos_activos_a8").text(variableSeleccionada);
                    $('.procesos_activos_a8').css("background-color", colorYVariable);
                    $(".procesos_actovos_a8").css("color","white")
                    $(".casilla_de_numeros_procesos").text(contador + 1);
                   
                    return 
                }if ($("#pagina_6").text()=="") {                
                    //modificador de color en pagina
                    $("#pagina_6").text(variableSeleccionada + " 256 bits");
                    $('#pagina_6').css("color", "white")
                    $('#pagina_6').css("background-color",colorYVariable)
                    //pagiina siguiente
                    $("#pagina_7").text(variableSeleccionada + " 256 bits");
                    $('#pagina_7').css("color", "white")
                    $('#pagina_7').css("background-color",colorYVariable)
                    //pagiina siguiente
                    $("#pagina_8").text(variableSeleccionada + " 256 bits");
                    $('#pagina_8').css("color", "white")
                    $('#pagina_8').css("background-color",colorYVariable)
                    //pagiina siguiente
                    $("#pagina_9").text(variableSeleccionada + " 256 bits");
                    $('#pagina_9').css("color", "white")
                    $('#pagina_9').css("background-color",colorYVariable)               

                    $(".procesos_activos_a6").text(variableSeleccionada);
                    $('.procesos_activos_a6').css("background-color", colorYVariable);
                    $(".procesos_actovos_a6").css("color","white")
                    $(".casilla_de_numeros_procesos").text(contador + 1);
                    
                    $(".procesos_activos_a7").text(variableSeleccionada);
                    $('.procesos_activos_a7').css("background-color", colorYVariable);
                    $(".procesos_actovos_a7").css("color","white")
                    $(".casilla_de_numeros_procesos").text(contador + 1);

                    $(".procesos_activos_a8").text(variableSeleccionada);
                    $('.procesos_activos_a8').css("background-color", colorYVariable);
                    $(".procesos_actovos_a8").css("color","white")
                    $(".casilla_de_numeros_procesos").text(contador + 1);

                    $(".procesos_activos_a9").text(variableSeleccionada);
                    $('.procesos_activos_a9').css("background-color", colorYVariable);
                    $(".procesos_actovos_a9").css("color","white")
                    $(".casilla_de_numeros_procesos").text(contador + 1);
                   
                    return 
                }if ($("#pagina_7").text()=="") {                
                    alert("no hay espacio sufuciete")
                    $('.alerta_sin_espacio').css("background-color", "red");//      alerta_sin_espacio
                    return
                }if ($("#pagina_8").text()=="") {                
                    alert("no hay espacio sufuciete")
                    $('.alerta_sin_espacio').css("background-color", "red");//      alerta_sin_espacio
                    return
                }if ($("#pagina_9").text()=="") {                
                    alert("no hay espacio sufuciete")
                    $('.alerta_sin_espacio').css("background-color", "red");//      alerta_sin_espacio
                    return
                }

            break;
            

            case 1024:
                if ($("#pagina_1").text()=="") {                
                    //modificador de color en pagina
                    $("#pagina_1").text(variableSeleccionada + " 1024 bits");
                    $('#pagina_1').css("color", "white")
                    $('#pagina_1').css("background-color",colorYVariable)
                    //pagiina siguiente
                    $("#pagina_2").text(variableSeleccionada + " 256 bits");
                    $('#pagina_2').css("color", "white")
                    $('#pagina_2').css("background-color",colorYVariable)
                    //pagiina siguiente
                    $("#pagina_3").text(variableSeleccionada + " 1024 bits");
                    $('#pagina_3').css("color", "white")
                    $('#pagina_3').css("background-color",colorYVariable)
                    //pagiina siguiente
                    $("#pagina_4").text(variableSeleccionada + " 1024 bits");
                    $('#pagina_4').css("color", "white")
                    $('#pagina_4').css("background-color",colorYVariable)               
                    //pagiina siguiente
                    $("#pagina_5").text(variableSeleccionada + " 1024 bits");
                    $('#pagina_5').css("color", "white")
                    $('#pagina_5').css("background-color",colorYVariable)               
                    //pagiina siguiente
                    $("#pagina_6").text(variableSeleccionada + " 1024 bits");
                    $('#pagina_6').css("color", "white")
                    $('#pagina_6').css("background-color",colorYVariable)               
                    //pagiina siguiente
                    $("#pagina_7").text(variableSeleccionada + " 1024 bits");
                    $('#pagina_7').css("color", "white")
                    $('#pagina_7').css("background-color",colorYVariable)               
                    //pagiina siguiente
                    $("#pagina_8").text(variableSeleccionada + " 1024 bits");
                    $('#pagina_8').css("color", "white")
                    $('#pagina_8').css("background-color",colorYVariable)               

                    $(".procesos_activos_a1").text(variableSeleccionada);
                    $('.procesos_activos_a1').css("background-color", colorYVariable);
                    $(".procesos_actovos_a1").css("color","white")
                    $(".casilla_de_numeros_procesos").text(contador + 1);
                    
                    $(".procesos_activos_a2").text(variableSeleccionada);
                    $('.procesos_activos_a2').css("background-color", colorYVariable);
                    $(".procesos_actovos_a2").css("color","white")
                    $(".casilla_de_numeros_procesos").text(contador + 1);

                    $(".procesos_activos_a3").text(variableSeleccionada);
                    $('.procesos_activos_a3').css("background-color", colorYVariable);
                    $(".procesos_actovos_a3").css("color","white")
                    $(".casilla_de_numeros_procesos").text(contador + 1);

                    $(".procesos_activos_a4").text(variableSeleccionada);
                    $('.procesos_activos_a4').css("background-color", colorYVariable);
                    $(".procesos_actovos_a4").css("color","white")
                    $(".casilla_de_numeros_procesos").text(contador + 1);

                    $(".procesos_activos_a5").text(variableSeleccionada);
                    $('.procesos_activos_a5').css("background-color", colorYVariable);
                    $(".procesos_actovos_a5").css("color","white")
                    $(".casilla_de_numeros_procesos").text(contador + 1);

                    $(".procesos_activos_a6").text(variableSeleccionada);
                    $('.procesos_activos_a6').css("background-color", colorYVariable);
                    $(".procesos_actovos_a6").css("color","white")
                    $(".casilla_de_numeros_procesos").text(contador + 1);

                    $(".procesos_activos_a7").text(variableSeleccionada);
                    $('.procesos_activos_a7').css("background-color", colorYVariable);
                    $(".procesos_actovos_a7").css("color","white")
                    $(".casilla_de_numeros_procesos").text(contador + 1);

                    $(".procesos_activos_a8").text(variableSeleccionada);
                    $('.procesos_activos_a8').css("background-color", colorYVariable);
                    $(".procesos_actovos_a8").css("color","white")
                    $(".casilla_de_numeros_procesos").text(contador + 1);
                   
                    return 
                } if ($("#pagina_2").text()=="") {                
                    //modificador de color en pagina
                    $("#pagina_2").text(variableSeleccionada + " 1024 bits");
                    $('#pagina_2').css("color", "white")
                    $('#pagina_2').css("background-color",colorYVariable)
                    //pagiina siguiente
                    $("#pagina_3").text(variableSeleccionada + " 256 bits");
                    $('#pagina_3').css("color", "white")
                    $('#pagina_3').css("background-color",colorYVariable)
                    //pagiina siguiente
                    $("#pagina_4").text(variableSeleccionada + " 1024 bits");
                    $('#pagina_4').css("color", "white")
                    $('#pagina_4').css("background-color",colorYVariable)
                    //pagiina siguiente
                    $("#pagina_5").text(variableSeleccionada + " 1024 bits");
                    $('#pagina_5').css("color", "white")
                    $('#pagina_5').css("background-color",colorYVariable)               
                    //pagiina siguiente
                    $("#pagina_6").text(variableSeleccionada + " 1024 bits");
                    $('#pagina_6').css("color", "white")
                    $('#pagina_6').css("background-color",colorYVariable)               
                    //pagiina siguiente
                    $("#pagina_7").text(variableSeleccionada + " 1024 bits");
                    $('#pagina_7').css("color", "white")
                    $('#pagina_7').css("background-color",colorYVariable)               
                    //pagiina siguiente
                    $("#pagina_8").text(variableSeleccionada + " 1024 bits");
                    $('#pagina_8').css("color", "white")
                    $('#pagina_8').css("background-color",colorYVariable)               
                    //pagiina siguiente
                    $("#pagina_9").text(variableSeleccionada + " 1024 bits");
                    $('#pagina_9').css("color", "white")
                    $('#pagina_9').css("background-color",colorYVariable)               

                    $(".procesos_activos_a2").text(variableSeleccionada);
                    $('.procesos_activos_a2').css("background-color", colorYVariable);
                    $(".procesos_actovos_a2").css("color","white")
                    $(".casilla_de_numeros_procesos").text(contador + 1);
                    
                    $(".procesos_activos_a3").text(variableSeleccionada);
                    $('.procesos_activos_a3').css("background-color", colorYVariable);
                    $(".procesos_actovos_a3").css("color","white")
                    $(".casilla_de_numeros_procesos").text(contador + 1);

                    $(".procesos_activos_a4").text(variableSeleccionada);
                    $('.procesos_activos_a4').css("background-color", colorYVariable);
                    $(".procesos_actovos_a4").css("color","white")
                    $(".casilla_de_numeros_procesos").text(contador + 1);

                    $(".procesos_activos_a5").text(variableSeleccionada);
                    $('.procesos_activos_a5').css("background-color", colorYVariable);
                    $(".procesos_actovos_a5").css("color","white")
                    $(".casilla_de_numeros_procesos").text(contador + 1);

                    $(".procesos_activos_a6").text(variableSeleccionada);
                    $('.procesos_activos_a6').css("background-color", colorYVariable);
                    $(".procesos_actovos_a6").css("color","white")
                    $(".casilla_de_numeros_procesos").text(contador + 1);

                    $(".procesos_activos_a7").text(variableSeleccionada);
                    $('.procesos_activos_a7').css("background-color", colorYVariable);
                    $(".procesos_actovos_a7").css("color","white")
                    $(".casilla_de_numeros_procesos").text(contador + 1);

                    $(".procesos_activos_a8").text(variableSeleccionada);
                    $('.procesos_activos_a8').css("background-color", colorYVariable);
                    $(".procesos_actovos_a8").css("color","white")
                    $(".casilla_de_numeros_procesos").text(contador + 1);

                    $(".procesos_activos_a9").text(variableSeleccionada);
                    $('.procesos_activos_a9').css("background-color", colorYVariable);
                    $(".procesos_actovos_a9").css("color","white")
                    $(".casilla_de_numeros_procesos").text(contador + 1);
                   
                    return 
                }if ($("#pagina_3").text()=="") {                
                    $(".procesos_en_espera_a1").text(variableSeleccionada);
                    $('.procesos_en_espera_a1').css("background-color", colorYVariable);
                    $(".procesos_en_espera_a1").css("color","white")
                    return
                }if ($("#pagina_4").text()=="") {                
                    $(".procesos_en_espera_a2").text(variableSeleccionada);
                    $('.procesos_en_espera_a2').css("background-color", colorYVariable);
                    $(".procesos_en_espera_a2").css("color","white")
                    return
                }if ($("#pagina_5").text()=="") {                
                    alert("no hay espacio sufuciete")
                    $('.alerta_sin_espacio').css("background-color", "red");//      alerta_sin_espacio
                    $(".procesos_en_espera_a3").text(variableSeleccionada);
                    $('.procesos_en_espera_a3').css("background-color", colorYVariable);
                    $(".procesos_en_espera_a3").css("color","white")
                    return
                }if ($("#pagina_6").text()=="") {                
                    alert("no hay espacio sufuciete")
                    $('.alerta_sin_espacio').css("background-color", "red");//      alerta_sin_espacio
                    return
                }if ($("#pagina_7").text()=="") {                
                    alert("no hay espacio sufuciete")
                    $('.alerta_sin_espacio').css("background-color", "red");//      alerta_sin_espacio
                    return
                }if ($("#pagina_8").text()=="") {                
                    alert("no hay espacio sufuciete")
                    $('.alerta_sin_espacio').css("background-color", "red");//      alerta_sin_espacio
                    return
                }if ($("#pagina_9").text()=="") {                
                    alert("no hay espacio sufuciete")
                    $('.alerta_sin_espacio').css("background-color", "red");//      alerta_sin_espacio
                    return
                }
            break;
            
        
            
            
        
            default:
                alert("error fatal, llego a default")
                break;
        }


    });













    /*terminar proceso*/
    $('#boton_terminar_proceso').click(function(){ 
        let eleccion_terminar =$("#selec_proceso_para_terminar option:selected").text(); /*esto es para jalar la seleccion del select y alojarlo en una variable*/
        if (eleccion_terminar == "A1") {
            $('.procesos_activos_a1').css("color", "#c7c7c7"); /*esto hace que cambie de color a gris*/
            $('.procesos_activos_a1').css("background-color", "#c7c7c7"); /*esto hace que cambie de background-color a gris*/

            $("#pagina_1").text(" "); 
            $('#pagina_1').css("color", "white")
            $('#pagina_1').css("background-color", "#c7c7c7") 
        }if (eleccion_terminar == "A2") {
            $('.procesos_activos_a2').css("color", "#c7c7c7");
            $('.procesos_activos_a2').css("background-color", "#c7c7c7");

            $("#pagina_2").text(" "); 
            $('#pagina_2').css("color", "white")
            $('#pagina_2').css("background-color", "#c7c7c7") 
        }if (eleccion_terminar == "A3") {
            $('.procesos_activos_a3').css("color", "#c7c7c7");
            $('.procesos_activos_a3').css("background-color", "#c7c7c7");

            $("#pagina_3").text(" "); 
            $('#pagina_3').css("color", "white")
            $('#pagina_3').css("background-color", "#c7c7c7") 
        }if (eleccion_terminar == "A4") {
            $('.procesos_activos_a4').css("color", "#c7c7c7");
            $('.procesos_activos_a4').css("background-color", "#c7c7c7");

            $("#pagina_4").text(" "); 
            $('#pagina_4').css("color", "white")
            $('#pagina_4').css("background-color", "#c7c7c7") 
        }if (eleccion_terminar == "A5") {
            $('.procesos_activos_a5').css("color", "#c7c7c7");
            $('.procesos_activos_a5').css("background-color", "#c7c7c7");

            $("#pagina_5").text(" "); 
            $('#pagina_5').css("color", "white")
            $('#pagina_5').css("background-color", "#c7c7c7") 
        }
    });
    $('#boton_reiniciar').click(function(){  
        /*reseteo de lista de procesos activos*/
        $('.procesos_activos_a1').css("color", "#c7c7c7");
        $('.procesos_activos_a1').css("background-color", "#c7c7c7");

        $('.procesos_activos_a2').css("color", "#c7c7c7");
        $('.procesos_activos_a2').css("background-color", "#c7c7c7");

        $('.procesos_activos_a3').css("color", "#c7c7c7");
        $('.procesos_activos_a3').css("background-color", "#c7c7c7");

        $('.procesos_activos_a4').css("color", "#c7c7c7");
        $('.procesos_activos_a4').css("background-color", "#c7c7c7");

        $('.procesos_activos_a5').css("color", "#c7c7c7");
        $('.procesos_activos_a5').css("background-color", "#c7c7c7");

        /*reseteo de procesos */
        $("#pagina_1").text(" "); 
        $('#pagina_1').css("color", "white")
        $('#pagina_1').css("background-color", "#c7c7c7") 

        $("#pagina_2").text(" "); 
        $('#pagina_2').css("color", "white")
        $('#pagina_2').css("background-color", "#c7c7c7") 

        $("#pagina_3").text(" "); 
        $('#pagina_3').css("color", "white")
        $('#pagina_3').css("background-color", "#c7c7c7") 

        $("#pagina_4").text(" "); 
        $('#pagina_4').css("color", "white")
        $('#pagina_4').css("background-color", "#c7c7c7") 

        $("#pagina_5").text(" "); 
        $('#pagina_5').css("color", "white")
        $('#pagina_5').css("background-color", "#c7c7c7") 

        $("#pagina_6").text(" "); 
        $('#pagina_6').css("color", "white")
        $('#pagina_6').css("background-color", "#c7c7c7") 

        $("#pagina_7").text(" "); 
        $('#pagina_7').css("color", "white")
        $('#pagina_7').css("background-color", "#c7c7c7") 

        $("#pagina_8").text(" "); 
        $('#pagina_8').css("color", "white")
        $('#pagina_8').css("background-color", "#c7c7c7") 

        $("#pagina_9").text(" "); 
        $('#pagina_9').css("color", "white")
        $('#pagina_9').css("background-color", "#c7c7c7") 

        /*reseteo de numero de procesos */
        $(".casilla_de_numeros_procesos").text("0");


        $('.alerta_sin_espacio').css("background-color", "transparent");

    });
 });



//es para extraer la eleccion de un select
//$(document).on('change', '#selec_proceso', function(event) {
