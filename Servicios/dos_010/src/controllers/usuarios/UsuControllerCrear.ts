import { SQL_USUARIOS_CONFIRMAR } from './../../repositories/usuarios/usu_sql_Confirmar';
import { SQL_USUARIOS_CREAR } from './../../repositories/usuarios/usu_sql_Crear';
import { Response } from "express";
import { Request } from "express";
import UsuarioDao from '../../daos/usuarios/UsuDaoCrear';

class UsuControllerCrear extends UsuarioDao{
    public grabarUsuario(req:Request, res:Response):void{
        const rol = req.body.codRol;
        const documento = req.body.documentoUsuario;
        const tipo = req.body.tipodocumentoUsuario;
        const nombre = req.body.nombresUsuario;
        const apellido = req.body.apellidosUsuario;
        const telefono = req.body.telefonoUsuario;
        const estado = req.body.estadoUsuario;

        const parametro = [rol, documento, tipo, nombre, apellido, telefono, estado];

        UsuControllerCrear.crearUsuario(SQL_USUARIOS_CONFIRMAR.CONFIRMAR, SQL_USUARIOS_CREAR.CREAR, parametro, res);
    }
}
const usuControllerCrear = new UsuControllerCrear();
export default usuControllerCrear;