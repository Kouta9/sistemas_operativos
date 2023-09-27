$(document).ready(function(){
    
    let numeroDeProcesos=Number( $(".casilla_de_numeros_procesos").text())
    let contador = 0;

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
        let eleccion =$("#selec_proceso option:selected").text(); /*esto es para jalar la seleccion del select y alojarlo en una variable*/

        if (eleccion == "A1") {
            $('.procesos_activos_a1').css("background-color", "#631ea7"); /*esto hace que cambie de color a verde*/
            $(".procesos_actovos_a1").css("color","white")

            contador =+1;
            $(".casilla_de_numeros_procesos").text(contador);//no funciona
            alert(contador)                                  //no fucniona

            $("#pagina_1").text("Pagina A1"); //texto en la pagina
            $('#pagina_1').css("color", "white") //color del texto en la pagina
            $('#pagina_1').css("background-color", "#631ea7") // color del fondo de la pagina
            


        }if (eleccion == "A2") {
            $('.procesos_activos_a2').css("background-color", "#2c579b");
            $(".procesos_actovos_a2").css("color","white")
            contador =+1;
            $(".casilla_de_numeros_procesos").text(contador);
            alert(contador)

            $("#pagina_2").text("Pagina A2"); 
            $('#pagina_2').css("color", "white")
            $('#pagina_2').css("background-color", "#2c579b") 

        }if (eleccion == "A3") {
            $('.procesos_activos_a3').css("background-color", "#b3520b");
            $(".procesos_actovos_a3").css("color","white")
            contador =+1;
            $(".casilla_de_numeros_procesos").text(contador);

            $("#pagina_3").text("Pagina A3"); 
            $('#pagina_3').css("color", "white")
            $('#pagina_3').css("background-color", "#b3520b")
            
        }if (eleccion == "A4") {
            $('.procesos_activos_a4').css("background-color", "#e174bb");
            $(".procesos_actovos_a4").css("color","white")
            contador =+1;
            $(".casilla_de_numeros_procesos").text(contador);

            $("#pagina_4").text("Pagina A4"); 
            $('#pagina_4').css("color", "white")
            $('#pagina_4').css("background-color", "#e174bb")

        }if (eleccion == "A5") {
            $('.procesos_activos_a5').css("background-color", "#dcb017");
            $(".procesos_actovos_a5").css("color","white")
            contador =+1;
            $(".casilla_de_numeros_procesos").text(contador);
            $("#pagina_5").text("Pagina A5"); 
            $('#pagina_5').css("color", "white")
            $('#pagina_5').css("background-color", "#dcb017")
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




 });





















 































//es para extraer la eleccion de un select
//$(document).on('change', '#selec_proceso', function(event) {
