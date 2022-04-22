------------------------------------------------------------------------------------------------------------------------------------
Inicializar el JSON en el backend
------------------------------------------------------------------------------------------------------------------------------------
En una terminal, se hace lo siguiente ( los elementos dentro del JSON son a manera de ejemplo):

comando a utilizar --> npm init

ctrl+C --> salir de la terminal npm

Ejemplo: (D:\DesktopTwo\Estudios\Ingenieria de Sistemas 2022-1\Desarrollo Orientado a Servicios\dservicios\dos_001> npm init)

    Press ^C at any time to quit.
    package name: (dos_001) backenew
    version: (1.0.0) 0.0.1
    description: backend creada el 15 de Febrero del 2022
    entry point: (index.js)
    test command:
    git repository:
    keywords: desarrollo orientado a servicios dos node baken
    author: Luis Felipe Narvaez Gomez
    license: (ISC)
    About to write to D:\DesktopTwo\Estudios\Ingenieria de Sistemas 2022-1\Desarrollo Orientado a Servicios\dservicios\dos_001\package.json:

    {
    "name": "backenew",
    "version": "0.0.1",
    "description": "backend creada el 15 de Febrero del 2022",
    "main": "index.js",
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
    },
    "keywords": [
        "desarrollo",
        "orientado",
        "a",
        "servicios",
        "dos",
        "node",
        "baken"
    ],
    "author": "Luis Felipe Narvaez Gomez",
    "license": "ISC"
    }


    Is this OK? (yes) yes
    PS D:\DesktopTwo\Estudios\Ingenieria de Sistemas 2022-1\Desarrollo Orientado a Servicios\dservicios\dos_001>

------------------------------------------------------------------------------------------------------------------------------------
Folders a utilizar en todo backend
------------------------------------------------------------------------------------------------------------------------------------
src
    configuracion --> setting
    daos
    controladores --> controllers
    middleware
    modelos --> models
    respositorios --> repositories
    rutas --> route
    index.ts
package.json

------------------------------------------------------------------------------------------------------------------------------------
Paquetes a instalar
------------------------------------------------------------------------------------------------------------------------------------
Cuando ya se tienen dentro del package las librerias que se van a utilizar, se puede decir que se instalen con el comando "npm i"

npm i cors --> paquete, sistema de bloqueo para permitir ciertos usuarios
npm i morgan --> paquete, formatea la salida de la terminal, organiza mejor las salidas , entre otras cosas.
npm i express --> paquetete, maneja el motor V8 para hacer backend
npm i jsonwebtoken --> paquete, generador de token de autenticacion para seguridad
npm i pg-promise --> paquete, permite conectar con postgreSQL

En caso de querer desinstalar un paquete --> npm uninstall "nombrePaquete"

types --> facilitan las tareas de cada paquete

npm i @types/cors --save-dev  --> types de cors -- en modo desarrollo para que no esten en la produccion
npm i @types/morgan --save-dev --> types de morgan -- en modo desarrollo para que no esten en la produccion
npm i @types/express --save-dev --> types de express -- en modo desarrollo para que no esten en la produccion
npm i @types/jsonwebtoken --save-dev --> types de jsonwebtoken -- en modo desarrollo para que no esten en la produccion
npm i nodemon --save-dev --> permite montar la aplicacion de manera local

------------------------------------------------------------------------------------------------------------------------------------
Crear scripts propios
------------------------------------------------------------------------------------------------------------------------------------
"Se necesita minimo 2 scripts, uno que permita testear y otro que permita funcionar al proyecto"
Estos nuevos scripts se ponen dentro de la seccion del scripts del "package.json".

"dev": "nodemon build/index.js" --> ejecuta nodemon y contrulle un archivo de salida (por donde entran los los usuarios) llamado index.js
"build": "tsc -w" --> transpila a typescript

------------------------------------------------------------------------------------------------------------------------------------
Transpilacion de typescript
------------------------------------------------------------------------------------------------------------------------------------
comando: tsc --init --> para el proyecto vamos a utilizar typescript, un traductor de Java Enterprise Edition a Java scripts

En caso de no funcionar, debemos confirmar que typescript este instalado en nuestra computadora, para eso en una consola del sistema
escribimos el comando "npm install -g typescript" y luego confirmamos con "tsc -version".

En caso de que no funcione por la terminal de VISUAL STUDIO CODE, podemos abrir la terminal de Windows, 
nos dirigirnos a la carpeta del proyecto y utilizamos nuevamente el comando "tsc --init"

Debera haber creado un archivo llamado "tsconfig.json"

Abrir elarchivo tsconfig.json:
    "target": "es2016",  -->  esta linea para el 15,Feb,2022 debe ser minimo la es2016 para qe el proyecto funcione en todos los navegadores sin problemas (puede ser contraproducente subir mas la version)
    "outDir": "./build", -->  descomentar y dirigir a la carpeta donde queremos que guarde la Transpilacion

------------------------------------------------------------------------------------------------------------------------------------
Oracle --> respositorios --> dao --> controlador --> ruta --> server

crear carpeta database, dentro los create y los dml

HILO DE TRABAJO
--> REPOSITORIOS.sql
--> SERVER
    dominios folder --> var_database.ts
    conexion folder --> funcionesConexion.ts
    conexion folfer --> opcionesConexion.ts

    conexion folder --> conexionBD.ts

---> DAOS  --->  CONTROLLER ---> RUTAS 

---> SERVER 
    api foler --> servidor.ts

--> INDEX.ts


....................................................................... PARTE II ..........................................................................................

------------------------------------------------------------------------------------------------------------------------------------
Cambios en el Nuevo Folder
------------------------------------------------------------------------------------------------------------------------------------
database
    1_ddl_createtable.sql
    2_dml_datos.sql
src
    configuracion
        api
        conexion
            conexionBD.ts
            funcionesConexion.ts --> CTRLC+CTRLV
            opcionesConexion.ts --> CTRLC+CTRLV
        dominios
            var_database.ts
    daos
    controladores
    middleware
    modelos
    respositorios
    rutas
    index.ts
package.json
------------------------------------------------------------------------------------------------------------------------------------
postgreSQL
------------------------------------------------------------------------------------------------------------------------------------

En postgreSQL crear un nuevo usuario (login/group roles) con lasiguiente informacion:
    User: user_node
    Password: 159951
    Privilegios: todos menos la ultima


crear database:
    db_first_node_DOS

Luego ya se añadirira los SQL a la respectiva database

Para poder establecer la conexion con PostgreSQL, podemos crear dentro de dominios el archivo "var_database.ts" donde figurara la configuracion de la conexion

