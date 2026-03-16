# Econiqo Landing Web

Landing page de **Econiqo - Finanzas personales**, construida con React + Vite.

## Requisitos

- Node.js 18+
- npm 9+

## Desarrollo local

1. Instala dependencias:
   - `npm install`
2. Ejecuta en modo desarrollo:
   - `npm run dev`
3. Abre:
   - `http://localhost:5173`

## Build de producción

- `npm run build`

El resultado queda en la carpeta `dist/`.

## Ejecutar con Docker

### Build de imagen

- `docker build -t econiqo-landing .`

### Ejecutar contenedor

- `docker run -d --name econiqo-landing -p 8080:80 econiqo-landing`

Abrir en navegador:
- `http://localhost:8080`

## Estructura

- `src/` → componentes y estilos
- `public/assets/` → imágenes y recursos estáticos
- `dist/` → build final
