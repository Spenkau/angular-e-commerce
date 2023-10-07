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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsController = void 0;
const common_1 = require("@nestjs/common");
const product_service_1 = require("./services/product.service");
let ProductsController = exports.ProductsController = class ProductsController {
    constructor(productService) {
        this.productService = productService;
    }
    findAll() {
        try {
            return this.productService.findAll();
        }
        catch (err) {
            throw new Error('Failure:' + err);
        }
    }
    getCategories() {
        try {
            return this.productService.getCategories();
        }
        catch (err) {
            throw new Error('Failure:' + err);
        }
    }
    getProductsInCategory(category) {
        try {
            return this.productService.getProductsInCategory(category);
        }
        catch (err) {
            throw new Error('Failure:' + err);
        }
    }
};
__decorate([
    (0, common_1.Get)('get-products'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('get-categories'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "getCategories", null);
__decorate([
    (0, common_1.Get)('get-product-by-category'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "getProductsInCategory", null);
exports.ProductsController = ProductsController = __decorate([
    (0, common_1.Controller)('products'),
    __metadata("design:paramtypes", [product_service_1.ProductService])
], ProductsController);
//# sourceMappingURL=products.controller.js.map