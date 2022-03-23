import { SQL_USUARIOS_ACTUALIZAR } from './../../repositories/usuarios/usu_sql_Actualizar';
import { Response } from "express";
import { Request } from "express";
import UsuarioDao from '../../daos/usuarios/UsuDaoActualizar';

class UsuControllerActualizar extends UsuarioDao{
    public refrescarUsuario(req:Request, res:Response):void{
        const codigo = req.body.codUsuario;
        const rol = req.body.codRol;
        const documento = req.body.documentoUsuario;
        const tipo = req.body.tipodocumentoUsuario;
        const nombre = req.body.nombresUsuario;
        const apellido = req.body.apellidosUsuario;
        const telefono = req.body.telefonoUsuario;
        const estado = req.body.estadoUsuario;

        const parametro = [codigo, rol, documento, tipo, nombre, apellido, telefono, estado];

        UsuControllerActualizar.actualizarUsuario(SQL_USUARIOS_ACTUALIZAR.F5, parametro, res);
    }
}
const usuControllerActualizar = new UsuControllerActualizar();
export default usuControllerActualizar;