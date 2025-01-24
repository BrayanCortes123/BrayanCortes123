# Proyecto: Calculadora de Precios del Café

Este proyecto es una aplicación web interactiva que permite consultar los precios actuales del café, calcular las ganancias según el peso ingresado en kilogramos y un precio por arroba especificado. Además, se conecta con un servidor para obtener información actualizada sobre los precios.

---

## Tecnologías Utilizadas

- **Frontend:** HTML, CSS, JavaScript.
- **Backend:** Node.js con Express.
- **Módulos:**
  - `express` para el servidor web.
  - `cors` para manejo de políticas de CORS.
  - `path` para manejo de rutas de archivos.

---

## Características Principales

### 1. Consulta de Precios Actualizados
- La aplicación realiza una solicitud a un servidor backend que proporciona los precios del café, incluyendo:
  - Precio Interno
  - Pasilla de Finca
  - Bolsa de NY
  - Tasa de Cambio
  - MeCIC

### 2. Cálculo de Ganancias
- El usuario puede ingresar:
  - **Kilogramos** de café.
  - **Precio por arroba** (opcional).
- La aplicación calcula:
  - Arrobas equivalentes (1 arroba = 12.5 kg).
  - Ganancia total según el precio ingresado o el precio interno por defecto.

### 3. Interfaz Amigable
- Diseño intuitivo con botones y modales interactivos.
- Resultados claros y organizados.

---

## Instrucciones para Ejecutar el Proyecto

### 1. Requisitos Previos
- Node.js instalado en tu sistema.

### 2. Instalación
1. Clona el repositorio:
   ```bash
   git clone <URL-del-repositorio>
   cd <nombre-del-repositorio>
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```

### 3. Ejecución
1. Inicia el servidor:
   ```bash
   npm start
   ```
2. Abre tu navegador y accede a:
   ```
   http://localhost:3000
   ```

---

## Estructura del Proyecto

```
<nombre-del-repositorio>/
├── public/
│   ├── index.html
│   ├── styles.css
│   └── script.js
├── index.js
├── server.js
├── README.md
└── package.json
```

---

## API del Backend

### Endpoint: `GET /precio-cafe`
- **Descripción:** Devuelve un JSON con los precios del café.
- **Respuesta Ejemplo:**
  ```json
  {
    "precios": {
      "precioInterno": 304000,
      "pasillaFinca": 120000,
      "bolsaNY": 150,
      "tasaCambio": 4000,
      "meCIC": 305000
    }
  }
  ```

---

## Contribuciones

Las contribuciones son bienvenidas. Por favor, sigue los pasos a continuación:

1. Haz un fork del repositorio.
2. Crea una rama nueva:
   ```bash
   git checkout -b feature/nueva-funcionalidad
   ```
3. Realiza tus cambios y haz un commit:
   ```bash
   git commit -m "Agrega nueva funcionalidad"
   ```
4. Envía un pull request.

---

## Autor

**Brayan Stiven Cortes Castro**

---

## Licencia

Este proyecto está bajo la licencia [MIT](https://opensource.org/licenses/MIT).
