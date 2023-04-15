"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.photoProvider = void 0;
const photo_entity_1 = require("./entities/photo.entity");
exports.photoProvider = [
    {
        provide: 'PHOTO_REPOSITORY',
        useFactory: (dataSource) => dataSource.getRepository(photo_entity_1.Photo),
        inject: ['DATA_SOURCE']
    }
];
//# sourceMappingURL=photo.provider.js.map