const empleados = [
  {
    nombre: "Kevin",
    apellido: "Malone",
    edad: 30,
  },
  {
    nombre: "Pam",
    apellido: "Beesley",
    edad: 69,
  },
  {
    nombre: "Jim",
    apellido: "Halpert",
    edad: 40,
  },
];

const form = document.querySelector("form");
const table = document.querySelector(".table");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let nuevoEmpleado = {
    nombre: form.name.value,
    apellido: form.lastname.value,
    edad: form.age.value,
  };

  empleados.push(nuevoEmpleado);

  form.reset();
  printEmpleados();
});

printEmpleados = () => {
  table.innerHTML = "";
  empleados.forEach((chabon) => {
    let html = `<div class="table">
<div class="empleado"><span class="name">Nombre: ${chabon.nombre}</span> <span class="apellido">Apellido: ${chabon.apellido}</span> <span class="edad">Edad: ${chabon.edad}</span></div>
</div>`;
    table.innerHTML += html;
  });
};

printEmpleados();
