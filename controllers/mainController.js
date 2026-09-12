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

  console.log("Nuevo mensaje recibido:");
  console.log("Nombre:", nombre);
  console.log("Correo:", email);
  console.log("Mensaje:", mensaje);

  res.redirect("/contact");
};

const admin = (req, res) => {
  res.render("admin", { title: "Administración" });
};

module.exports = {
  home,
  about,
  contact,
  saveContact,
  admin
};