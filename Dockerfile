# Paso 1: Especifica la imagen base
FROM node:16-alpine

# Paso 2: Establece el directorio de trabajo
WORKDIR /app

# Paso 3: Copia el archivo package.json y package-lock.json (si existe)
COPY package*.json ./

# Paso 4: Instala las dependencias
RUN npm install

# Paso 5: Copia los archivos del proyecto
COPY . .

# Paso 6: Expone el puerto 3000
EXPOSE 5173

# Paso 7: Comando para iniciar la aplicación
CMD ["npm", "run", "dev"]