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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const conexionDataBase_1 = __importDefault(require("../../setting/connections/conexionDataBase"));
class AutorDaoTodo {
    static obtenerTodo(sqlConsulta, parametros, res) {
        return __awaiter(this, void 0, void 0, function* () {
            conexionDataBase_1.default.result(sqlConsulta, parametros)
                .then((resultado) => {
                res.status(200).json(resultado.rows);
            })
                .catch((error) => {
                console.log('Ha Explotado el Sistema', error);
                res.status(418).json({ 'respuesta': 'Error mensaje Dao' });
            });
        });
    }
}
exports.default = AutorDaoTodo;
