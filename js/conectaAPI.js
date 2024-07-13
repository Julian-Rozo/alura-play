async function listaVideos(){
    const conexion = await fetch("https://my-json-server.typicode.com/Julian-Rozo/alura-play-api/videos",{
        method:"GET",
        headers:{
        "Content-type":"application/json",
        }
    });
    
    const conexionConvertida= await conexion.json();
    return conexionConvertida;
}

async function crearVideo(titulo,descripcion,url,imagen){
    const conexion= await fetch("https://my-json-server.typicode.com/Julian-Rozo/alura-play-api/videos",{
    method:"POST",
    headers:{ "Content-type":"application/json"},
    body:JSON.stringify({
        titulo:titulo,
        descripcion:`${descripcion} mil visualizaciones`,
        url:url,
        imagen:imagen
    })
    })

    const conexionConvertida = await conexion.json();

    if(!conexion.ok) {
        throw new Error("Ha ocurrido un error al enviar el vídeo")
    }

    return conexionConvertida;
}

async function buscarVideos (palabraClave) {
    const conexion = await fetch (`https://my-json-server.typicode.com/Julian-Rozo/alura-play-api/videos?q=${palabraClave}`);
    const conexionData = conexion.json();

    return conexionData
}


export const conectaAPI={
    listaVideos, crearVideo, buscarVideos
}
