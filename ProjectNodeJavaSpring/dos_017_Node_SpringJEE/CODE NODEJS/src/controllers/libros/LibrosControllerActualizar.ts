import { SQL_LIBRO_ACTUALIZAR } from "../../repositories/libros/libros_sql_actualizar";
import { Response, Request } from "express";
import LibroDao from '../../daos/libros/LibrosDaoActualizar';

class LibroControllerActualizar extends LibroDao {
    public actualizarLibro(req: Request, res: Response):void{
        const id = req.body.idLibro;
        const titulo = req.body.titulo;
        const fechaPublicacion = req.body.fechaPublicacion;
        const codigo = req.body.codigo;
        const isbn = req.body.isbn;
        const idEditorial = req.body.idEditorial;
        const parametros = [id, titulo, fechaPublicacion, codigo, isbn, idEditorial];
        LibroControllerActualizar.actualizarLibros(SQL_LIBRO_ACTUALIZAR.F5, parametros, res);
    }
}
const libroControllerActualizar = new LibroControllerActualizar();
export default libroControllerActualizar;