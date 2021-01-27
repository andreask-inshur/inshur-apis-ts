// tslint:disable
/**
 * question-v1
 * Question API Schema
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
 * An action step
 * @export
 * @interface ActionStep
 */
export interface ActionStep {
    /**
     * Unique step identifier
     * @type {string}
     * @memberof ActionStep
     */
    stepId?: string;
    /**
     * Type of step. Must be \'action\'.
     * @type {string}
     * @memberof ActionStep
     */
    type?: ActionStepTypeEnum;
    /**
     * 
     * @type {StepKey}
     * @memberof ActionStep
     */
    goTo?: StepKey;
    /**
     * 
     * @type {CopyAction | SetAction}
     * @memberof ActionStep
     */
    action?: CopyAction | SetAction;
}

/**
    * @export
    * @enum {string}
    */
export enum ActionStepTypeEnum {
    ACTION = 'ACTION'
}

/**
 * 
 * @export
 * @interface ActionStepBody
 */
export interface ActionStepBody {
    /**
     * Type of step. Must be \'action\'.
     * @type {string}
     * @memberof ActionStepBody
     */
    type?: ActionStepBodyTypeEnum;
    /**
     * 
     * @type {StepKey}
     * @memberof ActionStepBody
     */
    goTo?: StepKey;
    /**
     * 
     * @type {CopyAction | SetAction}
     * @memberof ActionStepBody
     */
    action?: CopyAction | SetAction;
}

/**
    * @export
    * @enum {string}
    */
export enum ActionStepBodyTypeEnum {
    ACTION = 'ACTION'
}

/**
 * An address question
 * @export
 * @interface AddressQuestion
 */
export interface AddressQuestion {
    /**
     * Question text
     * @type {string}
     * @memberof AddressQuestion
     */
    text: string;
    /**
     * 
     * @type {Path}
     * @memberof AddressQuestion
     */
    answerPath: Path;
    /**
     * 
     * @type {StepKey}
     * @memberof AddressQuestion
     */
    goTo: StepKey;
    /**
     * Type of question. Must be \'address\'.
     * @type {string}
     * @memberof AddressQuestion
     */
    type: AddressQuestionTypeEnum;
}

/**
    * @export
    * @enum {string}
    */
export enum AddressQuestionTypeEnum {
    ADDRESS = 'ADDRESS'
}

/**
 * 
 * @export
 * @interface AddressQuestionBody
 */
export interface AddressQuestionBody {
    /**
     * Type of question. Must be \'address\'.
     * @type {string}
     * @memberof AddressQuestionBody
     */
    type: AddressQuestionBodyTypeEnum;
}

/**
    * @export
    * @enum {string}
    */
export enum AddressQuestionBodyTypeEnum {
    ADDRESS = 'ADDRESS'
}

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
 * 
 * @export
 * @interface Choice
 */
export interface Choice {
    /**
     * A choice text
     * @type {string}
     * @memberof Choice
     */
    text: string;
    /**
     * 
     * @type {string | number | boolean | object}
     * @memberof Choice
     */
    value?: string | number | boolean | object;
    /**
     * 
     * @type {StepKey}
     * @memberof Choice
     */
    goTo: StepKey;
}
/**
 * A choice question
 * @export
 * @interface ChoiceQuestion
 */
export interface ChoiceQuestion {
    /**
     * Question text
     * @type {string}
     * @memberof ChoiceQuestion
     */
    text: string;
    /**
     * 
     * @type {Path}
     * @memberof ChoiceQuestion
     */
    answerPath: Path;
    /**
     * 
     * @type {StepKey}
     * @memberof ChoiceQuestion
     */
    goTo: StepKey;
    /**
     * Type of question. Must be \'choice\'.
     * @type {string}
     * @memberof ChoiceQuestion
     */
    type: ChoiceQuestionTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof ChoiceQuestion
     */
    template?: ChoiceQuestionTemplateEnum;
    /**
     * 
     * @type {Array<Choice>}
     * @memberof ChoiceQuestion
     */
    choices: Array<Choice>;
}

