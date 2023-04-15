"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProviders = void 0;
const ormConfig_1 = require("./ormConfig");
const typeorm_1 = require("typeorm");
exports.databaseProviders = [
    {
        provide: "DATA_SOURCE",
        useFactory: async () => {
            const dataSource = new typeorm_1.DataSource(ormConfig_1.ormConfig);
            return dataSource.initialize();
        },
    },
];
//# sourceMappingURL=database.providers.js.map