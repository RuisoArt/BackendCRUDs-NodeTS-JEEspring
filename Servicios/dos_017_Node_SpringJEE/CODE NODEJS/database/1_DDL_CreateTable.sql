-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- Tabla Cliente
CREATE TABLE clientes(
    id_cliente SERIAL NOT NULL,
    identificacion VARCHAR(50) NOT NULL,
    nombre VARCHAR(200) NOT NULL,
    apellido VARCHAR(200) NOT NULL,
    direccion VARCHAR(50) NOT NULL,
    telefono VARCHAR(20) NOT NULL,
    CONSTRAINT PK_CLIENTE PRIMARY KEY (id_cliente)
);
CREATE UNIQUE INDEX INDICE_CLIENTE ON clientes (identificacion);
ALTER TABLE clientes OWNER TO user_node_spring;

-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- Tabla Prestamos
CREATE TABLE prestamos_biblio(
    id_prestamo SERIAL NOT NULL,
    fecha_inicio DATE NOT NULL,
    descripcion VARCHAR(200) NOT NULL,
    id_cliente INT4 NOT NULL,
    CONSTRAINT prestamos PRIMARY KEY (id_prestamo)
);
ALTER TABLE prestamos_biblio OWNER TO user_node_spring;
ALTER TABLE prestamos_biblio ADD CONSTRAINT FK_CLI_PRES FOREIGN KEY (id_cliente)
    REFERENCES clientes (id_cliente)
    ON DELETE RESTRICT
    ON UPDATE CASCADE;

-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- Tabla Editorial
CREATE TABLE editoriales(
    id_editorial SERIAL NOT NULL,
    nombre VARCHAR(200) NOT NULL,
    pais VARCHAR(30) NOT NULL,
    telefono VARCHAR(20) NOT NULL,
    CONSTRAINT PK_EDITORIAL PRIMARY KEY (id_editorial)
);
ALTER TABLE editoriales OWNER TO user_node_spring;

-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- Tabla Libro
CREATE TABLE libros(
    id_libro SERIAL NOT NULL,
    titulo VARCHAR(200) NOT NULL,
    fecha_publicacion DATE NOT NULL,
    codigo INT NOT NULL,
    isbn CHAR(10) NOT NULL,
    id_editorial INT4 NOT NULL,
    CONSTRAINT PK_LIBRO PRIMARY KEY (id_libro)
);
ALTER TABLE libros OWNER TO user_node_spring;
CREATE UNIQUE INDEX INDICE_LIBRO ON libros (codigo);
ALTER TABLE libros ADD CONSTRAINT FK_EDI_LIB FOREIGN KEY (id_editorial)
    REFERENCES editoriales(id_editorial)
    ON DELETE RESTRICT
    ON UPDATE CASCADE;

-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- Tabla Autor
CREATE TABLE autores(
    id_autor SERIAL NOT NULL,
    nombre VARCHAR(200) NOT NULL,
    apellido VARCHAR(200) NOT NULL,
    nacionalidad VARCHAR(200) NOT NULL,
    descripcion VARCHAR(200) NOT NULL,
    CONSTRAINT PK_AUTOR PRIMARY KEY (id_autor)
);
ALTER TABLE autores OWNER TO user_node_spring;

-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- Tabla Detalle_Prestamos
CREATE TABLE detalle_prestamos(
    id_detalle_prestamos SERIAL NOT NULL,
    fecha_devolucion DATE NOT NULL,
    dias_mora INT NOT NULL,
    descripcion VARCHAR(200) NOT NULL,
    fecha_entrega DATE NOT NULL,
    id_prestamo INT4 NOT NULL,
    id_libro INT4 NOT NULL,
    CONSTRAINT PK_DETALLE_PRESTAMO PRIMARY KEY (id_detalle_prestamos)
);
ALTER TABLE detalle_prestamos OWNER TO user_node_spring;
ALTER TABLE detalle_prestamos ADD CONSTRAINT FK_PRES_DEPRES FOREIGN KEY (id_prestamo)
    REFERENCES prestamos_biblio (id_prestamo)
    ON DELETE RESTRICT
    ON UPDATE CASCADE;
ALTER TABLE detalle_prestamos ADD CONSTRAINT FK_LIB_DEPRES FOREIGN KEY (id_libro)
    REFERENCES libros (id_libro)
    ON DELETE RESTRICT
    ON UPDATE CASCADE;

-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- Tabla Autores_Libro
CREATE TABLE autores_libro(
    id_autor_libro SERIAL NOT NULL,
    id_autor INT4 NOT NULL,
    id_libro INT4 NOT NULL,
    CONSTRAINT PK_AUTORES_LIBRO PRIMARY KEY (id_autor_libro)
);
ALTER TABLE autores_libro OWNER TO user_node_spring;
ALTER TABLE autores_libro ADD CONSTRAINT FK_AU_AULIB FOREIGN KEY (id_autor)
    REFERENCES autores (id_autor)
    ON DELETE RESTRICT
    ON UPDATE CASCADE;
ALTER TABLE autores_libro ADD CONSTRAINT FK_LIB_AULIB FOREIGN KEY (id_libro)
    REFERENCES libros (id_libro)
    ON DELETE RESTRICT
    ON UPDATE CASCADE; 
