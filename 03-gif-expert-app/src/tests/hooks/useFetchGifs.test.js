import useFetchGifs from "../../hooks/useFetchGifs";
import {renderHook} from '@testing-library/react-hooks';

describe('useFetchGif Hook Tests', () => {

    test('Must return the initialState', async () => {
        const {result, waitForNextUpdate} = renderHook(() =>  useFetchGifs('one punch'));
        const {data, loading} = result.current;
        await waitForNextUpdate();
        expect(data).toEqual([]);
        expect(loading).toBe(true);
    });

    test('Must return an images array and loading in false', async () => {
        const {result, waitForNextUpdate} = renderHook(() =>  useFetchGifs('one punch'));
        await waitForNextUpdate();
        const {data, loading} = result.current;
        expect(data.length).toBe(10);
        expect(loading).toBe(false);
    });

})