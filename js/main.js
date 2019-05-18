(function(){
    "use strict";
    var regalo = document.getElementById('regalo');

document.addEventListener('DOMContentLoaded', function(){
        //Campos Datos usuarios
        var nombre = document.getElementById('nombre');
        var apellido = document.getElementById('apellido');
        var email = document.getElementById('email');
        
        //Campos Pases
        var pase_dia = document.getElementById('pase_dia');
        var pase_dosdias = document.getElementById('pase_dosdias');
        var pase_completo = document.getElementById('pase_completo');

        var calcular = document.getElementById('calcular');
        var errorDiv = document.getElementById('error');
        var botonRegistro = document.getElementById('btnRegistro');
        var lista_productos = document.getElementById('lista-productos');
        var suma = document.getElementById('suma-total');

        //  Extras
        
        var camisas = document.getElementById('camisa_evento');
        var etiquetas = document.getElementById('etiquetas');

        calcular.addEventListener('click', calcularMontos);
        pase_dia.addEventListener('blur', mostrarDias);
        pase_dosdias.addEventListener('blur', mostrarDias);
        pase_completo.addEventListener('blur', mostrarDias);
        nombre.addEventListener('blur',validarCampos);
        apellido.addEventListener('blur', validarCampos);
        email.addEventListener('blur', validarMail);


        function validarMail(){
            if(this.value.indexOf("@") > -1){
                errorDiv.style.display= 'none';
                this.style.border = '1px solid #cccccc';
            }
            else{
                errorDiv.style.display = 'block';
                errorDiv.innerHTML = "Debe tener al menos un @";
                this.style.border = "1px solid red";
                errorDiv.style.border = '1px solid red';
            }
        }


        function validarCampos(){
            if(this.value ==''){
                errorDiv.style.display='block';
                errorDiv.innerHTML="Este campo es obligatorio";
                this.style.border = '1px solid red';
                errorDiv.style.border = '2px solid red';
                
            }
            else{
                errorDiv.style.display='none';
                this.style.border= '1px solid #cccccc';
            }
        }


        function calcularMontos(event){
            event.preventDefault();
            if(regalo.value ===''){
                alert("Debes elegir un regalo");
                regalo.focus();
            }
            else{
                var boletosDia = parseInt(pase_dia.value, 10 )|| 0,
                boletos2Dias =parseInt( pase_dosdias.value, 10 )||0,
                boletoCompleto =parseInt( pase_completo.value,10 )||0,
                cantCamisas=parseInt(camisas.value, 10)||0,
                cantEtiquetas = parseInt(etiquetas.value, 10)||0;


                var totalPagar = (boletosDia*30)+ (boletos2Dias*45)+ (boletoCompleto*50) +((cantCamisas*10)*.93) +(cantEtiquetas*2);
                var listadoProductos = [];

                if(boletosDia >=1){
                    listadoProductos.push(boletosDia+ ' Pases por Día');
                }
                if(boletos2Dias >=1){
                    listadoProductos.push(boletos2Dias+ ' Pases por 2 Días');
                }
                if(boletoCompleto >=1 ){
                    listadoProductos.push(boletoCompleto+ ' Pases Completos');
                }
                if(cantCamisas >=1){
                    listadoProductos.push(cantCamisas+ ' Camisas');
                }
                if(cantEtiquetas >=1){
                    listadoProductos.push(cantEtiquetas+ ' Etiquetas');
                }
                lista_productos.style.display = "block";
                lista_productos.innerHTML = '';
                for(var i = 0; i < listadoProductos.length; i++){
                    lista_productos.innerHTML += listadoProductos[i] + '<br/>';            
                }
                suma.innerHTML="$"+ totalPagar.toFixed(2);

            }
            

        }

         function mostrarDias(){
            var boletosDia = parseInt(pase_dia.value, 10 )|| 0,
                boletos2Dias =parseInt( pase_dosdias.value, 10 )||0,
                boletoCompleto =parseInt( pase_completo.value,10 )||0;
            var diasElegidos =[];
            if(boletosDia >0){
                diasElegidos.push('viernes');
            }
            if(boletos2Dias >0){
                diasElegidos.push('viernes', 'sabado');
            }
            if(boletoCompleto >0){
                diasElegidos.push('viernes','sabado', 'domingo');
            }
            for(var i = 0; i< diasElegidos.length; i++){
                document.getElementById(diasElegidos[i]).style.display='block';
            }
         
            }













    });//Dom Content Loaded
})()


$(function() {

    var windowHeight =$(window).height();
    var barraAltura = $('.barra').innerHeight();


    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if(scroll > windowHeight){
            $('.barra').addClass('fixed');
            $('body').css({'margin-top':barraAltura+'px' });
        }
        else{
            $('.barra').removeClass('fixed');
            $('body').css({'margin-top': '0px' });
        }
    });

    $('.programa-evento .info-curso:first').show();
    $('.menu-programa a:first').addClass('activo');
    $('.menu-programa a').on('click', function() {

        $('.menu-programa a').removeClass('activo');
        $(this).addClass('activo');
        $('.ocultar').hide();
        var enlace = $(this).attr('href');
        $(enlace).fadeIn(1000);
        return false;
    });


    var resumenLista = $('.resumen-evento');
    if(resumenLista.length >0){
        $('.resumen-evento').waypoint(function(){
            $('.resumen-evento li:nth-child(1) p').animateNumber({number : 6}, 1600);
            $('.resumen-evento li:nth-child(2) p').animateNumber({number : 15}, 1600);
            $('.resumen-evento li:nth-child(3) p').animateNumber({number : 8}, 1600);
            $('.resumen-evento li:nth-child(4) p').animateNumber({number : 10}, 1600);
        }, {
            offset: '50%'
        });
    }
 





    $('.menu-movil').on('click',function(){
        $('.navegacion-principal').slideToggle();
    });



    $('.cuenta-regresiva').countdown('2019/08/16 09:00:00', function(event){
        $('#dias').html(event.strftime('%D'));
        $('#horas').html(event.strftime('%H'));
        $('#minutos').html(event.strftime('%M'));
        $('#segundos').html(event.strftime('%S'));
    });

    

});