"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataBaseConstants = void 0;
const os = require("os");
const systemOs = os.type();
exports.dataBaseConstants = {
    db: "postgres",
    hostProd: "db",
    hostDev: systemOs === "Windows_NT" ? "localhost" : "db",
    port: 5432,
    user: "user01",
    password: "qwertyui",
    nameDb: "test",
};
//# sourceMappingURL=database.costants.js.map