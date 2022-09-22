"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PruebaDao_1 = __importDefault(require("../daos/PruebaDao"));
class PruebaController extends PruebaDao_1.default {
    hackme(req, res) {
        PruebaController.obtenerPrimero(req, res);
    }
    hitme(req, res) {
        PruebaController.obtenerSegundo(req, res);
    }
    findme(req, res) {
        PruebaController.obtenerTercero(req, res);
    }
}
const pruebaController = new PruebaController();
exports.default = pruebaController;
