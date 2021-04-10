export interface ProductionStateInterface {
    type: string;
    gender: string;
    message: null | string;
    stage: boolean | string;
    biomechanism: Array<boolean | string>;
    processor: Array<boolean | string>;
    heart: Array<boolean | string>;
    amount: number;
    [key: string]: any;
}
