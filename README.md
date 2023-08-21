# Biblioteca216GScript

Este repositorio contiene el código de Google Apps Script (GAS) responsable de sincronizar en tiempo real la base de datos de Google Sheet de nuestra biblioteca con nuestro backend (DB) en Supabase.

## Configuración

1. Abre tu Google Sheet.
2. Ve a Extensiones > Apps Script.
3. Copia y pega el contenido de `main.gs`, `api.gs` y `helpers.gs` en el editor de scripts.
4. Guarda y ejecuta las funciones según lo requieras.

## Archivos

- `main.gs`: Punto de entrada principal, contiene funcionalidades clave como el disparador `onEdit`.
- `api.gs`: Funciones para comunicarse con nuestro backend externo.
- `helpers.gs`: Funciones auxiliares para manejar datos.
