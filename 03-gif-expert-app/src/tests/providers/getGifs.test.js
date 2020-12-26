import getGifs from "../../providers/getGifs";

describe('getGifs (fetch) Tests', () => {

    test('Must get 10 elements', async () => {
        const gifs = await getGifs('One punch');
        expect(gifs.length).toBe(10);
    });

})
