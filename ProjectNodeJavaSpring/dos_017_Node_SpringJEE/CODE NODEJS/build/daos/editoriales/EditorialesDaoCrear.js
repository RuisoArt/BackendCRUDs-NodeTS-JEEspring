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
class EditorialesDaoCrear {
    static crearEditorial(sqlConfirmar, sqlCrear, parametros, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield conexionDataBase_1.default.task((consulta) => __awaiter(this, void 0, void 0, function* () {
                const dato = yield consulta.one(sqlConfirmar, parametros);
                if (dato.cantidad == 0) {
                    return yield consulta.one(sqlCrear, parametros);
                }
                else {
                    return { id_editorial: 0 };
                }
            }))
                .then((respuesta) => {
                if (respuesta.id_editorial != 0) {
                    res.status(200).json({ respuesta: '¡Editorial Creada con Exito!', nuevoCodigo: respuesta.id_editorial });
                }
                else {
                    res.status(402).json({ respuesta: 'Error al crear la Editorial' });
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
exports.default = EditorialesDaoCrear;
