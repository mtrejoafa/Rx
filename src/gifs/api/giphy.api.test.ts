import { describe, expect, test } from "vitest";
import { giphyApi } from "./giphy.api";

describe('giphyApi', () => {
    test('Should be configured correctly', () => {
        console.log(giphyApi.defaults)
        const param = giphyApi.defaults.params;
        expect(giphyApi.defaults.baseURL).toBe('https://api.giphy.com/v1/gifs');
        expect(param.api_key).toBe(import.meta.env.VITE_GIPHY_API_KEY);
    })
})