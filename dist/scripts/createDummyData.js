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
const users_model_1 = require("../database/users/users.model");
const database_1 = require("../database/database");
(() => __awaiter(void 0, void 0, void 0, function* () {
    (0, database_1.connect)();
    const users = [
        { firstName: "Jacqueline", lastName: "Selbach", age: 27 },
        { firstName: "Mark", lastName: "Perov", age: 31 }
    ];
    try {
        for (const user of users) {
            yield users_model_1.UserModel.create(user);
            console.log(`Created user ${user.firstName} ${user.lastName}`);
        }
        (0, database_1.disconnect)();
    }
    catch (e) {
        console.log(e);
    }
}))();
//# sourceMappingURL=createDummyData.js.map