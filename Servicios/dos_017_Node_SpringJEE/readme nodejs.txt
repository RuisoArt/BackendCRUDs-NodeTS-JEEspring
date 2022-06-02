Software a tener en cuenta antes de comenzar a hacer servicios con NodeJs.
------------------------------------------------------------------------------------------------------------------------------------

    PROGRAMAS NECESARIOS:

        NodeJs: https://nodejs.org/es/
        Visual Studio Code IDE: https://code.visualstudio.com/
        Atom IDE: https://atom.io/
        PostgreSQL 14: https://www.enterprisedb.com/downloads/postgres-postgresql-downloads
        Java JDK 17: https://www.oracle.com/java/technologies/downloads/#jdk17-windows

    HERRAMIENTAS DE INSTALACION GLOBAL

        Angular: https://github.com/angular/angular-cli    $ npm install -g @angular/cli
        type script: https://github.com/Microsoft/TypeScript  $ npm install -g typescript
        mysql: https://github.com/mysqljs/mysql    $ npm install mysql
        nodemon: https://github.com/remy/nodemon   $ npm install -g nodemon   $ npm install --save-dev nodemon --> ESTO ES EN CADA SERVICIO

    HERRAMIENTAS DE INSTALACION LOCAL (Se instala en cada uno de los servicios)

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

    EXTENCIONES VISUAL STUDIO CODE (Las que yo utilizo):

        Docker
        Angular 10 Snippets - TypeScript, Html, Angular Material, ngRx, RxJS & Fl
        Angular Essentials (Version 13)
        Angular Language Service
        Angular Schematics
        Angular Snippets (Version 13)
        Auto Import
        EditorConfig for VS Code
        ESLint
        Material Icon Theme
        npm npm support for VS Code
        npm npm commands for VSCode
        Peacock
        Prettier - Code formatter
        Tabnine AI
        vscode-icons
        Winter is Coming Theme

    LOS SERVICIOS QUE NO TIENEN EL FOLDER "node_modules"

        Recordar que cuando se deben instalar los diferentes paquetes de node en cada uno de los servicios, en el IDE respectivo se debe dar el comando:

            npm i

------------------------------------------------------------------------------------------------------------------------------------
Inicializar el JSON en el backend
------------------------------------------------------------------------------------------------------------------------------------
        En una terminal, se hace lo siguiente ( los elementos dentro del JSON son a manera de ejemplo):
        comando a utilizar --> npm init

        ctrl+C --> salir de la terminal npm

        Ejemplo: 

        PS D:\WORK\Ingenieria de Sistemas 2022-1\Desarrollo Orientado a Servicios\javaservicios\dos_17\CODE NODEJS> npm init
        This utility will walk you through creating a package.json file.
        It only covers the most common items, and tries to guess sensible defaults.

        See `npm help init` for definitive documentation on these fields
        and exactly what they do.

        Use `npm install <pkg>` afterwards to install a package and
        save it as a dependency in the package.json file.

        Press ^C at any time to quit.
        package name: (code-nodejs) proyectofinal
        version: (1.0.0) 1.0.0
        description: Proyecto final de la materia "Desarrollo Orientado a Servicios".
        entry point: (index.js)
        test command:
        git repository:
        keywords: backend node nodejs servicios dos typescript javascript
        author: Ing. Luis Felipe Narvaez Gomez
        license: (ISC)
        About to write to D:\WORK\Ingenieria de Sistemas 2022-1\Desarrollo Orientado a Servicios\javaservicios\dos_17\CODE NODEJS\package.json:

        {
          "name": "proyectofinal",
          "version": "1.0.0",
          "description": "Proyecto final de la materia \"Desarrollo Orientado a Servicios\".",
          "main": "index.js",
          "scripts": {
            "test": "echo \"Error: no test specified\" && exit 1"
          },
          "keywords": [
            "backend",
            "node",
            "nodejs",
            "servicios",
            "dos",
            "typescript",
            "javascript"
          ],
          "author": "Ing. Luis Felipe Narvaez Gomez",
          "license": "ISC"
        }


        Is this OK? (yes) yes
        PS D:\WORK\Ingenieria de Sistemas 2022-1\Desarrollo Orientado a Servicios\javaservicios\dos_17\CODE NODEJS> 

        ------------------------------------------------------------------------------------------------------------------------------------
        Folders a utilizar en todo backend
        ------------------------------------------------------------------------------------------------------------------------------------
            database
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
Crear scripts propios para TEST y BUILD del servicio
------------------------------------------------------------------------------------------------------------------------------------
        "Se necesita minimo 2 scripts, uno que permita testear y otro que permita funcionar al proyecto"
        Estos nuevos scripts se ponen dentro de la seccion del scripts del "package.json".

        "dev": "nodemon build/index.js" --> ejecuta nodemon y contrulle un archivo de salida (por donde entran los los usuarios) llamado index.js
        "build": "tsc -w" --> transpila a typescript

