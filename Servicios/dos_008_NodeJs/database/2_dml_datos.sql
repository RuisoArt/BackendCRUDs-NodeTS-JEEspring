----------------------------------------------- tabla programas
INSERT INTO programas(nombre_programa) VALUES ('Especializacion en Ramon');
INSERT INTO programas(nombre_programa) VALUES ('Ingenieria de Sistemas');
INSERT INTO programas(nombre_programa) VALUES ('Ingenieria Electronica');
INSERT INTO programas(nombre_programa) VALUES ('Especializacion en Automatizacion Industrial');
INSERT INTO programas(nombre_programa) VALUES ('Ingenieria en Telecomunicaciones');
INSERT INTO programas(nombre_programa) VALUES ('Maestria en Ciberseguridad');
INSERT INTO programas(nombre_programa) VALUES ('Especializacion en Bases de datos');
INSERT INTO programas(nombre_programa) VALUES ('Maestria en Ciencia de Datos');
INSERT INTO programas(nombre_programa) VALUES ('Especializacion en Informatica Forense');
INSERT INTO programas(nombre_programa) VALUES ('Diseño de Interaccion');

----------------------------------------------- tabla pensums
INSERT INTO pensums(cod_programa, nombre_pensum) VALUES(1,'Pensum cualquiera 1');
INSERT INTO pensums(cod_programa, nombre_pensum) VALUES(2,'Pensum cualquiera 2');
INSERT INTO pensums(cod_programa, nombre_pensum) VALUES(3,'Pensum cualquiera 3');
INSERT INTO pensums(cod_programa, nombre_pensum) VALUES(4,'Pensum cualquiera 4');
INSERT INTO pensums(cod_programa, nombre_pensum) VALUES(5,'Pensum cualquiera 5');
INSERT INTO pensums(cod_programa, nombre_pensum) VALUES(6,'Pensum cualquiera 6');
INSERT INTO pensums(cod_programa, nombre_pensum) VALUES(7,'Pensum cualquiera 7');
INSERT INTO pensums(cod_programa, nombre_pensum) VALUES(8,'Pensum cualquiera 8');
INSERT INTO pensums(cod_programa, nombre_pensum) VALUES(9,'Pensum cualquiera 9');
INSERT INTO pensums(cod_programa, nombre_pensum) VALUES(1,'Pensum cualquiera 0');

-----------------------------------------------  tabla semestres
INSERT INTO semestres(nombre_semestre) VALUES('Primero');
INSERT INTO semestres(nombre_semestre) VALUES('Segundo');
INSERT INTO semestres(nombre_semestre) VALUES('Tercero');
INSERT INTO semestres(nombre_semestre) VALUES('Cuarto');
INSERT INTO semestres(nombre_semestre) VALUES('Quinto');
INSERT INTO semestres(nombre_semestre) VALUES('Sexto');
INSERT INTO semestres(nombre_semestre) VALUES('Septimo');
INSERT INTO semestres(nombre_semestre) VALUES('Octavo');
INSERT INTO semestres(nombre_semestre) VALUES('Noveno');
INSERT INTO semestres(nombre_semestre) VALUES('Decimo');
INSERT INTO semestres(nombre_semestre) VALUES('MadreFoca');

----------------------------------------------- tabla materias
INSERT INTO materias(nombre_materia, referencia_materia) VALUES('Materia Eectiva 1','qwerty1');
INSERT INTO materias(nombre_materia, referencia_materia) VALUES('Materia Eectiva 2','qwerty2');
INSERT INTO materias(nombre_materia, referencia_materia) VALUES('Materia Eectiva 3','qwerty3');
INSERT INTO materias(nombre_materia, referencia_materia) VALUES('Materia Eectiva 4','qwerty4');
INSERT INTO materias(nombre_materia, referencia_materia) VALUES('Materia Eectiva 5','qwerty5');
INSERT INTO materias(nombre_materia, referencia_materia) VALUES('Materia Eectiva 6','qwerty6');
INSERT INTO materias(nombre_materia, referencia_materia) VALUES('Materia Eectiva 7','qwerty7');
INSERT INTO materias(nombre_materia, referencia_materia) VALUES('Materia Eectiva 8','qwerty8');
INSERT INTO materias(nombre_materia, referencia_materia) VALUES('Materia Eectiva 9','qwerty9');
INSERT INTO materias(nombre_materia, referencia_materia) VALUES('Materia Eectiva 0','qwerty0');
INSERT INTO materias(nombre_materia, referencia_materia) VALUES('Materia Eectiva 11','qwerty11');

----------------------------------------------- materia_pensum
INSERT INTO materia_pensum(cod_pensum, cod_materia, cod_semestre) VALUES(4,1,1);
INSERT INTO materia_pensum(cod_pensum, cod_materia, cod_semestre) VALUES(5,2,2);
INSERT INTO materia_pensum(cod_pensum, cod_materia, cod_semestre) VALUES(6,3,3);
INSERT INTO materia_pensum(cod_pensum, cod_materia, cod_semestre) VALUES(4,4,4);
INSERT INTO materia_pensum(cod_pensum, cod_materia, cod_semestre) VALUES(5,5,5);
INSERT INTO materia_pensum(cod_pensum, cod_materia, cod_semestre) VALUES(6,6,6);
INSERT INTO materia_pensum(cod_pensum, cod_materia, cod_semestre) VALUES(7,7,7);
INSERT INTO materia_pensum(cod_pensum, cod_materia, cod_semestre) VALUES(8,8,8);
INSERT INTO materia_pensum(cod_pensum, cod_materia, cod_semestre) VALUES(9,9,9);

----------------------------------------------- Accesos
INSERT INTO accesos(correo_acceso,clave_acceso) VALUES('abcde@mail1.com','qwerty1');
INSERT INTO accesos(correo_acceso,clave_acceso) VALUES('abcde@mail2.com','qwerty2');
INSERT INTO accesos(correo_acceso,clave_acceso) VALUES('abcde@mail3.com','qwerty3');
INSERT INTO accesos(correo_acceso,clave_acceso) VALUES('abcde@mail4.com','qwerty4');
INSERT INTO accesos(correo_acceso,clave_acceso) VALUES('abcde@mail5.com','qwerty5');
INSERT INTO accesos(correo_acceso,clave_acceso) VALUES('abcde@mail6.com','qwerty6');
INSERT INTO accesos(correo_acceso,clave_acceso) VALUES('abcde@mail7.com','qwerty7');