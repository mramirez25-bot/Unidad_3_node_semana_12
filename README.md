# Unidad_3_node_semana_12

# 1.- Crear el proyecto en node
    Crear un proyecto con nodeJS con el siguiente comando en la terminal
```
    npm init -y
```

# 2.- Instalar Express
    Realizar la instalacion de un paquete de desarrollo:
    npm i express

# 3.- Crearestructura de carpetaspara el proyecto:
 -Primero definimos la carpeta madre(src)
 -Crear el Main de la aplicación, que es el app.js
 -Creamos dos carpetas, una es para el ruter(definir ruta)
y la otra es para los middleware(puente)
    src/
         ----app.js <- Este es el main de la aplicación
    ----routers/
         ----users.js
    ----middlewares/
         ----logger.js

# 4.- Creación de logger.js
 -Creamos el puentes de la aplicación.

    logger.js

# 5.- Creación de una ruta
 -Crearemos un usuario con datos parseados(meterlos a la mala) en la ruta. La ruta la usaremos para manejar las URL.

    users.js

# 6.- Creación del Main
 -Definimos el cerebro de la aplicación
 
    app.js
# 7.- 


# 8.-


# 9.-



# 10.- Instalacion de NodeMon:



# 11.- Cambiamos el metodo de levantar el servidor:
Ahora estamos ejecutando un Script, esto es gracias a 'nodemon'

npm run dev

# 12.- TAREA CON 1 DECIMA:
Crear un router llamado 
personajes_de_marvel_que_no_salen_en_peliculas_de_marvel.js, 
y crear su ruta respectiva
en el app.js, junto con un array con un 4 valores que
contenga {id, nombre, poder, edad_relativo}