const { get } = require("mongoose");

const loadInitialTemplate = () => {
  const template = `
  <h1>Usuarios</h1>
  <form id="user-form">
    <div>
      <label>Nombre</label>
      <input name="name" />
    </div>
    <div>
      <label>Apellido</label>
      <input name="lastname" />
    </div>
    <button type="submit">Enviar</button>
  </form>
  <ul id="users-list"></ul>
  `;
  const body = document.getElementsByTagName("body")[0];
  body.innerHTML = template;
};

// const getUsers = async () => {};
const addFormListener = () => {
  const userForm = document.getElementById("user-form");
  userForm.onsubmit = async (e) => {
    e.preventDefault(); // Evita que se recargue la página
    const formData = new FormData(userForm);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
  //   await fetch("/users", {
  //     method: "POST",
  //     body: JSON.stringify(data),
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   });
  //   userForm.reset();
  //   getUsers();

  }
}

window.onload = () => {
  loadInitialTemplate();
  addFormListener();
};
