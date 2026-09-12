const express = require("express");
const path = require("path");

const app = express();

// Motor de vistas
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Archivos estáticos
app.use(express.static(path.join(__dirname, "public")));

// Procesar formularios
app.use(express.urlencoded({ extended: true }));

// Rutas
const mainRoutes = require("./routes/mainRoutes");
app.use("/", mainRoutes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});