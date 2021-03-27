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
import * as runtime from '../runtime';
import { Symbol } from '../models';
export interface ListSymbolsRequest {
    type: ListSymbolsTypeEnum;
}
/**
 *
 */
export declare class ListApi extends runtime.BaseAPI {
    /**
     * Get list of symbols
     */
    listSymbolsRaw(requestParameters: ListSymbolsRequest): Promise<runtime.ApiResponse<Array<Symbol>>>;
    /**
     * Get list of symbols
     */
    listSymbols(requestParameters: ListSymbolsRequest): Promise<Array<Symbol>>;
}
/**
    * @export
    * @enum {string}
    */
export declare enum ListSymbolsTypeEnum {
    Stock = "stock",
    AvailableTraded = "available-traded",
    Etf = "etf"
}
