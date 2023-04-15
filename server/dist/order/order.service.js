"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderService = void 0;
const user_entity_1 = require("../users/entities/user.entity");
const typeorm_1 = require("typeorm");
const common_1 = require("@nestjs/common");
let OrderService = class OrderService {
    constructor(orderRepository) {
        this.orderRepository = orderRepository;
    }
    async create(createOrderDto, id) {
        const user = new user_entity_1.User();
        user.id = id;
        createOrderDto.user = [user];
        const response = await await this.orderRepository.save(Object.assign(Object.assign({}, createOrderDto), { creatorId: id }));
        return response;
    }
    async delete(id) {
        return await this.orderRepository.delete({ id });
    }
    async update(updateOrderDto, orderId) {
        return await this.orderRepository.update(orderId, Object.assign({}, updateOrderDto));
    }
};
OrderService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('ORDER_REPOSYTORY')),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], OrderService);
exports.OrderService = OrderService;
//# sourceMappingURL=order.service.js.map