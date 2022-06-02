import { SQL_LIBRO_CONFIRMAR } from "../../repositories/libros/libros_sql_confirmar";
import {SQL_LIBRO_CREAR} from "../../repositories/libros/libros_sql_crear";
import { Response, Request } from "express";
import LibroDao from '../../daos/libros/LibrosDaoCrear';

class LibroControllerCrear extends LibroDao {
    public crearLibro(req: Request, res: Response):void{
        const titulo = req.body.titulo;
        const fechaPublicacion = req.body.fechaPublicacion;
        const codigo = req.body.codigo;
        const isbn = req.body.isbn;
        const idEditorial = req.body.idEditorial;
        const parametros = [titulo, fechaPublicacion, codigo, isbn, idEditorial];
        LibroControllerCrear.crearLibro(SQL_LIBRO_CONFIRMAR.CONFIRMAR, SQL_LIBRO_CREAR.CREAR, parametros, res);
    }
}
const libroControllerCrear = new LibroControllerCrear();
export default libroControllerCrear;