/**
    * @export
    * @enum {string}
    */
export enum ChoiceQuestionTypeEnum {
    CHOICE = 'CHOICE'
}
/**
    * @export
    * @enum {string}
    */
export enum ChoiceQuestionTemplateEnum {
    DROPDOWN = 'DROPDOWN',
    BUTTON = 'BUTTON'
}

/**
 * 
 * @export
 * @interface ChoiceQuestionBody
 */
export interface ChoiceQuestionBody {
    /**
     * Type of question. Must be \'choice\'.
     * @type {string}
     * @memberof ChoiceQuestionBody
     */
    type: ChoiceQuestionBodyTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof ChoiceQuestionBody
     */
    template?: ChoiceQuestionBodyTemplateEnum;
    /**
     * 
     * @type {Array<Choice>}
     * @memberof ChoiceQuestionBody
     */
    choices: Array<Choice>;
}

/**
    * @export
    * @enum {string}
    */
export enum ChoiceQuestionBodyTypeEnum {
    CHOICE = 'CHOICE'
}
/**
    * @export
    * @enum {string}
    */
export enum ChoiceQuestionBodyTemplateEnum {
    DROPDOWN = 'DROPDOWN',
    BUTTON = 'BUTTON'
}

/**
 * A copy step
 * @export
 * @interface CopyAction
 */
export interface CopyAction {
    /**
     * Type of action. Must be \'copy\'.
     * @type {string}
     * @memberof CopyAction
     */
    type: CopyActionTypeEnum;
    /**
     * 
     * @type {Path}
     * @memberof CopyAction
     */
    fromPath: Path;
    /**
     * 
     * @type {Path}
     * @memberof CopyAction
     */
    toPath: Path;
}

/**
    * @export
    * @enum {string}
    */
export enum CopyActionTypeEnum {
    COPY = 'COPY'
}

/**
 * 
 * @export
 * @interface CreatedTrait
 */
export interface CreatedTrait {
    /**
     * The UTC date-time stamp that the resource was created. Automatically set by the system.
     * @type {string}
     * @memberof CreatedTrait
     */
    createdOn: string;
    /**
     * Reference to the user or service that created the resource. Automatically set by the system.
     * @type {string}
     * @memberof CreatedTrait
     */
    createdBy: string;
}
/**
 * A currency question
 * @export
 * @interface CurrencyQuestion
 */
export interface CurrencyQuestion {
    /**
     * Question text
     * @type {string}
     * @memberof CurrencyQuestion
     */
    text: string;
    /**
     * 
     * @type {Path}
     * @memberof CurrencyQuestion
     */
    answerPath: Path;
    /**
     * 
     * @type {StepKey}
     * @memberof CurrencyQuestion
     */
    goTo: StepKey;
    /**
     * Type of question. Must be \'currency\'.
     * @type {string}
     * @memberof CurrencyQuestion
     */
    type: CurrencyQuestionTypeEnum;
}

/**
    * @export
    * @enum {string}
    */
export enum CurrencyQuestionTypeEnum {
    CURRENCY = 'CURRENCY'
}

/**
 * 
 * @export
 * @interface CurrencyQuestionBody
 */
export interface CurrencyQuestionBody {
    /**
     * Type of question. Must be \'currency\'.
     * @type {string}
     * @memberof CurrencyQuestionBody
     */
    type: CurrencyQuestionBodyTypeEnum;
}

/**
    * @export
    * @enum {string}
    */
export enum CurrencyQuestionBodyTypeEnum {
    CURRENCY = 'CURRENCY'
}

/**
 * A date question
 * @export
 * @interface DateQuestion
 */
export interface DateQuestion {
    /**
     * Question text
     * @type {string}
     * @memberof DateQuestion
     */
    text: string;
    /**
     * 
     * @type {Path}
     * @memberof DateQuestion
     */
    answerPath: Path;
    /**
     * 
     * @type {StepKey}
     * @memberof DateQuestion
     */
    goTo: StepKey;
    /**
     * Type of question. Must be \'date\'.
     * @type {string}
     * @memberof DateQuestion
     */
    type: DateQuestionTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof DateQuestion
     */
    template: DateQuestionTemplateEnum;
}

