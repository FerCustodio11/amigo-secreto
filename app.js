// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// definiendo array
let listaDeAmigos = [];

//funcion añadir amigos a la lista
function agregarAmigo(){
    const nombre = document.getElementById('amigo').value.trim();

    if(nombre === ""){
        alert("Por favor ingresa un nombre valido");
        return;
    }

    listaDeAmigos.push(nombre);
    document.getElementById('amigo').value = "";
    mostrarListaAmigos();

    if (listaDeAmigos.length > 0) {
        document.querySelector('.button-draw').disabled = false;
    }

}

// funcion para mostrar lista de amigos

function mostrarListaAmigos(){
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML ="";

    listaDeAmigos.forEach(function(amigo){
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

//funcion para sortear y mostrar resultado

function sortearAmigo(){
    if (listaDeAmigos.length === 0){
        alert("No hay amigos en la lista para sortear");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
    const amigoSecreto = listaDeAmigos[indiceAleatorio];

    document.getElementById('resultado').innerHTML = `El amigo secretom es: <strong>${amigoSecreto}</strong>`;
}

