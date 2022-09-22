-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- Tabla Cliente
INSERT INTO clientes(identificacion, nombre, apellido, direccion, telefono) 
VALUES('ID12340','Nombre Generico 0','Apellido Generico 0','Cra0 con calle 0','+573114567890');
INSERT INTO clientes(identificacion, nombre, apellido, direccion, telefono) 
VALUES('ID123401','Nombre Generico 01','Apellido Generico 01','Cra0 con calle 01','+5731145678901');
INSERT INTO clientes(identificacion, nombre, apellido, direccion, telefono) 
VALUES('ID123402','Nombre Generico 02','Apellido Generico 02','Cra0 con calle 02','+5731145678902');
INSERT INTO clientes(identificacion, nombre, apellido, direccion, telefono) 
VALUES('ID123403','Nombre Generico 03','Apellido Generico 03','Cra0 con calle 03','+5731145678903');
INSERT INTO clientes(identificacion, nombre, apellido, direccion, telefono) 
VALUES('ID123404','Nombre Generico 04','Apellido Generico 04','Cra0 con calle 04','+5731145678904');

-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- Tabla Prestamos
INSERT INTO prestamos_biblio(fecha_inicio, descripcion, id_cliente)
VALUES('01-10-2022','este pendejo se ha demorado mucho con el libro','1');

INSERT INTO prestamos_biblio(fecha_inicio, descripcion, id_cliente)
VALUES('02-10-2022','este pendejo se ha demorado mucho con el libro','2');
INSERT INTO prestamos_biblio(fecha_inicio, descripcion, id_cliente)
VALUES('03-10-2022','este pendejo se ha demorado mucho con el libro','3');
INSERT INTO prestamos_biblio(fecha_inicio, descripcion, id_cliente)
VALUES('04-10-2022','este pendejo se ha demorado mucho con el libro','4');
INSERT INTO prestamos_biblio(fecha_inicio, descripcion, id_cliente)
VALUES('05-10-2022','este pendejo se ha demorado mucho con el libro','5');

-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- Tabla Editorial
INSERT INTO editoriales(nombre, pais, telefono) VALUES('Buhos Nocturnos','Colommbia','+573125737271');
INSERT INTO editoriales(nombre, pais, telefono) VALUES('NOSE','Ecuador','+5933125737271');
INSERT INTO editoriales(nombre, pais, telefono) VALUES('Rinoceronte Fantastico','Peru','+513125737271');
INSERT INTO editoriales(nombre, pais, telefono) VALUES('Unicornio','Venezuela','+583125737271');
INSERT INTO editoriales(nombre, pais, telefono) VALUES('La Wea','Chile','+563125737271');
INSERT INTO editoriales(nombre, pais, telefono) VALUES('Los Boludos','Argentina','+543125737271');

-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- Tabla Libro
INSERT INTO libros(titulo,fecha_publicacion,codigo,isbn,id_editorial)
VALUES('Estuche HeartStopper','13-07-2022','4560','ISBN0','1');
INSERT INTO libros(titulo,fecha_publicacion,codigo,isbn,id_editorial)
VALUES('Espia de Dios','13-07-2022','45601','ISBN01','2');
INSERT INTO libros(titulo,fecha_publicacion,codigo,isbn,id_editorial)
VALUES('Antologia del Terror','13-07-2022','45603','ISBN03','3');
INSERT INTO libros(titulo,fecha_publicacion,codigo,isbn,id_editorial)
VALUES('Sangre de Campeon','13-07-2022','45604','ISBN04','4');
INSERT INTO libros(titulo,fecha_publicacion,codigo,isbn,id_editorial)
VALUES('El Codigo DaVinci','13-07-2022','45605','ISBN05','5');

-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- Tabla Autor
INSERT INTO autores(nombre,apellido,nacionalidad,descripcion)
VALUES('Autor Nombre 01','Autor Apellido 01','Polaca','Este es un autor polaco');
INSERT INTO autores(nombre,apellido,nacionalidad,descripcion)
VALUES('Autor Nombre 02','Autor Apellido 02','Colombia','Este es un autor colombia');
INSERT INTO autores(nombre,apellido,nacionalidad,descripcion)
VALUES('Autor Nombre 03','Autor Apellido 03','Aleman','Este es un autor aleman');
INSERT INTO autores(nombre,apellido,nacionalidad,descripcion)
VALUES('Autor Nombre 04','Autor Apellido 04','España','Este es un autor español');
INSERT INTO autores(nombre,apellido,nacionalidad,descripcion)
VALUES('Autor Nombre 05','Autor Apellido 05','Francia','Este NO es frances');

-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- Tabla Detalle_Prestamos
INSERT INTO detalle_prestamos(fecha_devolucion,dias_mora,descripcion,fecha_entrega,id_prestamo,id_libro)
VALUES('01-06-2022','45','Como el sujeto ya paso los 30 dias de mora, al devolver el libro se le amputara el meñique','01-06-2022','1','1');
INSERT INTO detalle_prestamos(fecha_devolucion,dias_mora,descripcion,fecha_entrega,id_prestamo,id_libro)
VALUES('01-06-2022','45','Como el sujeto ya paso los 30 dias de mora, al devolver el libro se le amputara el meñique','01-06-2022','2','2');
INSERT INTO detalle_prestamos(fecha_devolucion,dias_mora,descripcion,fecha_entrega,id_prestamo,id_libro)
VALUES('01-06-2022','45','Como el sujeto ya paso los 30 dias de mora, al devolver el libro se le amputara el meñique','01-06-2022','3','3');
INSERT INTO detalle_prestamos(fecha_devolucion,dias_mora,descripcion,fecha_entrega,id_prestamo,id_libro)
VALUES('01-06-2022','45','Como el sujeto ya paso los 30 dias de mora, al devolver el libro se le amputara el meñique','01-06-2022','4','4');
INSERT INTO detalle_prestamos(fecha_devolucion,dias_mora,descripcion,fecha_entrega,id_prestamo,id_libro)
VALUES('01-06-2022','45','Como el sujeto ya paso los 30 dias de mora, al devolver el libro se le amputara el meñique','01-06-2022','5','5');

-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- Tabla Autores_Libro
INSERT INTO autores_libro(id_autor,id_libro) VALUES('1','3');
INSERT INTO autores_libro(id_autor,id_libro) VALUES('2','5');
INSERT INTO autores_libro(id_autor,id_libro) VALUES('3','4');
INSERT INTO autores_libro(id_autor,id_libro) VALUES('4','2');
INSERT INTO autores_libro(id_autor,id_libro) VALUES('5','1');
