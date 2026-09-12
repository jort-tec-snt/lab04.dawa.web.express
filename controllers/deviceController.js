// Base de datos temporal en memoria
const devices = [];

const index = (req, res) => {
  res.render("devices", {
    title: "Dispositivos IoT",
    devices
  });
};

const save = (req, res) => {
  const {
    nombre,
    categoria,
    fabricante,
    protocolo,
    estado,
    precio
  } = req.body;

  devices.push({
    nombre,
    categoria,
    fabricante,
    protocolo,
    estado,
    precio
  });

  console.log("Nuevo dispositivo registrado:");
  console.log({
    nombre,
    categoria,
    fabricante,
    protocolo,
    estado,
    precio
  });

  res.redirect("/devices");
};

module.exports = {
  index,
  save
};