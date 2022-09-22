----------------------------------------------------------------------------------------------------------------------------------
Ventana 1 New Project
----------------------------------------------------------------------------------------------------------------------------------
En la Barra Lateral izquierda de la ventana NewProject debe estar seleccionado Spring Initializr

Server URL: start.spring.io
Name: aqui va el nombre del proyecto
Location: carpeta donde va a ir
Language: Java
Type: Maven
Group: com.usta
Artifact: el mismo que "nombre"
Package name: com.usta."nombre(en minusculas)"
Project SDK: devende de la version de Java
Java: la version maxima que aparesca en CMD o Power Shell tras el comando "java --version"
Packaging: War

----------------------------------------------------------------------------------------------------------------------------------
Ventana 2 New Project
---------------------------------------------------------------------------------------------------------------------------------

Spring Boot 2.6.4

Download pre-built shared indexes for JDK and Maven libraries --> Enable

Se deben buscar y seleccionar en la seccion "Dependencies" las siguientes:

	spring web
	spring Data JPA
	PostgreSQL Driver
	spring security
	lombok

Una vez seleccionadas apareceran las tres en "Added dependencies"

----------------------------------------------------------------------------------------------------------------------------------
Ventana General IntelliJ
----------------------------------------------------------------------------------------------------------------------------------
En la esquina inferior derecha aparecera un mensaje con barras de carga de la construccion del proyecto.

En la parte superior, esquina derecha, se encuentra un icono de martillo en verde, este se llama Build Project, 
tambien se puede invocar con CTRL + F9.

Con la seleccion en la carpeta raiz del projecto, la primera del arbol de archivos del panel lateral izquierdo de la ventana
dar clic en el martillo o en su defecto CTRL + F9 para construir nuevamente el projecto con sus dependencias, desacartando
asi cualquier complicacion de errores asociados a la descarga y contruccion de dependencias.

----------------------------------------------------------------------------------------------------------------------------------

aplicattions.properties --> conexion con la base de datos
pom --> el package json de los servicios desarrollados en node

----------------------------------------------------------------------------------------------------------------------------------

pom --> RightClic, Maven, Download Sources
or
sobre el proyecto, icono Build Project (Ctrl + F9)
----------------------------------------------------------------------------------------------------------------------------------

..........................

Usuario Nuevo en PostgreSQL
............................

Name: user_spring
password: 159951
privilegios: todos menos "can initiate streaming replication and backups"




----------------------------------------------------------------------------------------------------------------------------------
conectar con la base de datos
----------------------------------------------------------------------------------------------------------------------------------

En la ventana general de IntelliJ, en la parte lateral de la pantalla hay una columna delgada en donde tiene una pestaña denominada "Database"
Daremos clic en esta pestaña y se desplegara una ventana, alli daremos clic nuevamente en agregar, marcado por un icno de "+", en el 
menu emergente daremos clic en "data sources" y seleccionaremos la opcion de la base de datos que vamos a conectar en este caso "postgreSQL".

--> se despliega una ventana para configurar la base de datos

Host: localhost
Port: 5432
User: user_spring
Password: 159951
Database: test_spring

probar coneccion en el boton inferior "test connection"

--> se desplegara una seccion/ventana donde podemos hacer consultas, podemos cerrar esta consola por el momento

----------------------------------------------------------------------------------------------------------------------------------
Crear Carpetas
----------------------------------------------------------------------------------------------------------------------------------

En el arbol de archivos creamos las siguientes carpetas.

[RAIZ] >> src >> main >> java >> resources >>application.properties ( aqui configuraremos la conexion  )

[RAIZ] >> src >> main >> java >> com.nombrecarpeta.nombreproyecto >> model (Aqui van los entitys)
[RAIZ] >> src >> main >> java >> com.nombrecarpeta.nombreproyecto >> repository (Aqui van los repos)
[RAIZ] >> src >> main >> java >> com.nombrecarpeta.nombreproyecto >> service ( el ..Dao?)
[RAIZ] >> src >> main >> java >> com.nombrecarpeta.nombreproyecto >> rest ( el Controller?)

---------------------------------------------------------------------------------------------------------------------------------
Aplicacion con Json web token
---------------------------------------------------------------------------------------------------------------------------------
NOTA: en caso de crear un proyecto de prueba de seguridad pero el  mismo no este anclado a una base de datos, solo se 
deben instalar las dependencias de spring security, lombok, spring web.
Sin tener mapeado la parte de seguridad se puede acceder a un apartado web en la parte http://localhost:8080/login, las credenciales
estan en la seccion de ejecucion de la terminal del editor de texto. ( el usuario por defecto es user )

