$(function(){
    var condicion=0;
    function random1(min,max) {
        return Math.floor((Math.random()*(max-min))+min);
    }
    
    function random2(min,max) {
        return((Math.random()*(max-min))+min);
    }
    
    var cont=0; 
    $("#boton3").click(function (e) { 
        e.preventDefault();
        agregar()
       
    });

    function calcularEdad(){
        var dia=random1(1,30);
        var mes=random1(1,12);
        var ano=random1(1980,2005);
        if(dia<10){
            dia="0"+dia;
        }
        if(mes<10){
            mes="0"+mes;
        }
        let fechaNacimiento=new Date(ano,mes,dia);
        let ahora=new Date();
        var agnios=ahora.getFullYear()-fechaNacimiento.getFullYear();
        
        return agnios;
    }
    function agregar(){
        cont++;
        var cedula=random1(10000000,9999999999);
        var numeroAletorio1=random2(0,5);
        numeroAletorio1=numeroAletorio1.toFixed(2);
        var numeroAletorio2=random2(0,5);
        numeroAletorio2=numeroAletorio2.toFixed(2);
        var numeroAletorio3=random2(0,5);
        numeroAletorio3=numeroAletorio3.toFixed(2);
        var promedio=parseFloat(numeroAletorio1)+parseFloat(numeroAletorio2)+parseFloat(numeroAletorio3);
        promedio=promedio/3;
        promedio=promedio.toFixed(1);
        var edad=calcularEdad();
        var numeroNombre=random1(1,20);
        let filaNueva='<tr  scope="row" id="'+cont+'"><td>'+cont+'</td><td>'+cedula+' </td><td >Estudiante'+numeroNombre+' </td><td >'+edad+' </td><td> '+numeroAletorio1+'</td><td>'+numeroAletorio2+'</td><td>'+numeroAletorio3+'</td><td>'+promedio+'</td></tr>';
        $("#tabla").append(filaNueva);
    }
    
    $("#btnRecorrer").click(function () {
        $("#tabla tr").each(function (index) {
            var id= $(this).attr('id');
            let promedio=parseFloat($(this).find('td:eq(7)').html());
            let idbusca="#"
            idbusca+=id;
            if(promedio<3){
                $(idbusca).css({"background":"red"})
            }else if(promedio>=3.5){
                $(idbusca).css({"background":"green"})
            
            }
            
        })
       
    });

});

