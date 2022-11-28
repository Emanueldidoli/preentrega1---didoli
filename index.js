let usuarioConEmail = "ema"
const contrasenia = "a"

const nombre = prompt("Ingrese su nombre")
const usuarioLogin = prompt("Ingrese su usuario")
const contraseniaLogin = prompt("Ingrese su contrasenia")

const Login = (usuarioLogin, contraseniaLogin) =>{
if(usuarioConEmail !== usuarioLogin && contrasenia !== contraseniaLogin){
    alert("SU USUARIO Y CONTRASEÑA SON ERRÓNEOS")   
}else if( usuarioConEmail !== usuarioLogin ) {
    alert("Su usuario es erróneo")
}else if(contrasenia !== contraseniaLogin){
    alert("Su contrasenia es errónea")
}
}

Login(usuarioLogin, contraseniaLogin)

function saludarALosUsuarios ( nombre ) {
    if(usuarioConEmail === usuarioLogin && contrasenia === contraseniaLogin)
    alert(`Bienvenido ${nombre}`)
}

saludarALosUsuarios(nombre)



const validarArroba = (usuarioLogin) =>{
    let arroba = false
for ( let i = 0; i < usuarioLogin.length; i++) {
    if(usuarioLogin[i] === "@"){
    arroba = true;
    }
} if(arroba === false){
    usuarioConEmail = prompt("Ingrese nuevo email")
}
}

validarArroba(usuarioLogin)
