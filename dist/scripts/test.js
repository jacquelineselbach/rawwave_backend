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
const database_1 = require("../database/database");
(() => __awaiter(void 0, void 0, void 0, function* () {
    const db = (0, database_1.connect)();
    // test static methods
    const twenties = yield db.UserModel.findByAge(20, 29);
    const newUser = yield db.UserModel.findOneOrCreate({
        firstName: "Mike",
        lastName: "Smith",
        age: 57,
    });
    const existingUser = yield db.UserModel.findOneOrCreate({
        firstName: "Emma",
        lastName: "Bradley",
        age: 34,
    });
    const numOfUsers = (yield db.UserModel.find()).length;
    console.log({ twenties, newUser, existingUser, numOfUsers });
    // test instance methods
    yield existingUser.setLastUpdated();
    const siblings = yield existingUser.sameLastName();
    console.log({ siblings });
    (0, database_1.disconnect)();
}))();
//# sourceMappingURL=test.js.map