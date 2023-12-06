

	var entradaTarea = document.getElementById("entradaTarea");
	
	var listaTareas = document.getElementById("listaTareas");


function BotonAgregarTareas() 
{

  var textoTarea = entradaTarea.value;


  if (textoTarea !== "") {
    var elementoTarea = document.createElement("li");
    elementoTarea.textContent = textoTarea;

    var botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.classList.add("delete-button");
    elementoTarea.appendChild(botonEliminar);

    botonEliminar.addEventListener("click", function () {elementoTarea.remove();});

    listaTareas.appendChild(elementoTarea);

    entradaTarea.value = "";
  }
}