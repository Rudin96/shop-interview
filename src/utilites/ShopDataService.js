class ShopDataService {
    static #baseUrl = "https://shop-interview.acrowd.se";
    static #user = "ck_4c0d8a4f83c78831c200e39d1f371e92d419d863";
    static #secret = "cs_1eb6c96b9a32942b52a868da3ad28698b15873ff";

    static #getAuthObject()
    {
        let headers = new Headers();
        headers.set("Authorization", `Basic ${btoa(`${this.#user}:${this.#secret}`)}`);
        return headers;
    }

    static async #sendRequest(endpoint, requestType)
    {
        let res = await fetch(`${this.#baseUrl}/wp-json/wc/v3/${endpoint}`, {
            method: requestType,
            headers: this.#getAuthObject()
        });

        let json = await res.json();
        return json;
    }

    static async getAllProducts()
    {
        return await this.#sendRequest("products", "GET");
    }

    static async getAllCategories()
    {
        return await this.#sendRequest("products/categories", "GET");
    }
}

export default ShopDataService;