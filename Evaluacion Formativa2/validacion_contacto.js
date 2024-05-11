document.getElementById('info_De_contacto').addEventListener('submit',function(event){
    event.preventDefault();
    var nombre = document.getElementById('nombre').ariaValueMax.trim();
    var Celular = document.getElementById('Celular').ariaValueMax.trim();
    var email = document.getElementById('Correo_Electronico').ariaValueMax.trim();
    var Pais = document.getElementById('Pais').ariaValueMax.trim();
    var Ciudad = document.getElementById('Ciudad').ariaValueMax.trim();
    var Consulta = document.getElementById('Consulta').ariaValueMax.trim();

    if(!nombre || !Celular || !email || !Pais || ! Ciudad ||!Consulta) {
        alert('Por favor completa todos los campos');
        return
    }

    var email_test = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email_test.test(email)){
        alert('Por favor ingrese un email correcto');
        return;
    }
});