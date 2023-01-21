var btnencriptar = document.querySelector(".btnencriptar");
    var btndesencriptar = document.querySelector(".btndesencriptar");
    let entrada = document.querySelector(".entrada");
    let btncopiar = document.getElementById("btncopiar");
    let salida = document.querySelector(".salida");      
    let original = ["e","i","a","o","u"];
    let codificado = ["enter","imes","ai","ober","ufat"];
    let vacio = document.querySelector(".vacio");
    var darkmode = document.querySelector(".darkmode");
    let dark = true;
    let body = document.querySelector("*");
    
    function reemplazo(mensaje, primero, segundo){        
        for(let i=0;i <= original.length;i++){
            if (mensaje.includes(primero[i])){
                mensaje = mensaje.replaceAll(primero[i], segundo[i]);
            }            
        }            
        salida.value = mensaje;
        return mensaje;
    }
    function encriptar(){  
        ocultar();               
        mensaje = entrada.value;
        reemplazo(mensaje, original, codificado);                
    }   
    function desencriptar(){
        ocultar();
        mensaje = entrada.value;
        reemplazo(mensaje, codificado, original);          
    }
    function ocultar(){
        btncopiar.style.display = "inline";
        vacio.style.display = "none";
        salida.style.background = "white";         
    }
    function copiar(){
        navigator.clipboard.writeText(salida.value);
       
    }
    function modo(){ 
        var color = [["--main-color","#0A3871","#F3F5FC"],["--main-back","#F3F5FC","#3B3B3B"],["--texto-especial","#495057","#F3F5FC"],["--backdesencriptar","#D8DFE8","#000000"],["--colorencriptar","#EFF1FA","#495057"]];      
        if(dark == true){                  
            dark = false;
            for(let i=0;i < color.length;i++){
                document.documentElement.style.setProperty(color[i][0], color[i][2]);
            }
           
            darkmode.style.backgroundImage = "url(imagenes/light.png)";
            document.querySelector(".logo").src="imagenes/logodark.png";
            salida.style.backgroundImage = "url(imagenes/munecodark.png)";
        }
        else{
            for(let i=0;i < color.length;i++){
                document.documentElement.style.setProperty(color[i][0], color[i][1]);
            }
            darkmode.style.backgroundImage = "url(imagenes/dark.png)";            
            document.querySelector(".logo").src="imagenes/logo.png";
            salida.style.backgroundImage = "url(imagenes/muñeco.png)";
            dark = true;            
        }
    }
    btndesencriptar.onclick = desencriptar;
    btnencriptar.onclick = encriptar;
    btncopiar.onclick = copiar;
    darkmode.onclick = modo;