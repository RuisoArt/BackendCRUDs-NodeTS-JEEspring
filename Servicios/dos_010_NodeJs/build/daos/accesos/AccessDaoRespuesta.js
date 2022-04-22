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
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class AccessDaoRespuesta {
    static procesarAcceso(registro, res) {
        return __awaiter(this, void 0, void 0, function* () {
            if (registro != null) {
                console.log(registro);
                const jsonToken = jsonwebtoken_1.default.sign({ identificador: registro.codUsuario,
                    correoUsuario: registro.correoAcceso,
                    nombreUsuario: registro.nombresUsuario,
                    apellidoUsuario: registro.apellidosUsuario,
                    rolUsuario: registro.nombreRol,
                    DosDev: 'Esta es la informacion del Token' }, 'claveDelToken', { expiresIn: '1h' });
                return res.status(200).json({ token: jsonToken });
            }
            else {
                return res.status(401).json({ mensaje: 'El Usuario es Incorrecto' });
            }
        });
    }
}
exports.default = AccessDaoRespuesta;
