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
exports.findByAge = exports.findOneOrCreate = void 0;
function findOneOrCreate({ firstName, lastName, age, }) {
    return __awaiter(this, void 0, void 0, function* () {
        const record = yield this.findOne({ firstName, lastName, age });
        if (record) {
            return record;
        }
        else {
            return this.create({ firstName, lastName, age });
        }
    });
}
exports.findOneOrCreate = findOneOrCreate;
function findByAge(min, max) {
    return __awaiter(this, void 0, void 0, function* () {
        return this.find({ age: { $gte: min || 0, $lte: max || Infinity } });
    });
}
exports.findByAge = findByAge;
//# sourceMappingURL=users.statics.js.map