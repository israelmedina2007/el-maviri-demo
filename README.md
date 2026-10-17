# El Maviri — Demostración web no oficial

Sitio web costero premium desarrollado con React, TypeScript y Vite. Incluye navegación responsive, menú filtrable/buscable, galería con lightbox, mapa y contacto.

## Ejecutar

Necesitas Node.js 20 o superior.

```bash
npm install
npm run dev
```

Abre la URL que muestre Vite (normalmente http://localhost:5173).

## Compilar

```bash
npm run build
npm run preview
```

El contenido estático de producción se genera en `dist/`. Puedes alojarlo con Nginx o con un panel de despliegue compatible con sitios estáticos.

Ejemplo básico Nginx (ajusta dominio y ruta):

```nginx
server {
  listen 80;
  server_name ejemplo.com www.ejemplo.com;
  root /var/www/el-maviri/dist;
  index index.html;
  location / { try_files $uri $uri/ /index.html; }
}
```

Configura HTTPS con Let's Encrypt y el DNS del dominio antes de usarlo públicamente.

## Personalización

- Menú: `src/data/menu.ts`.
- Teléfono y URL de Maps: `src/App.tsx`.
- Paleta, tipografías y responsive: `src/styles.css`.
- Fotografías: URL de referencia en `src/App.tsx` y `src/data/menu.ts`.

## IMPORTANTE antes de publicar

**Este proyecto es una demostración independiente, no oficial.** No se ha verificado directamente con el restaurante la dirección, teléfono, horario, lista de platillos ni sus ingredientes. Confirmar todo antes de publicarlo como página comercial. Las fotografías remotas son **ilustrativas**, no representan necesariamente platillos ni instalaciones de El Maviri; verificar licencias de uso y sustituirlas por fotografías autorizadas. No se incluyen precios ni reseñas inventadas. No se ha añadido un backend ni se procesan pedidos o reservas. Las imágenes y fuentes remotas requieren conexión a Internet para cargar.
