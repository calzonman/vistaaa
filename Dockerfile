# Etapa de compilación
FROM node:16 as build

# Establece el directorio de trabajo
WORKDIR /usr/local/app

# Copia el código fuente a la etapa de compilación
COPY ./ /usr/local/app/

# Instala las dependencias
RUN npm install

# Genera la construcción de la aplicación
RUN npm run build

# Etapa de producción
FROM nginx:latest

# Copia los archivos generados desde la etapa de compilación a la etapa de producción
COPY --from=build /usr/local/app/dist/vista /usr/share/nginx/html

# Copia la configuración de nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Exponer el puerto 80 (por defecto) para la aplicación nginx
EXPOSE 80

