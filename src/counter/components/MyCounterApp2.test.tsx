import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { MyCounterApp } from "./MyCounterApp";

const handlerAddMock = vi.fn();
const handlerSubstractMock = vi.fn();
const handlerResetMock = vi.fn();

vi.mock('../hooks/useCounter', () => ({
    useCounter: () => ({
        counter: 20,
        handlerAdd: handlerAddMock,
        handlerSubstract: handlerSubstractMock,
        handlerReset: handlerResetMock
    })
}));

describe('MyCounterApp', () => {
    test('Should render AppComponent', ( )=> {
        render(<MyCounterApp />);
        screen.debug();
    })

    test('Should called handlerAdd', () => {
        render(<MyCounterApp />);
        const bt = screen.getByRole('button',{name:'+1'});

        fireEvent.click(bt);
        expect(handlerAddMock).toBeCalled();
        expect(handlerSubstractMock).not.toBeCalled();
        expect(handlerResetMock).not.toBeCalled();
    })
})