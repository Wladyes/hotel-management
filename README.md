# Sistema de Gestión de Reservas de Hotel

Este proyecto es una aplicación web desarrollada con **React** y **TypeScript** que simula un sistema básico de gestión de reservas hoteleras. Permite la administración de clientes, habitaciones y reservas, ofreciendo una experiencia interactiva y amigable para el usuario.

## Tabla de Contenidos

- [Características](#características)
- [Instalación](#instalación)
- [Uso](#uso)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Contribuciones](#contribuciones)

## Características

- **Gestión de Clientes**: Crear, editar y eliminar clientes.
- **Gestión de Habitaciones**: Crear, editar y eliminar habitaciones.
- **Gestión de Reservas**:
  - Crear nuevas reservas asociando clientes y habitaciones disponibles.
  - Validación para evitar solapamientos de fechas en las reservas.
  - Cancelación de reservas existentes.
- **Persistencia de Datos**: Almacenamiento y recuperación de información utilizando `localStorage`.
- **Interfaz Intuitiva**:
  - Navegación fluida utilizando `react-router-dom`.
  - Diseño responsivo con un fondo translúcido que permite visualizar el wallpaper.
  - Menú de navegación para acceder fácilmente a las diferentes secciones.

## Instalación

Sigue estos pasos para ejecutar el proyecto en tu entorno local:

1. **Clona el repositorio**:

   ```bash
   git clone https://github.com/tu-usuario/nombre-del-repositorio.git
   ```

2. **Navega al directorio del proyecto**:

   ```bash
   cd nombre-del-repositorio
   ```

3. **Instala las dependencias**:

   ```bash
   npm install
   ```

4. **Inicia la aplicación**:

   ```bash
   npm run dev
   ```

5. **Abre tu navegador web** y visita `http://localhost:......` para ver la aplicación en funcionamiento.

## Uso

- **Página de Inicio**:
  - Introducción al sistema y guía para utilizar el menú de navegación.
- **Clientes**:
  - Añade nuevos clientes mediante un formulario.
  - Edita información de clientes existentes.
  - Elimina clientes según sea necesario.
- **Habitaciones**:
  - Crea habitaciones especificando tipo y precio.
  - Modifica detalles de habitaciones existentes.
  - Elimina habitaciones del sistema.
- **Reservas**:
  - Crea reservas seleccionando un cliente y una o varias habitaciones.
  - Las fechas de las reservas se validan para evitar conflictos.
  - Cancela reservas si el cliente lo solicita.

## Estructura del Proyecto

```
├── src
│   ├── components
│   │   ├── ClienteForm.tsx
│   │   ├── HabitacionForm.tsx
│   │   ├── ReservaForm.tsx
│   │   ├── ListaClientes.tsx
│   │   ├── ListaHabitaciones.tsx
│   │   └── ListaReservas.tsx
│   ├── pages
│   │   ├── HomePage.tsx
│   │   ├── ClientesPage.tsx
│   │   ├── HabitacionesPage.tsx
│   │   └── ReservasPage.tsx
│   ├── types
│   │   ├── Cliente.ts
│   │   ├── Habitacion.ts
│   │   └── Reserva.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── public
│   └── assets
│       └── images
│           ├── logo.png
│           └── background.jpg
├── package.json
├── tsconfig.json
└── README.md
```

## Tecnologías Utilizadas

- **React**: Librería para construir interfaces de usuario interactivas.
- **TypeScript**: Superset de JavaScript que añade tipado estático al lenguaje.
- **Vite**: Herramienta para el desarrollo rápido de aplicaciones web.
- **React Router DOM**: Manejo de rutas y navegación en la aplicación.
- **CSS3**: Estilos y diseño responsivo.
- **localStorage**: Almacenamiento de datos en el navegador para persistencia.

## Contribuciones

- Wladymir Escobar  L00409170 gwescobar@espe.edu.ec
- Sandy Mariño L00409136 sjmarino1@espe.edu.ec
- Margarita Fajardo L00415848 mcfajardo1@espe.edu.ec
