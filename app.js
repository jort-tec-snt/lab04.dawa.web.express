const express = require("express");
const path = require("path");

const app = express();

// Configuración del motor de vistas
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Archivos estáticos
app.use(express.static(path.join(__dirname, "public")));

// Procesar formularios
app.use(express.urlencoded({ extended: true }));

// Rutas principales
const mainRoutes = require("./routes/mainRoutes");
app.use("/", mainRoutes);

// Rutas de dispositivos IoT
const deviceRoutes = require("./routes/deviceRoutes");
app.use("/devices", deviceRoutes);

// Middleware 404
app.use((req, res) => {
  res.status(404).render("notFound", {
    url: req.originalUrl
  });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});