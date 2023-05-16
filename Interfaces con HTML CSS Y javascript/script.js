// Codigo del Trello

let root = document.getElementById("root");


class todoList{
    constructor(place, title = "to-do list"){

        this.place = place;
        this.title = title;
        this.cardArray = [];

        this.render();
    }

    addToDo(){
        let text = this.input.value;
        this.cardArray.push(new Card(text, this.div, this));
    }

    render(){
        this.createToDoListElement();
        this.place.append(this.todoListElement);
    }

    createToDoListElement() {
        // Create elements
        this.h2 = document.createElement('h2');
        this.h2.innerText = this.title;
        this.input = document.createElement('input');
        this.input.classList.add('comment');
        this.button = document.createElement('button');
        this.button.innerText = 'Define tu proyecto';
        this.button.classList.add('btn', 'btn-primary');
        this.button.id = 'to-do-list-button';
        this.div = document.createElement('div');
        this.todoListElement = document.createElement('div');
      
        // Add event listener to the button
        this.button.addEventListener('click', () => {
          // Display the form
          this.displayForm();
        });
      
        // Append elements to the todoListElement div
        this.todoListElement.appendChild(this.h2);
        this.todoListElement.appendChild(this.button);
        this.todoListElement.appendChild(this.div);
        this.todoListElement.classList.add('todoList');
      
        // Append the todoListElement to the document body
        document.body.appendChild(this.todoListElement);
      }
      
      displayForm() {
        // Create the form elements
        const form = document.createElement('form');
        const formContainer = document.createElement('div');
        formContainer.classList.add('form-container');
        const creadorInput = document.createElement('input');
        creadorInput.type = 'text';
        creadorInput.placeholder = 'Creador del proyecto';
        creadorInput.required = true;
        const encargadoInput = document.createElement('input');
        encargadoInput.type = 'text';
        encargadoInput.placeholder = 'Encargado del proyecto';
        encargadoInput.required = true;
        const descriptionInput = document.createElement('textarea');
        descriptionInput.placeholder = 'Descripción del proyecto';
        descriptionInput.required = true;
        const areaDestinadaSelect = document.createElement('select');
        const finalidadTextarea = document.createElement('textarea');
        finalidadTextarea.placeholder = 'Finalidad del proyecto';
        const presupuestoInput = document.createElement('input');
        presupuestoInput.type = 'number';
        presupuestoInput.placeholder = 'Presupuesto estimado';
        const fechaInicioInput = document.createElement('input');
        fechaInicioInput.type = 'date';
        fechaInicioInput.placeholder = 'Fecha de inicio';
        const submitContainer = document.createElement('div');
        const approvedButton = document.createElement('button');
        approvedButton.type = 'submit';
        approvedButton.innerText = 'Aprobado';
        approvedButton.classList.add('btn', 'boton-aprobado', 'mr-2');
        const disapprovedButton = document.createElement('button');
        disapprovedButton.type = 'submit';
        disapprovedButton.innerText = 'Desaprobado';
        disapprovedButton.classList.add('btn', 'boton-desaprobado');
      
        // Append form elements to the form container
        formContainer.appendChild(creadorInput);
        formContainer.appendChild(encargadoInput);
        formContainer.appendChild(descriptionInput);
        formContainer.appendChild(areaDestinadaSelect);
        formContainer.appendChild(finalidadTextarea);
        formContainer.appendChild(presupuestoInput);
        formContainer.appendChild(fechaInicioInput);
        submitContainer.appendChild(approvedButton);
        submitContainer.appendChild(disapprovedButton);
        formContainer.appendChild(submitContainer);
      
        // Append the form container to the form
        form.appendChild(formContainer);
      
        // Append the form to the div element
        this.div.appendChild(form);
      }
}


//-------------main------------

let addTodoListInput = document.getElementById("addTodoListInput");
let addTodoListButton = document.getElementById("addTodoListButton");

addTodoListButton.addEventListener('click',()=>{
   if ( addTodoListInput.value.trim() != ""){
    new todoList(root, addTodoListInput.value);
    addTodoListInput.value = "";
   }
});



// let todoList1 = new todoList(root);
// let todoList2 = new todoList(root);
// let todoList3 = new todoList(root);



todoList1.input.value = "asdasds";
todoList1.addToDo();

// Fin del codigo del trello

// Codigo para cambiar el color al ocultar el menu

document.getElementById('mobile-collapse').addEventListener('click', function() {
    document.getElementsByClassName('navbar-logo')[0].classList.toggle('change-color');
  });