/**
    * @export
    * @enum {string}
    */
export enum DateQuestionTypeEnum {
    DATE = 'DATE'
}
/**
    * @export
    * @enum {string}
    */
export enum DateQuestionTemplateEnum {
    DATE = 'DATE',
    DATETIME = 'DATETIME',
    TIME = 'TIME',
    STARTDATE = 'STARTDATE',
    DATEOFBIRTH = 'DATE_OF_BIRTH'
}

/**
 * 
 * @export
 * @interface DateQuestionBody
 */
export interface DateQuestionBody {
    /**
     * Type of question. Must be \'date\'.
     * @type {string}
     * @memberof DateQuestionBody
     */
    type: DateQuestionBodyTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof DateQuestionBody
     */
    template: DateQuestionBodyTemplateEnum;
}

/**
    * @export
    * @enum {string}
    */
export enum DateQuestionBodyTypeEnum {
    DATE = 'DATE'
}
/**
    * @export
    * @enum {string}
    */
export enum DateQuestionBodyTemplateEnum {
    DATE = 'DATE',
    DATETIME = 'DATETIME',
    TIME = 'TIME',
    STARTDATE = 'STARTDATE',
    DATEOFBIRTH = 'DATE_OF_BIRTH'
}

/**
 * Hypermedia link
 * @export
 * @interface HalLink
 */
export interface HalLink {
    /**
     * Hypertext reference
     * @type {string}
     * @memberof HalLink
     */
    href: string;
}
/**
 * HAL/Hypermedia resource charactaristics.
 * @export
 * @interface HalResourceTrait
 */
export interface HalResourceTrait {
    /**
     * Hypermedia links
     * @type {{ [key: string]: object; }}
     * @memberof HalResourceTrait
     */
    _links: { [key: string]: object; };
    /**
     * Hypermedia embedded resources
     * @type {{ [key: string]: object; }}
     * @memberof HalResourceTrait
     */
    _embedded?: { [key: string]: object; };
}
/**
 * A list of paths
 * @export
 * @interface Path
 */
export interface Path {
    /**
     * 
     * @type {Array<string>}
     * @memberof Path
     */
    paths?: Array<string>;
}
/**
 * A payment question
 * @export
 * @interface PaymentQuestion
 */
export interface PaymentQuestion {
    /**
     * Question text
     * @type {string}
     * @memberof PaymentQuestion
     */
    text: string;
    /**
     * 
     * @type {Path}
     * @memberof PaymentQuestion
     */
    answerPath: Path;
    /**
     * 
     * @type {StepKey}
     * @memberof PaymentQuestion
     */
    goTo: StepKey;
    /**
     * Type of question. Must be \'payment\'.
     * @type {string}
     * @memberof PaymentQuestion
     */
    type: PaymentQuestionTypeEnum;
}

/**
    * @export
    * @enum {string}
    */
export enum PaymentQuestionTypeEnum {
    PAYMENT = 'PAYMENT'
}

/**
 * 
 * @export
 * @interface PaymentQuestionBody
 */
export interface PaymentQuestionBody {
    /**
     * Type of question. Must be \'payment\'.
     * @type {string}
     * @memberof PaymentQuestionBody
     */
    type: PaymentQuestionBodyTypeEnum;
}

/**
    * @export
    * @enum {string}
    */
export enum PaymentQuestionBodyTypeEnum {
    PAYMENT = 'PAYMENT'
}

/**
 * A policies question
 * @export
 * @interface PoliciesQuestion
 */
export interface PoliciesQuestion {
    /**
     * Question text
     * @type {string}
     * @memberof PoliciesQuestion
     */
    text: string;
    /**
     * 
     * @type {Path}
     * @memberof PoliciesQuestion
     */
    answerPath: Path;
    /**
     * 
     * @type {StepKey}
     * @memberof PoliciesQuestion
     */
    goTo: StepKey;
    /**
     * Type of question. Must be \'policies\'.
     * @type {string}
     * @memberof PoliciesQuestion
     */
    type: PoliciesQuestionTypeEnum;
}

