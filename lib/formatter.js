"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var strCamelToSnake = function (str) { return str.replace(/([A-Z])/g, function (s) { return '_' + s.charAt(0).toLowerCase(); }); };
var strCamelToKebab = function (str) { return str.replace(/([A-Z])/g, function (s) { return '-' + s.charAt(0).toLowerCase(); }); };
var strCamelToPascal = function (str) { return str.charAt(0).toUpperCase() + str.slice(1); };
var strSnakeToCamel = function (str) { return str.replace(/_./g, function (s) { return s.charAt(1).toUpperCase(); }); };
var strSnakeToKebab = function (str) { return strCamelToKebab(strSnakeToCamel(str)); };
var strSnakeToPascal = function (str) { return strCamelToPascal(strSnakeToCamel(str)); };
var strKebabToCamel = function (str) { return str.replace(/-./g, function (s) { return s.charAt(1).toUpperCase(); }); };
var strKebabToSnake = function (str) { return strCamelToSnake(strKebabToCamel(str)); };
var strKebabToPascal = function (str) { return strCamelToPascal(strKebabToCamel(str)); };
var strPascalToCamel = function (str) { return str.charAt(0).toLowerCase() + str.slice(1); };
var strPascalToSnake = function (str) { return strCamelToSnake(strPascalToCamel(str)); };
var strPascalToKebab = function (str) { return strCamelToKebab(strPascalToCamel(str)); };
var formatter = function (target, converter) {
    switch (typeof target) {
        case 'string':
            return converter(target);
        case 'object':
            return Object.keys(target).reduce(function (acc, cv) {
                var _a;
                return (__assign({}, acc, (_a = {}, _a[converter(cv)] = target[cv], _a)));
            }, {});
        default:
            return new Error('Failed to convert.');
    }
};
exports.camelToSnake = function (target) { return formatter(target, strCamelToSnake); };
exports.camelToPascal = function (target) { return formatter(target, strCamelToPascal); };
exports.camelToKebab = function (target) { return formatter(target, strCamelToKebab); };
exports.snakeToCamel = function (target) { return formatter(target, strSnakeToCamel); };
exports.snakeToPascal = function (target) { return formatter(target, strSnakeToPascal); };
exports.snakeToKebab = function (target) { return formatter(target, strSnakeToKebab); };
exports.kebabToCamel = function (target) { return formatter(target, strKebabToCamel); };
exports.kebabToSnake = function (target) { return formatter(target, strKebabToSnake); };
exports.kebabToPascal = function (target) { return formatter(target, strKebabToPascal); };
exports.pascalToCamel = function (target) { return formatter(target, strPascalToCamel); };
exports.pascalToSnake = function (target) { return formatter(target, strPascalToSnake); };
exports.pascalToKebab = function (target) { return formatter(target, strPascalToKebab); };
