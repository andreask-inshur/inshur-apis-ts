// tslint:disable
/**
 * driver-v1
 * Driver API  Handles integration with drivers license authorities to retrieve verified driver details. 
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
 * Driver conviction.
 * @export
 * @interface Conviction
 */
export interface Conviction {
    /**
     * Offense code. These codes vary across the global platform based on the product juristiction. The codes are typically sourced from the drivers license authority associated with the product via driverLookup setting. Rating implementations must be compatible with codes based on the product juristiction.
     * @type {string}
     * @memberof Conviction
     */
    code: string;
    /**
     * Conviction date.
     * @type {string}
     * @memberof Conviction
     */
    date: string;
}
/**
 * Driver details. Base Feature Driver patch object.
 * @export
 * @interface Driver
 */
export interface Driver {
    /**
     * Drivers date of birth.
     * @type {string}
     * @memberof Driver
     */
    dob: string;
    /**
     * 
     * @type {DriversLicense}
     * @memberof Driver
     */
    driversLicense: DriversLicense;
    /**
     * List of known convictions for this driver.
     * @type {Array<Conviction>}
     * @memberof Driver
     */
    convictions: Array<Conviction>;
}
/**
 * Driver or drivers license lookup provider.
 * @export
 * @enum {string}
 */
export enum DriverLookupProvider {
    MYLICENCE = 'MYLICENCE'
}

/**
 * Driver license details
 * @export
 * @interface DriversLicense
 */
export interface DriversLicense {
    /**
     * Drivers license number.
     * @type {string}
     * @memberof DriversLicense
     */
    dln: string;
    /**
     * Current status of the driver\'s licence. Note, each drivers license authority will maintain a different set of status codes. Rating criteria for each product should adjust accordingly.
     * @type {string}
     * @memberof DriversLicense
     */
    status: string;
    /**
     * Number of years that the driver has held this license.
     * @type {number}
     * @memberof DriversLicense
     */
    numberOfYearsHeld: number;
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
 * EndPointsApi - axios parameter creator
 * @export
 */
export const EndPointsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
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
        /**
         * Look up UK driver information from DVLA MyLicence API
         * @summary Retrieve UK Driver Details (MyLicence)
         * @param {string} dln UK drivers license number
         * @param {'NEW_BUSINESS' | 'RENEWAL'} context Reason for the license lookup.
         * @param {Tenant} [xINSHURTenant] Platform tenant.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getMyLicenceDriver: async (dln: string, context: 'NEW_BUSINESS' | 'RENEWAL', xINSHURTenant?: Tenant, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'dln' is not null or undefined
            if (dln === null || dln === undefined) {
                throw new RequiredError('dln','Required parameter dln was null or undefined when calling getMyLicenceDriver.');
            }
            // verify required parameter 'context' is not null or undefined
            if (context === null || context === undefined) {
                throw new RequiredError('context','Required parameter context was null or undefined when calling getMyLicenceDriver.');
            }
            const localVarPath = `/mylicence`;
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

            if (dln !== undefined) {
                localVarQueryParameter['dln'] = dln;
            }

            if (context !== undefined) {
                localVarQueryParameter['context'] = context;
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
    }
};

/**
 * EndPointsApi - functional programming interface
 * @export
 */
export const EndPointsApiFp = function(configuration?: Configuration) {
    return {
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
        /**
         * Look up UK driver information from DVLA MyLicence API
         * @summary Retrieve UK Driver Details (MyLicence)
         * @param {string} dln UK drivers license number
         * @param {'NEW_BUSINESS' | 'RENEWAL'} context Reason for the license lookup.
         * @param {Tenant} [xINSHURTenant] Platform tenant.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getMyLicenceDriver(dln: string, context: 'NEW_BUSINESS' | 'RENEWAL', xINSHURTenant?: Tenant, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Driver>> {
            const localVarAxiosArgs = await EndPointsApiAxiosParamCreator(configuration).getMyLicenceDriver(dln, context, xINSHURTenant, options);
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
         * Returns internal service deployment metadata.  Requires role(s): ```monitor``` 
         * @summary Service Metadata
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getMetadata(options?: any): AxiosPromise<{ [key: string]: object; }> {
            return EndPointsApiFp(configuration).getMetadata(options).then((request) => request(axios, basePath));
        },
        /**
         * Look up UK driver information from DVLA MyLicence API
         * @summary Retrieve UK Driver Details (MyLicence)
         * @param {string} dln UK drivers license number
         * @param {'NEW_BUSINESS' | 'RENEWAL'} context Reason for the license lookup.
         * @param {Tenant} [xINSHURTenant] Platform tenant.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getMyLicenceDriver(dln: string, context: 'NEW_BUSINESS' | 'RENEWAL', xINSHURTenant?: Tenant, options?: any): AxiosPromise<Driver> {
            return EndPointsApiFp(configuration).getMyLicenceDriver(dln, context, xINSHURTenant, options).then((request) => request(axios, basePath));
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
     * Returns internal service deployment metadata.  Requires role(s): ```monitor``` 
     * @summary Service Metadata
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EndPointsApi
     */
    public getMetadata(options?: any) {
        return EndPointsApiFp(this.configuration).getMetadata(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Look up UK driver information from DVLA MyLicence API
     * @summary Retrieve UK Driver Details (MyLicence)
     * @param {string} dln UK drivers license number
     * @param {'NEW_BUSINESS' | 'RENEWAL'} context Reason for the license lookup.
     * @param {Tenant} [xINSHURTenant] Platform tenant.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EndPointsApi
     */
    public getMyLicenceDriver(dln: string, context: 'NEW_BUSINESS' | 'RENEWAL', xINSHURTenant?: Tenant, options?: any) {
        return EndPointsApiFp(this.configuration).getMyLicenceDriver(dln, context, xINSHURTenant, options).then((request) => request(this.axios, this.basePath));
    }

}