/**
    * @export
    * @enum {string}
    */
export enum PoliciesQuestionTypeEnum {
    POLICIES = 'POLICIES'
}

/**
 * 
 * @export
 * @interface PoliciesQuestionBody
 */
export interface PoliciesQuestionBody {
    /**
     * Type of question. Must be \'policies\'.
     * @type {string}
     * @memberof PoliciesQuestionBody
     */
    type: PoliciesQuestionBodyTypeEnum;
}

/**
    * @export
    * @enum {string}
    */
export enum PoliciesQuestionBodyTypeEnum {
    POLICIES = 'POLICIES'
}

/**
 * 
 * @export
 * @interface QuestionBase
 */
export interface QuestionBase {
    /**
     * Question text
     * @type {string}
     * @memberof QuestionBase
     */
    text: string;
    /**
     * 
     * @type {Path}
     * @memberof QuestionBase
     */
    answerPath: Path;
    /**
     * 
     * @type {StepKey}
     * @memberof QuestionBase
     */
    goTo: StepKey;
}
/**
 * Question flow defining a customer journey to collect data for the datasheet.
 * @export
 * @interface QuestionFlow
 */
export interface QuestionFlow {
    /**
     * Internal unique identifier.
     * @type {string}
     * @memberof QuestionFlow
     */
    questionFlowId: string;
    /**
     * Major.Minor version number.
     * @type {string}
     * @memberof QuestionFlow
     */
    version: string;
    /**
     * Name of the flow
     * @type {string}
     * @memberof QuestionFlow
     */
    name: string;
    /**
     * Collection of steps in the flow
     * @type {Array<QuestionStep | ActionStep>}
     * @memberof QuestionFlow
     */
    steps: Array<QuestionStep | ActionStep>;
    /**
     * The UTC date-time stamp that the resource was created. Automatically set by the system.
     * @type {string}
     * @memberof QuestionFlow
     */
    createdOn: string;
    /**
     * Reference to the user or service that created the resource. Automatically set by the system.
     * @type {string}
     * @memberof QuestionFlow
     */
    createdBy: string;
    /**
     * Hypermedia links
     * @type {{ [key: string]: object; }}
     * @memberof QuestionFlow
     */
    _links: { [key: string]: object; };
    /**
     * Hypermedia embedded resources
     * @type {{ [key: string]: object; }}
     * @memberof QuestionFlow
     */
    _embedded?: { [key: string]: object; };
}
/**
 * QuestionFlow core data.
 * @export
 * @interface QuestionFlowBody
 */
export interface QuestionFlowBody {
    /**
     * Name of the flow
     * @type {string}
     * @memberof QuestionFlowBody
     */
    name: string;
    /**
     * Collection of steps in the flow
     * @type {Array<QuestionStep | ActionStep>}
     * @memberof QuestionFlowBody
     */
    steps: Array<QuestionStep | ActionStep>;
}
/**
 * Reference to a QuestionFlow resource.
 * @export
 * @interface QuestionFlowKey
 */
export interface QuestionFlowKey {
    /**
     * Internal unique identifier.
     * @type {string}
     * @memberof QuestionFlowKey
     */
    questionFlowId: string;
    /**
     * Major.Minor version number.
     * @type {string}
     * @memberof QuestionFlowKey
     */
    version: string;
}
/**
 * A question step
 * @export
 * @interface QuestionStep
 */
export interface QuestionStep {
    /**
     * Unique step identifier
     * @type {string}
     * @memberof QuestionStep
     */
    stepId?: string;
    /**
     * Type of step. Must be \'question\'.
     * @type {string}
     * @memberof QuestionStep
     */
    type?: QuestionStepTypeEnum;
    /**
     * 
     * @type {TextQuestion | CurrencyQuestion | ChoiceQuestion | DateQuestion | AddressQuestion | PoliciesQuestion | PaymentQuestion | StatementQuestion | VehicleQuestion}
     * @memberof QuestionStep
     */
    question: TextQuestion | CurrencyQuestion | ChoiceQuestion | DateQuestion | AddressQuestion | PoliciesQuestion | PaymentQuestion | StatementQuestion | VehicleQuestion;
}

