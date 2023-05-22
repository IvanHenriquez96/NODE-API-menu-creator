const inicio = async (req, res) => {
  res.json({
    mensaje: "IHENRIQUEZ - API CRUD MENÚ CREATOR",

    urls: [
      { path: "GET | /login", desc: "Login y devuelve token" },
      { path: "POST | /register", desc: "Crea un nuevo usuario" },

      { path: "GET | /api/", desc: "Lista todas las tareas" },
      { path: "GET | /api/{id}", desc: "Busca solo una tarea" },
      { path: "POST | /api/", desc: "Crea una nueva tarea" },
      { path: "PATCH | /api/{id}", desc: "Actualiza una tarea" },
      { path: "DELETE | /api/{id}", desc: "Borra una tarea" },
    ],
  });
};
