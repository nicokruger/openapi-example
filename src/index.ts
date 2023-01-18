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

export namespace Eligible {
  /**
   * @description Checks eligibility of a coupon
   * @name CouponEligible
   * @request POST:/eligible
   * @response `200` `ResultPromoEligible` Success
   */
  export namespace CouponEligible {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = InputPromoEligible;
    export type RequestHeaders = {};
    export type ResponseBody = ResultPromoEligible;
  }
}

export namespace Redeem {
  /**
   * @description Redeems a coupon id received from /eligible
   * @name CouponRedeem
   * @request POST:/redeem
   * @response `200` `ResultPromoRedeem` Success
   */
  export namespace CouponRedeem {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = InputPromoRedeem;
    export type RequestHeaders = {};
    export type ResponseBody = ResultPromoRedeem;
  }
}
