export interface PromoProduct {
    productId: string;
    name?: string;
    description?: string;
    image?: string;
}
export interface RedeemedProduct {
    productId: string;
    status: string;
    provisionId: string;
}
export interface PromoProductProvisioned {
    productId: string;
    provisionId: string;
    status: string;
    errorMessage?: string;
}
export interface InputPromoEligible {
    code: string;
}
export interface ResultPromoEligible {
    eligibleId?: string;
    eligible?: boolean;
    promos?: PromoProduct[];
    errorMessage?: string;
}
export interface InputPromoRedeem {
    eligibleId: string;
    msisdn: string;
}
export interface ResultPromoRedeem {
    redeemedId?: string;
    status: string;
    promos?: RedeemedProduct[];
    errorMessage?: string;
}
export interface Pet {
    id: number;
    type: string;
    name: string;
    nickname?: string;
    age?: number;
}
export declare namespace Eligible {
    /**
     * @description Checks eligibility of a coupon
     * @name CouponEligible
     * @request POST:/eligible
     * @response `200` `ResultPromoEligible` Success
     */
    namespace CouponEligible {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = InputPromoEligible;
        type RequestHeaders = {};
        type ResponseBody = ResultPromoEligible;
    }
}
export declare namespace Redeem {
    /**
     * @description Redeems a coupon id received from /eligible
     * @name CouponRedeem
     * @request POST:/redeem
     * @response `200` `ResultPromoRedeem` Success
     */
    namespace CouponRedeem {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = InputPromoRedeem;
        type RequestHeaders = {};
        type ResponseBody = ResultPromoRedeem;
    }
}
