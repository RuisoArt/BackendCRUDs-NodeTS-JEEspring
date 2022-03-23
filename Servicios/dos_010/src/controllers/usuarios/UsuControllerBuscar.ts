import { SQL_USUARIOS_BUSCAR } from './../../repositories/usuarios/usu_sql_Buscar';
import { Response } from "express";
import { Request } from "express";
import UsuarioDao from '../../daos/usuarios/UsuDaoBuscar';

class UsuControllerBuscar extends UsuarioDao{
    public buscarUsuario(req:Request, res:Response):void{
        const codigo = req.params.codUsuario;
        const parametro = [codigo];

        UsuControllerBuscar.encontrarUsuario(SQL_USUARIOS_BUSCAR.CARGAR, parametro, res);
    }
}
const usuControllerBuscar = new UsuControllerBuscar();
export default usuControllerBuscar;