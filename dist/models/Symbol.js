"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * Financial Modeling Prep API
 * Financial Modeling Prep API
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: sam@sddproductions.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SymbolToJSON = exports.SymbolFromJSONTyped = exports.SymbolFromJSON = void 0;
function SymbolFromJSON(json) {
    return SymbolFromJSONTyped(json, false);
}
exports.SymbolFromJSON = SymbolFromJSON;
function SymbolFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'symbol': json['symbol'],
        'name': json['name'],
        'price': json['price'],
        'exchange': json['exchange'],
    };
}
exports.SymbolFromJSONTyped = SymbolFromJSONTyped;
function SymbolToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'symbol': value.symbol,
        'name': value.name,
        'price': value.price,
        'exchange': value.exchange,
    };
}
exports.SymbolToJSON = SymbolToJSON;
//# sourceMappingURL=Symbol.js.map