------------------------------------------------------------------------------------------------------------------------------------
Transpilacion de typescript
------------------------------------------------------------------------------------------------------------------------------------
        comando: tsc --init --> para el proyecto vamos a utilizar typescript, un traductor de Java Enterprise 
        Edition a Java scripts

        En caso de no funcionar, debemos confirmar que typescript este instalado en nuestra computadora, 
        para eso en una consola del sistema escribimos el comando "npm install -g typescript" y luego confirmamos 
        con "tsc -version".

        En caso de que no funcione por la terminal de VISUAL STUDIO CODE, podemos abrir la terminal de Windows, 
        nos dirigirnos a la carpeta del proyecto y utilizamos nuevamente el comando "tsc --init"

        Debera haber creado un archivo llamado "tsconfig.json"

        Abrir el archivo tsconfig.json:
            "target": "es2016",  -->  esta linea para el 15,Feb,2022 debe ser minimo la es2016 para qe el proyecto funcione en todos los navegadores sin problemas (puede ser contraproducente subir mas la version)
            "outDir": "./build", -->  descomentar y dirigir a la carpeta donde queremos que guarde la Transpilacion


        NOTA: bucar algo dentro del texto es CTRL+F en visual studio code
------------------------------------------------------------------------------------------------------------------------------------
Bases de datos y usuarios en PostgreSQL
------------------------------------------------------------------------------------------------------------------------------------
        En PostgreSQL creare un nuevo usuario para trabajar con esta base de datos
        Nuevo usuario (login/group roles) con lasiguiente informacion:

            General
            	name:user_node_spring
            Definition
            	Password: 159951
            Privileges
            	Todos los privilegios en enable
            	excluyendo "can initiate streaming replication and backups"

        En caso de querer utilizar codigo en SQL  seria en un Query Tool:

            CREATE ROLE user_node_spring WITH
            	LOGIN
            	SUPERUSER
            	CREATEDB
            	CREATEROLE
            	INHERIT
            	NOREPLICATION
            	CONNECTION LIMIT -1
            	PASSWORD 'xxxxxx';

        Crear una nueva base de datos "biblioteca"

            General
            	Database: biblioteca_project
            Owner
            	user_node_spring

        En caso de querer utilizar codigo en SQL  seria en un Query Tool:

            CREATE DATABASE biblioteca
                WITH 
                OWNER = user_node_spring
                ENCODING = 'UTF8'
                CONNECTION LIMIT = -1;

------------------------------------------------------------------------------------------------------------------------------------
HILO DE TRABAJO
------------------------------------------------------------------------------------------------------------------------------------

        Oracle --> respositorios --> dao --> controlador --> ruta --> server

        crear carpeta database, dentro los create y los dml

        HILO DE TRABAJO
        --> database CRATE TABLE
        --> dtabase DML INSERT INTO
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

------------------------------------------------------------------------------------------------------------------------------------
Cambios en el Nuevo Folder cuando se quiere implementar Jason web token
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

Para poder establecer la conexion con PostgreSQL, podemos crear dentro de dominios el archivo "var_database.ts" donde figurara la configuracion de la conexion

