Estos servicios se crearon con las siguientes herramientas:

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


LOS SERVICIOS NO TIENES EL FOLDER "node_modules"

Recordar que cuando se deben instalar los diferentes paquetes de node en cada uno de los servicios, en el IDE respectivo se debe dar el comando:

	npm i