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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListApi = exports.ListApiFactory = exports.ListApiFp = exports.ListApiAxiosParamCreator = exports.HistoryApi = exports.HistoryApiFactory = exports.HistoryApiFp = exports.HistoryApiAxiosParamCreator = exports.CompanyValuationApi = exports.CompanyValuationApiFactory = exports.CompanyValuationApiFp = exports.CompanyValuationApiAxiosParamCreator = void 0;
const axios_1 = __importDefault(require("axios"));
// Some imports not used depending on template conditions
// @ts-ignore
const common_1 = require("./common");
// @ts-ignore
const base_1 = require("./base");
/**
 * CompanyValuationApi - axios parameter creator
 * @export
 */
const CompanyValuationApiAxiosParamCreator = function (configuration) {
    return {
        /**
         *
         * @summary Get the Company profile
         * @param {string} symbol Name of ticker
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        profile: (symbol, options = {}) => __awaiter(this, void 0, void 0, function* () {
            // verify required parameter 'symbol' is not null or undefined
            common_1.assertParamExists('profile', 'symbol', symbol);
            const localVarPath = `/profile/{symbol}`
                .replace(`{${"symbol"}}`, encodeURIComponent(String(symbol)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'GET' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication api_key required
            yield common_1.setApiKeyToObject(localVarQueryParameter, "apikey", configuration);
            common_1.setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            return {
                url: common_1.toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        }),
        /**
         *
         * @summary Get the Company Quote
         * @param {string} symbol Name of ticker
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        quote: (symbol, options = {}) => __awaiter(this, void 0, void 0, function* () {
            // verify required parameter 'symbol' is not null or undefined
            common_1.assertParamExists('quote', 'symbol', symbol);
            const localVarPath = `/quote/{symbol}`
                .replace(`{${"symbol"}}`, encodeURIComponent(String(symbol)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'GET' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication api_key required
            yield common_1.setApiKeyToObject(localVarQueryParameter, "apikey", configuration);
            common_1.setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            return {
                url: common_1.toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        }),
    };
};
exports.CompanyValuationApiAxiosParamCreator = CompanyValuationApiAxiosParamCreator;
/**
 * CompanyValuationApi - functional programming interface
 * @export
 */
const CompanyValuationApiFp = function (configuration) {
    const localVarAxiosParamCreator = exports.CompanyValuationApiAxiosParamCreator(configuration);
    return {
        /**
         *
         * @summary Get the Company profile
         * @param {string} symbol Name of ticker
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        profile(symbol, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield localVarAxiosParamCreator.profile(symbol, options);
                return common_1.createRequestFunction(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
            });
        },
        /**
         *
         * @summary Get the Company Quote
         * @param {string} symbol Name of ticker
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        quote(symbol, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield localVarAxiosParamCreator.quote(symbol, options);
                return common_1.createRequestFunction(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
            });
        },
    };
};
exports.CompanyValuationApiFp = CompanyValuationApiFp;
/**
 * CompanyValuationApi - factory interface
 * @export
 */
const CompanyValuationApiFactory = function (configuration, basePath, axios) {
    const localVarFp = exports.CompanyValuationApiFp(configuration);
    return {
        /**
         *
         * @summary Get the Company profile
         * @param {string} symbol Name of ticker
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        profile(symbol, options) {
            return localVarFp.profile(symbol, options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @summary Get the Company Quote
         * @param {string} symbol Name of ticker
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        quote(symbol, options) {
            return localVarFp.quote(symbol, options).then((request) => request(axios, basePath));
        },
    };
};
exports.CompanyValuationApiFactory = CompanyValuationApiFactory;
/**
 * CompanyValuationApi - object-oriented interface
 * @export
 * @class CompanyValuationApi
 * @extends {BaseAPI}
 */
class CompanyValuationApi extends base_1.BaseAPI {
    /**
     *
     * @summary Get the Company profile
     * @param {string} symbol Name of ticker
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CompanyValuationApi
     */
    profile(symbol, options) {
        return exports.CompanyValuationApiFp(this.configuration).profile(symbol, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     *
     * @summary Get the Company Quote
     * @param {string} symbol Name of ticker
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CompanyValuationApi
     */
    quote(symbol, options) {
        return exports.CompanyValuationApiFp(this.configuration).quote(symbol, options).then((request) => request(this.axios, this.basePath));
    }
}
exports.CompanyValuationApi = CompanyValuationApi;
/**
 * HistoryApi - axios parameter creator
 * @export
 */
const HistoryApiAxiosParamCreator = function (configuration) {
    return {
        /**
         *
         * @summary Get Ticker price
         * @param {string} symbol Name of ticker
         * @param {string} [from] From date
         * @param {string} [to] To date
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        dailyPrices: (symbol, from, to, options = {}) => __awaiter(this, void 0, void 0, function* () {
            // verify required parameter 'symbol' is not null or undefined
            common_1.assertParamExists('dailyPrices', 'symbol', symbol);
            const localVarPath = `/historical-price-full/{symbol}`
                .replace(`{${"symbol"}}`, encodeURIComponent(String(symbol)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'GET' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication api_key required
            yield common_1.setApiKeyToObject(localVarQueryParameter, "apikey", configuration);
            if (from !== undefined) {
                localVarQueryParameter['from'] = (from instanceof Date) ?
                    from.toISOString().substr(0, 10) :
                    from;
            }
            if (to !== undefined) {
                localVarQueryParameter['to'] = (to instanceof Date) ?
                    to.toISOString().substr(0, 10) :
                    to;
            }
            common_1.setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            return {
                url: common_1.toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        }),
        /**
         *
         * @summary Get Ticker price
         * @param {string} symbol Name of ticker
         * @param {'1min' | '5min' | '15min' | '30min' | '1hour' | '4hour'} resolution Time resolution
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        intraDayPrices: (symbol, resolution, options = {}) => __awaiter(this, void 0, void 0, function* () {
            // verify required parameter 'symbol' is not null or undefined
            common_1.assertParamExists('intraDayPrices', 'symbol', symbol);
            // verify required parameter 'resolution' is not null or undefined
            common_1.assertParamExists('intraDayPrices', 'resolution', resolution);
            const localVarPath = `/historical-chart/{resolution}/{symbol}`
                .replace(`{${"symbol"}}`, encodeURIComponent(String(symbol)))
                .replace(`{${"resolution"}}`, encodeURIComponent(String(resolution)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'GET' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication api_key required
            yield common_1.setApiKeyToObject(localVarQueryParameter, "apikey", configuration);
            common_1.setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            return {
                url: common_1.toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        }),
    };
};
exports.HistoryApiAxiosParamCreator = HistoryApiAxiosParamCreator;
/**
 * HistoryApi - functional programming interface
 * @export
 */
const HistoryApiFp = function (configuration) {
    const localVarAxiosParamCreator = exports.HistoryApiAxiosParamCreator(configuration);
    return {
        /**
         *
         * @summary Get Ticker price
         * @param {string} symbol Name of ticker
         * @param {string} [from] From date
         * @param {string} [to] To date
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        dailyPrices(symbol, from, to, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield localVarAxiosParamCreator.dailyPrices(symbol, from, to, options);
                return common_1.createRequestFunction(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
            });
        },
        /**
         *
         * @summary Get Ticker price
         * @param {string} symbol Name of ticker
         * @param {'1min' | '5min' | '15min' | '30min' | '1hour' | '4hour'} resolution Time resolution
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        intraDayPrices(symbol, resolution, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield localVarAxiosParamCreator.intraDayPrices(symbol, resolution, options);
                return common_1.createRequestFunction(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
            });
        },
    };
};
exports.HistoryApiFp = HistoryApiFp;
/**
 * HistoryApi - factory interface
 * @export
 */
const HistoryApiFactory = function (configuration, basePath, axios) {
    const localVarFp = exports.HistoryApiFp(configuration);
    return {
        /**
         *
         * @summary Get Ticker price
         * @param {string} symbol Name of ticker
         * @param {string} [from] From date
         * @param {string} [to] To date
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        dailyPrices(symbol, from, to, options) {
            return localVarFp.dailyPrices(symbol, from, to, options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @summary Get Ticker price
         * @param {string} symbol Name of ticker
         * @param {'1min' | '5min' | '15min' | '30min' | '1hour' | '4hour'} resolution Time resolution
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        intraDayPrices(symbol, resolution, options) {
            return localVarFp.intraDayPrices(symbol, resolution, options).then((request) => request(axios, basePath));
        },
    };
};
exports.HistoryApiFactory = HistoryApiFactory;
/**
 * HistoryApi - object-oriented interface
 * @export
 * @class HistoryApi
 * @extends {BaseAPI}
 */
class HistoryApi extends base_1.BaseAPI {
    /**
     *
     * @summary Get Ticker price
     * @param {string} symbol Name of ticker
     * @param {string} [from] From date
     * @param {string} [to] To date
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof HistoryApi
     */
    dailyPrices(symbol, from, to, options) {
        return exports.HistoryApiFp(this.configuration).dailyPrices(symbol, from, to, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     *
     * @summary Get Ticker price
     * @param {string} symbol Name of ticker
     * @param {'1min' | '5min' | '15min' | '30min' | '1hour' | '4hour'} resolution Time resolution
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof HistoryApi
     */
    intraDayPrices(symbol, resolution, options) {
        return exports.HistoryApiFp(this.configuration).intraDayPrices(symbol, resolution, options).then((request) => request(this.axios, this.basePath));
    }
}
exports.HistoryApi = HistoryApi;
/**
 * ListApi - axios parameter creator
 * @export
 */
const ListApiAxiosParamCreator = function (configuration) {
    return {
        /**
         *
         * @summary Get list of symbols
         * @param {'stock' | 'available-traded' | 'etf'} type Type of symbols to list
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listSymbols: (type, options = {}) => __awaiter(this, void 0, void 0, function* () {
            // verify required parameter 'type' is not null or undefined
            common_1.assertParamExists('listSymbols', 'type', type);
            const localVarPath = `/{type}/list`
                .replace(`{${"type"}}`, encodeURIComponent(String(type)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'GET' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication api_key required
            yield common_1.setApiKeyToObject(localVarQueryParameter, "apikey", configuration);
            common_1.setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            return {
                url: common_1.toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        }),
    };
};
exports.ListApiAxiosParamCreator = ListApiAxiosParamCreator;
/**
 * ListApi - functional programming interface
 * @export
 */
const ListApiFp = function (configuration) {
    const localVarAxiosParamCreator = exports.ListApiAxiosParamCreator(configuration);
    return {
        /**
         *
         * @summary Get list of symbols
         * @param {'stock' | 'available-traded' | 'etf'} type Type of symbols to list
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listSymbols(type, options) {
            return __awaiter(this, void 0, void 0, function* () {
                const localVarAxiosArgs = yield localVarAxiosParamCreator.listSymbols(type, options);
                return common_1.createRequestFunction(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
            });
        },
    };
};
exports.ListApiFp = ListApiFp;
/**
 * ListApi - factory interface
 * @export
 */
const ListApiFactory = function (configuration, basePath, axios) {
    const localVarFp = exports.ListApiFp(configuration);
    return {
        /**
         *
         * @summary Get list of symbols
         * @param {'stock' | 'available-traded' | 'etf'} type Type of symbols to list
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listSymbols(type, options) {
            return localVarFp.listSymbols(type, options).then((request) => request(axios, basePath));
        },
    };
};
exports.ListApiFactory = ListApiFactory;
/**
 * ListApi - object-oriented interface
 * @export
 * @class ListApi
 * @extends {BaseAPI}
 */
class ListApi extends base_1.BaseAPI {
    /**
     *
     * @summary Get list of symbols
     * @param {'stock' | 'available-traded' | 'etf'} type Type of symbols to list
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ListApi
     */
    listSymbols(type, options) {
        return exports.ListApiFp(this.configuration).listSymbols(type, options).then((request) => request(this.axios, this.basePath));
    }
}
exports.ListApi = ListApi;
//# sourceMappingURL=api.js.map