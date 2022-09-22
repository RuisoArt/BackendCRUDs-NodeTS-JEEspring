-- ....................................................Tabla Universidad
INSERT INTO universidad (nombre_universidad,nit_universidad) VALUES ('nombreUniversidad1','NIT--001');
INSERT INTO universidad (nombre_universidad,nit_universidad) VALUES ('nombreUniversidad2','NIT--002');
INSERT INTO universidad (nombre_universidad,nit_universidad) VALUES ('nombreUniversidad3','NIT--003');
INSERT INTO universidad (nombre_universidad,nit_universidad) VALUES ('nombreUniversidad4','NIT--004');
INSERT INTO universidad (nombre_universidad,nit_universidad) VALUES ('nombreUniversidad5','NIT--005');

-- ....................................................Tabla Seccional
INSERT INTO  seccional(direccion_seccional,nombre_seccional,id_universidad)VALUES ('Direccion_ALV_TENGOHAMBRE_001','seccional_001',1);
INSERT INTO  seccional(direccion_seccional,nombre_seccional,id_universidad)VALUES ('Direccion_ALV_TENGOHAMBRE_002','seccional_002',2);
INSERT INTO  seccional(direccion_seccional,nombre_seccional,id_universidad)VALUES ('Direccion_ALV_TENGOHAMBRE_003','seccional_003',3);
INSERT INTO  seccional(direccion_seccional,nombre_seccional,id_universidad)VALUES ('Direccion_ALV_TENGOHAMBRE_004','seccional_004',4);
INSERT INTO  seccional(direccion_seccional,nombre_seccional,id_universidad)VALUES ('Direccion_ALV_TENGOHAMBRE_005','seccional_005',5);

-- ....................................................Tabla Facultad
INSERT INTO  facultad(nombre_facultad,id_seccional)VALUES ('Facultad_Donas_001',1);
INSERT INTO  facultad(nombre_facultad,id_seccional)VALUES ('Facultad_Helado_002',2);
INSERT INTO  facultad(nombre_facultad,id_seccional)VALUES ('Facultad_Brownies_003',3);
INSERT INTO  facultad(nombre_facultad,id_seccional)VALUES ('Facultad_Chocolatinas_004',4);
INSERT INTO  facultad(nombre_facultad,id_seccional)VALUES ('Facultad_gomitas_005',5);

-- .................................................... Tabla Docente
INSERT INTO  docente(documento_docente,nombres_docente,apellidos_docente,tipo_docente,cod_facultad)VALUES ('10491','Nombre_1','Apellido_1',1,1);
INSERT INTO  docente(documento_docente,nombres_docente,apellidos_docente,tipo_docente,cod_facultad)VALUES ('10492','Nombre_2','Apellido_2',1,2);
INSERT INTO  docente(documento_docente,nombres_docente,apellidos_docente,tipo_docente,cod_facultad)VALUES ('10493','Nombre_3','Apellido_3',1,3);
INSERT INTO  docente(documento_docente,nombres_docente,apellidos_docente,tipo_docente,cod_facultad)VALUES ('10494','Nombre_4','Apellido_4',1,4);
INSERT INTO  docente(documento_docente,nombres_docente,apellidos_docente,tipo_docente,cod_facultad)VALUES ('10495','Nombre_5','Apellido_5',1,5);

-- .................................................... Tabla Asignaturas
INSERT INTO  asignaturas(semestre_asignatura,nombre_asignatura,codigo_asignatura,tipo_asignatura,cod_docente)VALUES (1,'Reposteria_Cupcake',014015161,'Cocina',1);
INSERT INTO  asignaturas(semestre_asignatura,nombre_asignatura,codigo_asignatura,tipo_asignatura,cod_docente)VALUES (1,'Reposteria_Tortas',014015162,'Cocina',2);
INSERT INTO  asignaturas(semestre_asignatura,nombre_asignatura,codigo_asignatura,tipo_asignatura,cod_docente)VALUES (1,'Reposteria_Pasteles',014015163,'Cocina',3);
INSERT INTO  asignaturas(semestre_asignatura,nombre_asignatura,codigo_asignatura,tipo_asignatura,cod_docente)VALUES (1,'Reposteria_Postres_Frios',014015164,'Cocina',4);
INSERT INTO  asignaturas(semestre_asignatura,nombre_asignatura,codigo_asignatura,tipo_asignatura,cod_docente)VALUES (1,'Reposteria_Esculturas_Chocolate',014015165,'Cocina',5);