Para un proyecto con seguridad se deben crear las siguientes carpetas

	[RAIZ] >> src >> main >> java >> com.nombrecarpeta.nombreproyecto >> config
	[RAIZ] >> src >> main >> java >> com.nombrecarpeta.nombreproyecto >> controller
	[RAIZ] >> src >> main >> java >> com.nombrecarpeta.nombreproyecto >> filter
	[RAIZ] >> src >> main >> java >> com.nombrecarpeta.nombreproyecto >> model
	[RAIZ] >> src >> main >> java >> com.nombrecarpeta.nombreproyecto >> service
	[RAIZ] >> src >> main >> java >> com.nombrecarpeta.nombreproyecto >> utility

crear un newfile 

	[RAIZ] >> src >> main >> java >> resources >> application.yml

crear un newfile

	[RAIZ] >> src >> main >> java >> com.nombrecarpeta.nombreproyecto >> config >> SecurityConfiguration.java

crear un newfile

	[RAIZ] >> src >> main >> java >> com.nombrecarpeta.nombreproyecto >> service >> UserService.java

crear un newfile

	[RAIZ] >> src >> main >> java >> com.nombrecarpeta.nombreproyecto >> controller >> HomeController.java

crear un newfile
		[RAIZ] >> src >> main >> java >> com.nombrecarpeta.nombreproyecto >> utility >> JWTUtility.java

crear un newfile

	[RAIZ] >> src >> main >> java >> com.nombrecarpeta.nombreproyecto >> model >> JwtRequest.java
		[RAIZ] >> src >> main >> java >> com.nombrecarpeta.nombreproyecto >> model >> JwtResponse.java

crear un newfile

	[RAIZ] >> src >> main >> java >> com.nombrecarpeta.nombreproyecto >> filter >> JwtFilter.java

----------------------------------------------------------------------------------------------------------------------------------
Metodo de trabajo
----------------------------------------------------------------------------------------------------------------------------------

application.properties
database
poner los datos de los DML y DDL en a base de datos
Entitys
Repositorios
Servicios
Rest

probar servicios en postman o insomnio o un navegador

configurar aplication.yml

configurar UserService.java

configurar SecurityConfiguracion.java

configurar HomeController.java

configurar [RAIZ] << src >> test >>java >> com.usta.nombreproyecto >> NombreProyectoAplication.java

agregar en pom

	<dependency>
            <groupId>javax.xml.bind</groupId>
            <artifactId>jaxb-api</artifactId>
        </dependency>
        <dependency>
            <groupId>io.jsonwebtoken</groupId>
            <artifactId>jjwt</artifactId>
            <version>0.9.1</version>
        </dependency>

[CTRL]+[Mayus]+[O]

configurar JWTUtility.java

configurar JwtRequest.java y JwtResponse.java

configurar JwtFilter.java

-------------------------------------
JASON WEB TOKEN: implementar una tabla de usuarios, esta esta por el momento aislada a la base de datos consecuente 
en la que se este trabajando.

CREATE TABLE usuario(
    id_usuario SERIAL NOT NULL,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(50) NOT NULL,
    estado BOOLEAN NOT NULL,
    CONSTRAINT PK_USUARIO PRIMARY KEY (id_usuario)
);
ALTER TABLE usuario ADD CONSTRAINT UQ_user_username UNIQUE (username);

--> Revisar el pom y agregar si no esta

	<dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-data-jpa</artifactId>
        </dependency>
        <dependency>
            <groupId>org.postgresql</groupId>
            <artifactId>postgresql</artifactId>
            <scope>runtime</scope>
            <!--<version>42.3.3</version>-->
        </dependency>

--> CTRL + Mayus + O  Recarga las dependecias nuevas agragadas del pom

--> revisar la configuracion del application.properties
--> [RAIZ] >> src >> main >> java >> com.nombrecarpeta.nombreproyecto >> entity
--> [RAIZ] >> src >> main >> java >> com.nombrecarpeta.nombreproyecto >> entity >> UsuarioEntity.java

--> mover las entidades de las bases de datos a la carpeta entidad y reconfigurar rutas ( normalmente lo hace el mismo IDE )

--> configurar UsuarioEntity.java

--> Repositorios
Servicios ( reconfigurar User Service )
Rest --- noooo