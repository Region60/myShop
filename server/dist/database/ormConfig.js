"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ormConfig = void 0;
const database_costants_1 = require("./database.costants");
exports.ormConfig = {
    type: database_costants_1.dataBaseConstants.db,
    host: process.env.NODE_ENV === 'production'
        ? database_costants_1.dataBaseConstants.hostProd
        : database_costants_1.dataBaseConstants.hostDev,
    port: database_costants_1.dataBaseConstants.port,
    username: database_costants_1.dataBaseConstants.user,
    password: database_costants_1.dataBaseConstants.password,
    database: database_costants_1.dataBaseConstants.nameDb,
    entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    synchronize: false,
};
//# sourceMappingURL=ormConfig.js.map