/**
    * @export
    * @enum {string}
    */
export enum QuestionStepTypeEnum {
    QUESTION = 'QUESTION'
}

/**
 * 
 * @export
 * @interface QuestionStepBody
 */
export interface QuestionStepBody {
    /**
     * Type of step. Must be \'question\'.
     * @type {string}
     * @memberof QuestionStepBody
     */
    type?: QuestionStepBodyTypeEnum;
    /**
     * 
     * @type {TextQuestion | CurrencyQuestion | ChoiceQuestion | DateQuestion | AddressQuestion | PoliciesQuestion | PaymentQuestion | StatementQuestion | VehicleQuestion}
     * @memberof QuestionStepBody
     */
    question: TextQuestion | CurrencyQuestion | ChoiceQuestion | DateQuestion | AddressQuestion | PoliciesQuestion | PaymentQuestion | StatementQuestion | VehicleQuestion;
}

/**
    * @export
    * @enum {string}
    */
export enum QuestionStepBodyTypeEnum {
    QUESTION = 'QUESTION'
}

/**
 * Resource with HAL/Hypermedia support
 * @export
 * @interface Resource
 */
export interface Resource {
    /**
     * The UTC date-time stamp that the resource was created. Automatically set by the system.
     * @type {string}
     * @memberof Resource
     */
    createdOn: string;
    /**
     * Reference to the user or service that created the resource. Automatically set by the system.
     * @type {string}
     * @memberof Resource
     */
    createdBy: string;
    /**
     * Hypermedia links
     * @type {{ [key: string]: object; }}
     * @memberof Resource
     */
    _links: { [key: string]: object; };
    /**
     * Hypermedia embedded resources
     * @type {{ [key: string]: object; }}
     * @memberof Resource
     */
    _embedded?: { [key: string]: object; };
}
/**
 * A set step
 * @export
 * @interface SetAction
 */
export interface SetAction {
    /**
     * Type of action. Must be \'set\'.
     * @type {string}
     * @memberof SetAction
     */
    type: SetActionTypeEnum;
    /**
     * 
     * @type {Path}
     * @memberof SetAction
     */
    path: Path;
    /**
     * 
     * @type {string | number | boolean | object}
     * @memberof SetAction
     */
    value: string | number | boolean | object;
}

/**
    * @export
    * @enum {string}
    */
export enum SetActionTypeEnum {
    SET = 'SET'
}

/**
 * A statement question
 * @export
 * @interface StatementQuestion
 */
export interface StatementQuestion {
    /**
     * Question text
     * @type {string}
     * @memberof StatementQuestion
     */
    text: string;
    /**
     * 
     * @type {Path}
     * @memberof StatementQuestion
     */
    answerPath: Path;
    /**
     * 
     * @type {StepKey}
     * @memberof StatementQuestion
     */
    goTo: StepKey;
    /**
     * Type of question. Must be \'statement\'.
     * @type {string}
     * @memberof StatementQuestion
     */
    type: StatementQuestionTypeEnum;
}

/**
    * @export
    * @enum {string}
    */
export enum StatementQuestionTypeEnum {
    STATEMENT = 'STATEMENT'
}

/**
 * 
 * @export
 * @interface StatementQuestionBody
 */
export interface StatementQuestionBody {
    /**
     * Type of question. Must be \'statement\'.
     * @type {string}
     * @memberof StatementQuestionBody
     */
    type: StatementQuestionBodyTypeEnum;
}

/**
    * @export
    * @enum {string}
    */
export enum StatementQuestionBodyTypeEnum {
    STATEMENT = 'STATEMENT'
}

/**
 * Reference to a step
 * @export
 * @interface StepKey
 */
