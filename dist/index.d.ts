export interface Pet {
    id: number;
    type: string;
    name: string;
}
export declare namespace Pets {
    /**
     * @description Get all pets
     * @name GetPets
     * @request GET:/pets
     * @response `200` `(Pet)[]` Success
     */
    namespace GetPets {
        type RequestParams = {};
        type RequestQuery = {};
        type RequestBody = never;
        type RequestHeaders = {};
        type ResponseBody = Pet[];
    }
    /**
     * @description Get a pet by ID
     * @name GetPetById
     * @request GET:/pets/{id}
     * @response `200` `Pet` Success
     */
    namespace GetPetById {
        type RequestParams = {
            id: number;
        };
        type RequestQuery = {};
        type RequestBody = never;
        type RequestHeaders = {};
        type ResponseBody = Pet;
    }
}
