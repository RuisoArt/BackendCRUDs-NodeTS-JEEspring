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
const conexionBD_1 = __importDefault(require("../../setting/conexion/conexionBD"));
class ProgramasDaoCrear {
    static crearPrograma(sqlConfirmar, sqlCrear, parametros, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield conexionBD_1.default.task((consulta) => __awaiter(this, void 0, void 0, function* () {
                const dato = yield consulta.one(sqlConfirmar, parametros);
                if (dato.cantidad == 0) {
                    return yield consulta.one(sqlCrear, parametros);
                }
                else {
                    return { cod_programa: 0 };
                }
            }))
                .then((respuesta) => {
                if (respuesta.cod_programa != 0) {
                    res.status(200).json({ respuesta: 'Programa Creado', nuevoCodigo: respuesta.cod_programa });
                }
                else {
                    res.status(402).json({ respuesta: 'Error al crear Parido Nuevo' });
                }
                //res.status(200).json(respuesta.rows);
            })
                .catch((miError) => {
                console.log('Valio madres, ¿que no ves?', miError);
                res.status(418).json({ respuesta: 'Error en la Consulta mensaje Dao' });
            });
        });
    }
}
exports.default = ProgramasDaoCrear;
