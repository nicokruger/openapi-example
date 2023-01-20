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
    name?: string;
    description?: string;
    image?: string;
}
export interface InputCouponEligible {
    code: string;
}
export interface ResultCouponEligible {
    eligibleId?: string;
    eligible?: boolean;
    eligibleTime?: string;
    promos?: PromoProduct[];
    errorMessage?: string;
}
export interface InputCouponRedeem {
    eligibleId: string;
    subscriberId: string;
}
export interface ResultCouponRedeem {
    redeemedId?: string;
    status: string;
    promos?: RedeemedProduct[];
    errorMessage?: string;
}
export interface RedeemedCoupon {
    redeemedTime: string;
    code: string;
    redeemedId: string;
    promos: RedeemedProduct[];
}
export interface ResultSubscriberCoupons {
    coupons?: RedeemedCoupon[];
}
export declare namespace Eligible {
    /**
     * @description Checks eligibility of a coupon. This call must be made first to check validity of coupon code and to receive an eligibleId which can be used to claim promo using the /redeem API call.
     * @name CouponEligible
     * @request POST:/eligible
     * @response `200` `ResultCouponEligible` Success
     * @response `401` `object` Validation Error. Please check parameters.
     */
    namespace CouponEligible {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = InputCouponEligible;
        type RequestHeaders = {};
        type ResponseBody = ResultCouponEligible;
    }
}
export declare namespace Redeem {
    /**
     * @description Redeems a coupon eligibleId received from /eligible. You have to receive a valid eligibleId from the /eligible call above and provide an subscriberId so that promotions can be activated.
     * @name CouponRedeem
     * @request POST:/redeem
     * @response `200` `ResultCouponRedeem` Success
     */
    namespace CouponRedeem {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = InputCouponRedeem;
        type RequestHeaders = {};
        type ResponseBody = ResultCouponRedeem;
    }
}
export declare namespace Subscriber {
    /**
     * @description Returns a list of coupons and promotions activated by a specific subscriber.
     * @name SubscriberCoupons
     * @request GET:/subscriber/{subscriberId}
     * @response `200` `ResultSubscriberCoupons` Success
     */
    namespace SubscriberCoupons {
        type RequestParams = {
            subscriberId: string;
        };
        type RequestQuery = {};
        type RequestBody = never;
        type RequestHeaders = {};
        type ResponseBody = ResultSubscriberCoupons;
    }
}
