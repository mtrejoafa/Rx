import { act, renderHook } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { useCounter } from "./useCounter";

describe('useCounter', () => {
    test('Should initialize hook with default value 0', () => {
        const {result} = renderHook(() => useCounter(10))
        expect(result.current.counter).toBe(10);
    })

    test('Should increment counter when handleAdd is called', () => {
        const {result} = renderHook(() => useCounter());
        act(() => {
            result.current.handlerAdd();
        })
        expect(result.current.counter).toBe(1);
    })

    test('Should decrement counter when handlerSubstract is called', () => {
        const {result} = renderHook(() => useCounter(10));
        act(() => {
            result.current.handlerSubstract();
        })
        expect(result.current.counter).toBe(9);
    })

    test('Should reset counter when handlerReset is called', () => {
        const {result} = renderHook(() => useCounter(10));
        act(() => {
            result.current.handlerReset();
        })
        expect(result.current.counter).toBe(0);
    })
})