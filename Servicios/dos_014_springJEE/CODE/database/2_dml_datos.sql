----------------------------------------------- Roles
INSERT INTO roles(nombre_rol, estado_rol) VALUES('Administrador', '0');
INSERT INTO roles(nombre_rol, estado_rol) VALUES('Cliente', '1');
INSERT INTO roles(nombre_rol, estado_rol) VALUES('Proveedor', '0');
INSERT INTO roles(nombre_rol, estado_rol) VALUES('Contabilidad', '0');
INSERT INTO roles(nombre_rol, estado_rol) VALUES('Trabajador', '1');

----------------------------------------------- Usuarios

INSERT INTO usuarios(cod_rol, documento_usuario, tipodocumento_usuario, nombres_usuario, apellidos_usuario, telefono_usuario, estado_usuario)
    VALUES('1','1049001','1','Fernando', 'Garcia', '0180001','1');
INSERT INTO usuarios(cod_rol, documento_usuario, tipodocumento_usuario, nombres_usuario, apellidos_usuario, telefono_usuario, estado_usuario)
    VALUES('2','1049002','1','Felipe', 'Villamil', '0180002','1');
INSERT INTO usuarios(cod_rol, documento_usuario, tipodocumento_usuario, nombres_usuario, apellidos_usuario, telefono_usuario, estado_usuario)
    VALUES('3','1049003','1','Francisco', 'Gomez', '0180003','0');
INSERT INTO usuarios(cod_rol, documento_usuario, tipodocumento_usuario, nombres_usuario, apellidos_usuario, telefono_usuario, estado_usuario)
    VALUES('4','1049004','1','Fourier', 'Narvaez', '0180004','1');
INSERT INTO usuarios(cod_rol, documento_usuario, tipodocumento_usuario, nombres_usuario, apellidos_usuario, telefono_usuario, estado_usuario)
    VALUES('5','1049005','1','Marco', 'Antonio', '0180005','0');

----------------------------------------------- Accesos
INSERT INTO accesos(cod_usuario, correo_acceso,clave_acceso) VALUES('1','abcde@mail1.com','qwerty1');
INSERT INTO accesos(cod_usuario, correo_acceso,clave_acceso) VALUES('2','abcde@mail2.com','qwerty2');
INSERT INTO accesos(cod_usuario, correo_acceso,clave_acceso) VALUES('3','abcde@mail3.com','qwerty3');
INSERT INTO accesos(cod_usuario, correo_acceso,clave_acceso) VALUES('4','abcde@mail4.com','qwerty4');
INSERT INTO accesos(cod_usuario, correo_acceso,clave_acceso) VALUES('5','abcde@mail5.com','qwerty5');

----------------------------------------------- Alertas
INSERT INTO alertas(cod_usuario, dias_alerta, meses_alerta, titulo_alerta, detalle_alerta, estado_alerta)
    VALUES ('1', '4', '5', 'Ingreso al almacen', 'El Programador tiene hambre y no ha desayunado', '1');
INSERT INTO alertas(cod_usuario, dias_alerta, meses_alerta, titulo_alerta, detalle_alerta, estado_alerta)
    VALUES ('2', '2', '3', 'Vio las tortillas', 'El Programador tiene hambre y no ha desayunado', '1');
INSERT INTO alertas(cod_usuario, dias_alerta, meses_alerta, titulo_alerta, detalle_alerta, estado_alerta)
    VALUES ('3', '6', '5', 'Se antojo de un taco', 'El Programador tiene hambre y no ha desayunado', '1');
INSERT INTO alertas(cod_usuario, dias_alerta, meses_alerta, titulo_alerta, detalle_alerta, estado_alerta)
    VALUES ('4', '8', '9', 'compro las tortillas', 'El Programador tiene hambre y no ha desayunado', '1');
INSERT INTO alertas(cod_usuario, dias_alerta, meses_alerta, titulo_alerta, detalle_alerta, estado_alerta)
    VALUES ('5', '1', '1', 'se fue a hacerce un taco al pastor', 'El Programador tiene hambre y no ha desayunado', '1');

----------------------------------------------- Imagenes

INSERT INTO imagenes(cod_usuario, nombrepublico_imagen, nombreprivado_imagen, tipo_imagen, tamaño_imagen, favorita_imagen)
    VALUES ('1','burritos de costilla', 'burritos.jpeg','jpeg','1920x1080','1');
INSERT INTO imagenes(cod_usuario, nombrepublico_imagen, nombreprivado_imagen, tipo_imagen, tamaño_imagen, favorita_imagen)
    VALUES ('2','pasta al pesto', 'pasta.jpeg','jpeg','1920x1080','1'); 
INSERT INTO imagenes(cod_usuario, nombrepublico_imagen, nombreprivado_imagen, tipo_imagen, tamaño_imagen, favorita_imagen)
    VALUES ('3','chimichangas', 'deadpool.jpeg','jpeg','1920x1080','1'); 
INSERT INTO imagenes(cod_usuario, nombrepublico_imagen, nombreprivado_imagen, tipo_imagen, tamaño_imagen, favorita_imagen)
    VALUES ('4','tamal de pollo y res', 'tamalito.jpeg','jpeg','1920x1080','1'); 
INSERT INTO imagenes(cod_usuario, nombrepublico_imagen, nombreprivado_imagen, tipo_imagen, tamaño_imagen, favorita_imagen)
    VALUES ('5','pechuga a la plancha gratinada', 'pechugas.jpeg','jpeg','1920x1080','1'); 

----------------------------------------------- Ingresos

INSERT INTO ingresos(cod_usuario) VALUES ('1');
INSERT INTO ingresos(cod_usuario) VALUES ('2');
INSERT INTO ingresos(cod_usuario) VALUES ('3');
INSERT INTO ingresos(cod_usuario) VALUES ('4');
INSERT INTO ingresos(cod_usuario) VALUES ('5');