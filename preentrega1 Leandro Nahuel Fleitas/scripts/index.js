// FUNCIONES PARA VERIFICAR EL INGRESO DE USUARIO, CONTRASEÑA Y CORREO  
function ValidarCorreo(mail) {
    while (mail == " ") {
        mail = prompt("este campo no puede estar vacio");
    }
    return mail;
}
function ValidarUsuario(NombreDeUsuario) {
    while (NombreDeUsuario == " ") {
        NombreDeUsuario = prompt(" este campo no puede estar vacio");
    };
    return NombreDeUsuario;
}
function ValidarContra(clave) {
    while (clave == " ") {
        clave = prompt(" este campo no puede estar vacio");
    }
    return clave;
}
// CREAR EL USARIO Y VALIDAR CORREO 
let correo = prompt("ingrese su correo")
correo = ValidarCorreo(correo);
alert(correo);

let NickName = prompt("ingres su nombre de usuario")
NickName = ValidarUsuario(NickName);
alert(NickName);

let password = prompt("Ingrese una contraseña")
password = ValidarContra(password);
alert(password);
let password1 = prompt("vuelve a ingresar la misma contraseña");

// VALIDAR CONTRASEÑAS
while (password !== password1) {
    password1 = prompt("las contraseñas no coinciden");
}
alert("Contraseñas validadas");

// se consulta si quiere ingresa sesión 
let NickName1;
let correo1;
let password2;
let CantidadDeIntentos = 0;
let inicioDeSesion = Number(prompt("si quiere iniciar sesión 1, en caso contrario ingres 0"));

while (inicioDeSesion !== 1) {
    if (inicioDeSesion == 0) {
        break
    }
    inicioDeSesion = Number(prompt("si quiere iniciar sesión 1, en caso contrario ingres 0"));
}
if (inicioDeSesion == 0) {
    alert("no se pudo iniciar, cargue la pagina y vuelva a intertarlo");
} else {
    NickName1 = prompt("Ingres su usuario")
    NickName1 = ValidarUsuario(NickName1);

    password2 = prompt("ingrese su contraseña")
    password2 = ValidarContra(password2);
    // usuario y contraseña validados
    // cantidad de intento menor a 3 
    while ((password != password2 && CantidadDeIntentos < 3) || (NickName != NickName1 && CantidadDeIntentos < 3)) {
        CantidadDeIntentos++;
        alert(`los datos ingresados son incorrectos. Vuelva a ingresar los datos.
        Intentos disponibles ${3 - CantidadDeIntentos}`);

        //vuelve a ingresar y a validar usuario y contraseña
        NickName1 = prompt("ingrese su usuario")
        NickName1 = ValidarUsuario(NickName1);

        password2 = prompt("ingrese su contraseñas")
        password2 = ValidarContra(password2);
    }
    if (CantidadDeIntentos != 5) {
        alert = ("Sesión iniciada");
        document.write(`Sesion inciada, bienvenido ${NickName}`);
    } else {
        //ingreso y valido correo
        correo1 = prompt("ingrese su correo para reestablecer contraseña");
        correo1 = ValidarCorreo(correo1);
        if (correo === correo1) {
            alert(`Se envio un correo a ${correo1} para reestablecer su contraseña`);
        } else {
            alert = (" No se pudo verificar la dirección del correo");
        }
    }
}