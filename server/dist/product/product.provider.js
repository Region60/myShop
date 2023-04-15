"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productProvider = void 0;
const product_entity_1 = require("./entities/product.entity");
exports.productProvider = [
    {
        provide: 'PRODUCT_REPOSITORY',
        useFactory: (dataSource) => dataSource.getRepository(product_entity_1.Product),
        inject: ['DATA_SOURCE']
    }
];
//# sourceMappingURL=product.provider.js.map