-- ---------------------- Tabla Proveedor
CREATE TABLE proveedor (
    id_proveedor SERIAL NOT NULL,
    nombre_proveedor VARCHAR(200) NOT NULL,
    nit_proveedor VARCHAR(20) NOT NULL,
    direccion VARCHAR(100) NOT NULL,
    CONSTRAINT PK_PROVEEDOR PRIMARY KEY (id_proveedor)
);
ALTER TABLE proveedor OWNER TO user_spring;

-- ------------------------ Tabla Producto
CREATE TABLE producto (
  id_producto SERIAL NOT NULL,
  nombre_producto VARCHAR(200) NOT NULL,
  cantidad_disponible INT NOT NULL,
  descripcion VARCHAR(200) NOT NULL,
  precio INT NOT NULL,
  iva FLOAT NOT NULL,
  id_proveedor INT4 NOT NULL,
  CONSTRAINT PK_PRODUCTO PRIMARY KEY (id_producto)
);
ALTER TABLE producto OWNER TO user_spring;
ALTER TABLE producto ADD CONSTRAINT FK_PROD_2_PROV FOREIGN KEY (id_proveedor)
    REFERENCES proveedor (id_proveedor)
    ON DELETE RESTRICT
    ON UPDATE CASCADE;

-- -------------------------------Tabla Factura
CREATE TABLE factura(
  id_factura SERIAL NOT NULL,
  total_factura INT NOT NULL,
  fecha DATE NOT NULL,
  id_producto INT4 NOT NULL,
  CONSTRAINT PK_FACTURA PRIMARY KEY (id_factura)
);
ALTER TABLE factura OWNER TO user_spring;
ALTER TABLE factura ADD CONSTRAINT FK_FAC_2_PROD FOREIGN KEY (id_producto)
    REFERENCES producto(id_producto)
    ON DELETE RESTRICT
    ON UPDATE CASCADE;
-- --------------------------------- Tabla PEdido
CREATE TABLE pedido(
  id_pedido SERIAL NOT NULL,
  numero_pedido VARCHAR(30) NOT NULL,
  descripcion VARCHAR(200) NOT NULL,
  id_producto INT4 NOT NULL,
  CONSTRAINT PK_PEDIDO PRIMARY KEY (id_pedido)
);
ALTER TABLE pedido OWNER TO user_spring;
ALTER TABLE pedido ADD CONSTRAINT FK_PEDIDO_2_PRODU FOREIGN KEY (id_producto)
    REFERENCES producto(id_producto)
    ON DELETE RESTRICT
    ON UPDATE CASCADE;

-- ------------------------------------ Tabla Detalle id_pedido
CREATE TABLE detalle_pedido(
  id_detalle_pedido SERIAL NOT NULL,
  direccion VARCHAR(200) NOT NULL,
  total_pedido INT4 NOT NULL,
  id_pedido INT4 NOT NULL,
  CONSTRAINT PK_DETALLE_PEDIDO PRIMARY KEY (id_detalle_pedido)
);
ALTER TABLE detalle_pedido OWNER TO user_spring;
ALTER TABLE detalle_pedido ADD CONSTRAINT FK_DEPED_2_PED FOREIGN KEY (id_pedido)
    REFERENCES pedido(id_pedido)
    ON DELETE RESTRICT
    ON UPDATE CASCADE;

-- -------------------------------------- Tabla Cliente
CREATE TABLE cliente(
    id_cliente SERIAL NOT NULL,
    nombre VARCHAR(200) NOT NULL,
    apellidos VARCHAR(200) NOT NULL,
    identificacion VARCHAR(50) NOT NULL,
    telefono INT NOT NULL,
    CONSTRAINT PK_CLIENTE PRIMARY KEY (id_cliente)
);
ALTER TABLE cliente OWNER TO user_spring;

-- ------------------------------------ Tabla Pedido cliente
CREATE TABLE pedido_cliente(
    id_pedido_cliente SERIAL NOT NULL,
    id_pedido INT4 NOT NULL,
    id_cliente INT4 NOT NULL,
    descripcion VARCHAR(200) NOT NULL,
    CONSTRAINT PK_PEDIDOCLIENTE PRIMARY KEY (id_pedido_cliente)
);
ALTER TABLE pedido_cliente OWNER TO user_spring;
ALTER TABLE pedido_cliente ADD CONSTRAINT FK_PDCLI_2_PED FOREIGN KEY (id_pedido)
    REFERENCES pedido(id_pedido)
    ON DELETE RESTRICT
    ON UPDATE CASCADE;
ALTER TABLE pedido_cliente ADD CONSTRAINT FK_PDCLI_2_CLIENTE FOREIGN KEY (id_cliente)
    REFERENCES cliente(id_cliente)
    ON DELETE RESTRICT
    ON UPDATE CASCADE;
