/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

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

export namespace Eligible {
  /**
   * @description Checks eligibility of a coupon. This call must be made first to check validity of coupon code and to receive an eligibleId which can be used to claim promo using the /redeem API call.
   * @name CouponEligible
   * @request POST:/eligible
   * @response `200` `ResultCouponEligible` Success
   * @response `401` `object` Validation Error. Please check parameters.
   */
  export namespace CouponEligible {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = InputCouponEligible;
    export type RequestHeaders = {};
    export type ResponseBody = ResultCouponEligible;
  }
}

export namespace Redeem {
  /**
   * @description Redeems a coupon eligibleId received from /eligible. You have to receive a valid eligibleId from the /eligible call above and provide an subscriberId so that promotions can be activated.
   * @name CouponRedeem
   * @request POST:/redeem
   * @response `200` `ResultCouponRedeem` Success
   */
  export namespace CouponRedeem {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = InputCouponRedeem;
    export type RequestHeaders = {};
    export type ResponseBody = ResultCouponRedeem;
  }
}

export namespace Subscriber {
  /**
   * @description Returns a list of coupons and promotions activated by a specific subscriber.
   * @name SubscriberCoupons
   * @request GET:/subscriber/{subscriberId}
   * @response `200` `ResultSubscriberCoupons` Success
   */
  export namespace SubscriberCoupons {
    export type RequestParams = { subscriberId: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ResultSubscriberCoupons;
  }
}
