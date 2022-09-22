-- ---------------------- Tabla Proveedor
INSERT INTO proveedor (nombre_proveedor, nit_proveedor, direccion) VALUES('proveedor nombre 1','nit-1234561','cra01');
INSERT INTO proveedor (nombre_proveedor, nit_proveedor, direccion) VALUES('proveedor nombre 2','nit-1234562','cra02');
INSERT INTO proveedor (nombre_proveedor, nit_proveedor, direccion) VALUES('proveedor nombre 3','nit-1234563','cra03');
INSERT INTO proveedor (nombre_proveedor, nit_proveedor, direccion) VALUES('proveedor nombre 4','nit-1234564','cra04');
INSERT INTO proveedor (nombre_proveedor, nit_proveedor, direccion) VALUES('proveedor nombre 5','nit-1234565','cra05');

-- ------------------------ Tabla Producto
INSERT INTO producto (nombre_producto,cantidad_disponible,descripcion,precio,iva,id_proveedor) VALUES('producto 01',5,'producto mother fucker 01',5000,0.16,1);
INSERT INTO producto (nombre_producto,cantidad_disponible,descripcion,precio,iva,id_proveedor) VALUES('producto 02',5,'producto mother fucker 02',5000,0.16,2);
INSERT INTO producto (nombre_producto,cantidad_disponible,descripcion,precio,iva,id_proveedor) VALUES('producto 03',5,'producto mother fucker 03',5000,0.16,3);
INSERT INTO producto (nombre_producto,cantidad_disponible,descripcion,precio,iva,id_proveedor) VALUES('producto 04',5,'producto mother fucker 04',5000,0.16,4);
INSERT INTO producto (nombre_producto,cantidad_disponible,descripcion,precio,iva,id_proveedor) VALUES('producto 05',5,'producto mother fucker 05',5000,0.16,5);

-- -------------------------------Tabla Factura
INSERT INTO factura(total_factura,fecha,id_producto) VALUES(50,'2022-04-19',1);
INSERT INTO factura(total_factura,fecha,id_producto) VALUES(60,'2022-04-19',2);
INSERT INTO factura(total_factura,fecha,id_producto) VALUES(70,'2022-04-19',3);
INSERT INTO factura(total_factura,fecha,id_producto) VALUES(80,'2022-04-19',4);
INSERT INTO factura(total_factura,fecha,id_producto) VALUES(90,'2022-04-19',5);

-- --------------------------------- Tabla PEdido
INSERT INTO pedido(numero_pedido,descripcion,id_producto) VALUES('Pedido rifado 01','este producto fue rifado alv',1);
INSERT INTO pedido(numero_pedido,descripcion,id_producto) VALUES('Pedido rifado 02','este producto fue rifado alv',2);
INSERT INTO pedido(numero_pedido,descripcion,id_producto) VALUES('Pedido rifado 03','este producto fue rifado alv',3);
INSERT INTO pedido(numero_pedido,descripcion,id_producto) VALUES('Pedido rifado 04','este producto fue rifado alv',4);
INSERT INTO pedido(numero_pedido,descripcion,id_producto) VALUES('Pedido rifado 05','este producto fue rifado alv',5);

-- ------------------------------------ Tabla Detalle id_pedido
INSERT INTO detalle_pedido(direccion,total_pedido,id_pedido) VALUES('la direccion del pedido es esta :v',40,1);
INSERT INTO detalle_pedido(direccion,total_pedido,id_pedido) VALUES('la direccion del pedido es esta :v',50,2);
INSERT INTO detalle_pedido(direccion,total_pedido,id_pedido) VALUES('la direccion del pedido es esta :v',60,3);
INSERT INTO detalle_pedido(direccion,total_pedido,id_pedido) VALUES('la direccion del pedido es esta :v',70,4);
INSERT INTO detalle_pedido(direccion,total_pedido,id_pedido) VALUES('la direccion del pedido es esta :v',80,5);

-- -------------------------------------- Tabla Cliente
INSERT INTO cliente(nombre,apellidos,identificacion,telefono) VALUES('cliente juanito 01','perez 01','id-0529-01',1234560);
INSERT INTO cliente(nombre,apellidos,identificacion,telefono) VALUES('cliente juanito 02','perez 02','id-0529-02',1234560);
INSERT INTO cliente(nombre,apellidos,identificacion,telefono) VALUES('cliente juanito 03','perez 03','id-0529-03',1234560);
INSERT INTO cliente(nombre,apellidos,identificacion,telefono) VALUES('cliente juanito 04','perez 04','id-0529-04',1234560);
INSERT INTO cliente(nombre,apellidos,identificacion,telefono) VALUES('cliente juanito 05','perez 05','id-0529-05',1234560);

-- ------------------------------------ Tabla Pedido cliente
INSERT INTO pedido_cliente(id_pedido,id_cliente,descripcion) VALUES(1,1,'el cliente gano la rifa 01');
INSERT INTO pedido_cliente(id_pedido,id_cliente,descripcion) VALUES(2,2,'el cliente gano la rifa 02');
INSERT INTO pedido_cliente(id_pedido,id_cliente,descripcion) VALUES(3,3,'el cliente gano la rifa 03');
INSERT INTO pedido_cliente(id_pedido,id_cliente,descripcion) VALUES(4,4,'el cliente gano la rifa 04');
INSERT INTO pedido_cliente(id_pedido,id_cliente,descripcion) VALUES(5,5,'el cliente gano la rifa 05');
