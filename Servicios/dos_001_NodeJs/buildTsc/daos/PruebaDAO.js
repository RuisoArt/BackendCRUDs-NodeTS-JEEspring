"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class PruebaDAO {
    static obtenerInfo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const miJson = { profesores: 'Harvey y Andres', materia: 'DOS' }; // los Json funciones en {llave:valor}, la llave puede o no estar en llaves sencillas ''
            //Objeto, resuelve, si funciona hace el THEN si no hace el CATCH. "Programacion Reactiva"
            // ()=>{} esto es una funcion flecha
            Promise.resolve(miJson)
                .then((resultado) => {
                console.log('La Consola imprime el Json= \n', resultado);
                res.status(200).json(miJson);
            })
                .catch((error) => {
                console.log('Ha sucedido un error= \n', error);
                res.status(400).json({ respuesta: 'Se murio el sistema' });
            });
        });
    }
}
//export PruebaDAO;
exports.default = PruebaDAO;
