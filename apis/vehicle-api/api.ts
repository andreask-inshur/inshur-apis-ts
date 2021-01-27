// tslint:disable
/**
 * vehicle-v1
 * Vehicle API  Handles integration with vehicle registration authorities to retrieve verified vehicle details. 
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as globalImportUrl from 'url';
import { Configuration } from './configuration';
import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from './base';

/**
 * JSON API message.
 * @export
 * @interface ApiMessage
 */
export interface ApiMessage {
    /**
     * HTTP status code.
     * @type {number}
     * @memberof ApiMessage
     */
    status?: number;
    /**
     * HTTP status text.
     * @type {string}
     * @memberof ApiMessage
     */
    error?: string;
    /**
     * Custom message.
     * @type {string}
     * @memberof ApiMessage
     */
    message?: string;
}
/**
 * Related platform tenant.
 * @export
 * @enum {string}
 */
export enum Tenant {
    INSHUR = 'INSHUR'
}

/**
 * Vehicle details. Base Feature Vehicle patch object.
 * @export
 * @interface Vehicle
 */
export interface Vehicle {
    /**
     * Vehicle registration number
     * @type {string}
     * @memberof Vehicle
     */
    registrationNumber: string;
    /**
     * Vehicle Identification Number
     * @type {string}
     * @memberof Vehicle
     */
    vin: string;
    /**
     * Vehicle type
     * @type {string}
     * @memberof Vehicle
     */
    type: string;
    /**
     * Vehicle body type
     * @type {string}
     * @memberof Vehicle
     */
    bodyType: string;
    /**
     * Vehicle make
     * @type {string}
     * @memberof Vehicle
     */
    make: string;
    /**
     * Vehicle year of manufacture
     * @type {string}
     * @memberof Vehicle
     */
    yearOfManufacture: string;
    /**
     * Vehicle transmission type
     * @type {string}
     * @memberof Vehicle
     */
    transmissionType: string;
    /**
     * Vehicle gross weight in kilograms
     * @type {number}
     * @memberof Vehicle
     */
    grossWeightKgs: number;
    /**
     * Vehicle engine size in cubic centimeters
     * @type {number}
     * @memberof Vehicle
     */
    engineCapacityCc: number;
    /**
     * Estimated vehicle value. Zero-based money value.
     * @type {number}
     * @memberof Vehicle
     */
    value: number;
    /**
     * Vehicle number of seats
     * @type {number}
     * @memberof Vehicle
     */
    numberOfSeats: number;
}
/**
 * Vehicle lookup provider.
 * @export
 * @enum {string}
 */
export enum VehicleLookupProvider {
    CDL = 'CDL'
}


/**
 * EndPointsApi - axios parameter creator
 * @export
 */
export const EndPointsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Look up UK information information from CDL API
         * @summary Retrieve UK Vechile Details
         * @param {string} registrationNumber UK vehicle registration number
         * @param {Tenant} [xINSHURTenant] Platform tenant.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCdlVehicle: async (registrationNumber: string, xINSHURTenant?: Tenant, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'registrationNumber' is not null or undefined
            if (registrationNumber === null || registrationNumber === undefined) {
                throw new RequiredError('registrationNumber','Required parameter registrationNumber was null or undefined when calling getCdlVehicle.');
            }
            const localVarPath = `/cdl`;
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication tokenAuth required
            // http bearer authentication required
            if (configuration && configuration.accessToken) {
                const accessToken = typeof configuration.accessToken === 'function'
                    ? configuration.accessToken()
                    : configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + accessToken;
            }

            if (registrationNumber !== undefined) {
                localVarQueryParameter['registrationNumber'] = registrationNumber;
            }

            if (xINSHURTenant !== undefined && xINSHURTenant !== null) {
                localVarHeaderParameter['X-INSHUR-Tenant'] = String(JSON.stringify(xINSHURTenant));
            }


    
            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns internal service deployment metadata.  Requires role(s): ```monitor``` 
         * @summary Service Metadata
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getMetadata: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/metadata`;
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication tokenAuth required
            // http bearer authentication required
            if (configuration && configuration.accessToken) {
                const accessToken = typeof configuration.accessToken === 'function'
                    ? configuration.accessToken()
                    : configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + accessToken;
            }


    
            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * EndPointsApi - functional programming interface
 * @export
 */
export const EndPointsApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Look up UK information information from CDL API
         * @summary Retrieve UK Vechile Details
         * @param {string} registrationNumber UK vehicle registration number
         * @param {Tenant} [xINSHURTenant] Platform tenant.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getCdlVehicle(registrationNumber: string, xINSHURTenant?: Tenant, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Vehicle>> {
            const localVarAxiosArgs = await EndPointsApiAxiosParamCreator(configuration).getCdlVehicle(registrationNumber, xINSHURTenant, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Returns internal service deployment metadata.  Requires role(s): ```monitor``` 
         * @summary Service Metadata
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getMetadata(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<{ [key: string]: object; }>> {
            const localVarAxiosArgs = await EndPointsApiAxiosParamCreator(configuration).getMetadata(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * EndPointsApi - factory interface
 * @export
 */
export const EndPointsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Look up UK information information from CDL API
         * @summary Retrieve UK Vechile Details
         * @param {string} registrationNumber UK vehicle registration number
         * @param {Tenant} [xINSHURTenant] Platform tenant.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCdlVehicle(registrationNumber: string, xINSHURTenant?: Tenant, options?: any): AxiosPromise<Vehicle> {
            return EndPointsApiFp(configuration).getCdlVehicle(registrationNumber, xINSHURTenant, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns internal service deployment metadata.  Requires role(s): ```monitor``` 
         * @summary Service Metadata
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getMetadata(options?: any): AxiosPromise<{ [key: string]: object; }> {
            return EndPointsApiFp(configuration).getMetadata(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * EndPointsApi - object-oriented interface
 * @export
 * @class EndPointsApi
 * @extends {BaseAPI}
 */
export class EndPointsApi extends BaseAPI {
    /**
     * Look up UK information information from CDL API
     * @summary Retrieve UK Vechile Details
     * @param {string} registrationNumber UK vehicle registration number
     * @param {Tenant} [xINSHURTenant] Platform tenant.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EndPointsApi
     */
    public getCdlVehicle(registrationNumber: string, xINSHURTenant?: Tenant, options?: any) {
        return EndPointsApiFp(this.configuration).getCdlVehicle(registrationNumber, xINSHURTenant, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns internal service deployment metadata.  Requires role(s): ```monitor``` 
     * @summary Service Metadata
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EndPointsApi
     */
    public getMetadata(options?: any) {
        return EndPointsApiFp(this.configuration).getMetadata(options).then((request) => request(this.axios, this.basePath));
    }

}

