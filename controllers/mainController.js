// "Base de datos" temporal en memoria
const messages = [];

const home = (req, res) => {
  res.render("home", { title: "Inicio" });
};

const about = (req, res) => {
  res.render("about", { title: "Acerca de" });
};

const contact = (req, res) => {
  res.render("contact", { title: "Contacto" });
};

const saveContact = (req, res) => {
  const { nombre, email, mensaje } = req.body;

  // Guardar mensaje en memoria
  messages.push({
    nombre,
    email,
    mensaje
  });

  console.log("Nuevo mensaje almacenado:");
  console.log("Nombre:", nombre);
  console.log("Correo:", email);
  console.log("Mensaje:", mensaje);

  // Después de guardar, mostrar panel administrativo
  res.redirect("/admin");
};

const admin = (req, res) => {
  res.render("admin", {
    title: "Administración",
    messages
  });
};

module.exports = {
  home,
  about,
  contact,
  saveContact,
  admin
};