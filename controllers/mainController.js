const home = (req, res) => {
  res.render("home", { title: "Inicio" });
};

const about = (req, res) => {
  res.render("about", { title: "Acerca de" });
};

const contact = (req, res) => {
  res.render("contact", { title: "Contacto" });
};

const admin = (req, res) => {
  res.render("admin", { title: "Administración" });
};

module.exports = {
  home,
  about,
  contact,
  admin
};