export interface StepKey {
    /**
     * Unique step identifier
     * @type {string}
     * @memberof StepKey
     */
    stepId?: string;
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
 * A text question
 * @export
 * @interface TextQuestion
 */
export interface TextQuestion {
    /**
     * Question text
     * @type {string}
     * @memberof TextQuestion
     */
    text: string;
    /**
     * 
     * @type {Path}
     * @memberof TextQuestion
     */
    answerPath: Path;
    /**
     * 
     * @type {StepKey}
     * @memberof TextQuestion
     */
    goTo: StepKey;
    /**
     * Type of question. Must be \'text\'.
     * @type {string}
     * @memberof TextQuestion
     */
    type: TextQuestionTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof TextQuestion
     */
    template?: TextQuestionTemplateEnum;
}

/**
    * @export
    * @enum {string}
    */
export enum TextQuestionTypeEnum {
    TEXT = 'TEXT'
}
/**
    * @export
    * @enum {string}
    */
export enum TextQuestionTemplateEnum {
    ALPHA = 'ALPHA',
    NUMERIC = 'NUMERIC',
    ALPHANUMERIC = 'ALPHANUMERIC',
    EMAIL = 'EMAIL'
}

/**
 * 
 * @export
 * @interface TextQuestionBody
 */
export interface TextQuestionBody {
    /**
     * Type of question. Must be \'text\'.
     * @type {string}
     * @memberof TextQuestionBody
     */
    type: TextQuestionBodyTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof TextQuestionBody
     */
    template?: TextQuestionBodyTemplateEnum;
}

/**
    * @export
    * @enum {string}
    */
export enum TextQuestionBodyTypeEnum {
    TEXT = 'TEXT'
}
/**
    * @export
    * @enum {string}
    */
export enum TextQuestionBodyTemplateEnum {
    ALPHA = 'ALPHA',
    NUMERIC = 'NUMERIC',
    ALPHANUMERIC = 'ALPHANUMERIC',
    EMAIL = 'EMAIL'
}

/**
 * A vehicle question
 * @export
 * @interface VehicleQuestion
 */
export interface VehicleQuestion {
    /**
     * Question text
     * @type {string}
     * @memberof VehicleQuestion
     */
    text: string;
    /**
     * 
     * @type {Path}
     * @memberof VehicleQuestion
     */
    answerPath: Path;
    /**
     * 
     * @type {StepKey}
     * @memberof VehicleQuestion
     */
    goTo: StepKey;
    /**
     * Type of question. Must be \'vehicle\'.
     * @type {string}
     * @memberof VehicleQuestion
     */
    type: VehicleQuestionTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof VehicleQuestion
     */
    template: VehicleQuestionTemplateEnum;
}

/**
    * @export
    * @enum {string}
    */
export enum VehicleQuestionTypeEnum {
    VEHICLE = 'VEHICLE'
}
/**
    * @export
    * @enum {string}
    */
export enum VehicleQuestionTemplateEnum {
    MAKE = 'MAKE',
    MODEL = 'MODEL'
}

/**
 * 
 * @export
 * @interface VehicleQuestionBody
 */
export interface VehicleQuestionBody {
    /**
     * Type of question. Must be \'vehicle\'.
     * @type {string}
     * @memberof VehicleQuestionBody
     */
    type: VehicleQuestionBodyTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof VehicleQuestionBody
     */
    template: VehicleQuestionBodyTemplateEnum;
}

/**
    * @export
    * @enum {string}
    */
export enum VehicleQuestionBodyTypeEnum {
    VEHICLE = 'VEHICLE'
}
/**
    * @export
    * @enum {string}
    */
export enum VehicleQuestionBodyTemplateEnum {
    MAKE = 'MAKE',
    MODEL = 'MODEL'
}


/**
 * EndPointsApi - axios parameter creator
 * @export
 */
export const EndPointsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Creates a new question flow.
         * @summary Create Question Flow
         * @param {Tenant} [xINSHURTenant] Platform tenant.
         * @param {QuestionFlowBody} [questionFlowBody] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        doPost: async (xINSHURTenant?: Tenant, questionFlowBody?: QuestionFlowBody, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/question-flow`;
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
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

            if (xINSHURTenant !== undefined && xINSHURTenant !== null) {
                localVarHeaderParameter['X-INSHUR-Tenant'] = String(JSON.stringify(xINSHURTenant));
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof questionFlowBody !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(questionFlowBody !== undefined ? questionFlowBody : {}) : (questionFlowBody || "");

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
        /**
         * Returns existing question flow version.
         * @summary Get Question Flow
         * @param {string} id Unique id of the question flow resource.
         * @param {string} version Version of the question flow resource.
         * @param {Tenant} [xINSHURTenant] Platform tenant.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getQuestionFlow: async (id: string, version: string, xINSHURTenant?: Tenant, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling getQuestionFlow.');
            }
            // verify required parameter 'version' is not null or undefined
            if (version === null || version === undefined) {
                throw new RequiredError('version','Required parameter version was null or undefined when calling getQuestionFlow.');
            }
            const localVarPath = `/question-flow/{id}/v/{version}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)))
                .replace(`{${"version"}}`, encodeURIComponent(String(version)));
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
         * Creates a new question flow.
         * @summary Create Question Flow
         * @param {Tenant} [xINSHURTenant] Platform tenant.
         * @param {QuestionFlowBody} [questionFlowBody] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async doPost(xINSHURTenant?: Tenant, questionFlowBody?: QuestionFlowBody, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<QuestionFlow>> {
            const localVarAxiosArgs = await EndPointsApiAxiosParamCreator(configuration).doPost(xINSHURTenant, questionFlowBody, options);
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
        /**
         * Returns existing question flow version.
         * @summary Get Question Flow
         * @param {string} id Unique id of the question flow resource.
         * @param {string} version Version of the question flow resource.
         * @param {Tenant} [xINSHURTenant] Platform tenant.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getQuestionFlow(id: string, version: string, xINSHURTenant?: Tenant, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<QuestionFlow>> {
            const localVarAxiosArgs = await EndPointsApiAxiosParamCreator(configuration).getQuestionFlow(id, version, xINSHURTenant, options);
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
         * Creates a new question flow.
         * @summary Create Question Flow
         * @param {Tenant} [xINSHURTenant] Platform tenant.
         * @param {QuestionFlowBody} [questionFlowBody] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        doPost(xINSHURTenant?: Tenant, questionFlowBody?: QuestionFlowBody, options?: any): AxiosPromise<QuestionFlow> {
            return EndPointsApiFp(configuration).doPost(xINSHURTenant, questionFlowBody, options).then((request) => request(axios, basePath));
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
        /**
         * Returns existing question flow version.
         * @summary Get Question Flow
         * @param {string} id Unique id of the question flow resource.
         * @param {string} version Version of the question flow resource.
         * @param {Tenant} [xINSHURTenant] Platform tenant.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getQuestionFlow(id: string, version: string, xINSHURTenant?: Tenant, options?: any): AxiosPromise<QuestionFlow> {
            return EndPointsApiFp(configuration).getQuestionFlow(id, version, xINSHURTenant, options).then((request) => request(axios, basePath));
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
     * Creates a new question flow.
     * @summary Create Question Flow
     * @param {Tenant} [xINSHURTenant] Platform tenant.
     * @param {QuestionFlowBody} [questionFlowBody] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EndPointsApi
     */
    public doPost(xINSHURTenant?: Tenant, questionFlowBody?: QuestionFlowBody, options?: any) {
        return EndPointsApiFp(this.configuration).doPost(xINSHURTenant, questionFlowBody, options).then((request) => request(this.axios, this.basePath));
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

    /**
     * Returns existing question flow version.
     * @summary Get Question Flow
     * @param {string} id Unique id of the question flow resource.
     * @param {string} version Version of the question flow resource.
     * @param {Tenant} [xINSHURTenant] Platform tenant.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EndPointsApi
     */
    public getQuestionFlow(id: string, version: string, xINSHURTenant?: Tenant, options?: any) {
        return EndPointsApiFp(this.configuration).getQuestionFlow(id, version, xINSHURTenant, options).then((request) => request(this.axios, this.basePath));
    }

}


