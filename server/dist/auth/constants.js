"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jwtConstants = void 0;
exports.jwtConstants = {
    secret: (process.env.NODE_ENV === 'production') ? process.env.JWT_SECRET : 'secretKey'
};
//# sourceMappingURL=constants.js.map