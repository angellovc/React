import { getImage } from "../../bases/11-async-await"

describe('11-async-await Test', () => {
    test('getImage should return the img url', async () => {
        const url = await getImage();
        expect(typeof url).toBe('string');
    })
})
