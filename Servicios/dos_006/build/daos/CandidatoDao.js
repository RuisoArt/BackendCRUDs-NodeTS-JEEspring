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
const conexionBD_1 = __importDefault(require("../configuracion/conexion/conexionBD"));
class CandidatoDao {
    static obtenerCandidatos(sqlConsulta, parametros, res) {
        return __awaiter(this, void 0, void 0, function* () {
            conexionBD_1.default.result(sqlConsulta, parametros)
                .then((resultado) => {
                res.status(200).json(resultado.rows);
            })
                .catch((error) => {
                console.log('Ha Explotado el Sistema', error);
                res.status(418).json({ 'respuesta': 'Error mensaje Dao' });
            });
        });
    }
    static crearCandidatos(sqlConfirmar, sqlCrear, parametros, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield conexionBD_1.default.task((consulta) => __awaiter(this, void 0, void 0, function* () {
                const dato = yield consulta.one(sqlConfirmar, parametros);
                if (dato.cantidad == 0) {
                    return yield consulta.one(sqlCrear, parametros);
                }
                else {
                    return { id_candidato: 0 };
                }
            }))
                .then((respuesta) => {
                if (respuesta.id_candidato != 0) {
                    res.status(200).json({ respuesta: 'Candidato Creado', nuevoCodigo: respuesta.id_candidato });
                }
                else {
                    res.status(402).json({ respuesta: 'Error al crear Candidato Nuevo' });
                }
            })
                .catch((miError) => {
                console.log('Ya valio la conexion ¿Que no ves?', miError);
                res.status(418).json({ respuesta: 'El servidor se rehúsa a intentar hacer café con una tetera' });
            });
        });
    }
}
exports.default = CandidatoDao;
