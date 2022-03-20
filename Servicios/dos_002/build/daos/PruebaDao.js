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
class PruebaDao {
    static obtenerPrimero(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const diccionarioUno = { estudiante: 'Felipe Narvaez', codigo: '2312660' };
            Promise.resolve(diccionarioUno)
                .then((resultado) => {
                console.log('Se imprime el Json DiccionarioUno = \n', resultado);
                res.status(202).json(diccionarioUno);
            })
                .catch((error) => {
                console.log('Diccionario Uno Exploto = /n', error);
                res.status(418).json({ respuesta: 'Exploto la Maquina' });
            });
        });
    }
    static obtenerSegundo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const diccionarioUno = { estudiante: 'Luis Gomez', codigo: '2312660' };
            Promise.resolve(diccionarioUno)
                .then((resultado) => {
                console.log('Se imprime el Json DiccionarioUno = \n', resultado);
                res.status(202).json(diccionarioUno);
            })
                .catch((error) => {
                console.log('Diccionario Uno Exploto = /n', error);
                res.status(418).json({ respuesta: 'Exploto la Maquina' });
            });
        });
    }
    static obtenerTercero(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const diccionarioUno = { estudiante: 'Maoly Leal', codigo: '2312660' };
            Promise.resolve(diccionarioUno)
                .then((resultado) => {
                console.log('Se imprime el Json DiccionarioUno = \n', resultado);
                res.status(202).json(diccionarioUno);
            })
                .catch((error) => {
                console.log('Diccionario Uno Exploto = /n', error);
                res.status(418).json({ respuesta: 'Exploto la Maquina' });
            });
        });
    }
}
exports.default = PruebaDao;
