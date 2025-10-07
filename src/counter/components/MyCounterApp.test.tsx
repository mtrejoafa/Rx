import { fireEvent, render, renderHook, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { MyCounterApp } from "./MyCounterApp";

describe('MyCounterApp',() => {
    test('Should render the component', () => {
        render(<MyCounterApp />);
        screen.debug();
        expect(screen.getByRole('heading', {level:1}).innerHTML).toContain('Counter: 2');
        expect(screen.getByRole('button', {name:'+1'})).toBeDefined();
    })

    test('Should increment counter', () => {
        render(<MyCounterApp/>);
        const h1 = screen.getByRole('heading',{level:1});
        const button = screen.getByRole('button', {name:'+1'});

        fireEvent.click(button);
        expect(h1.innerHTML).toContain('Counter: 3');
    })

    test('Should decrement counter', () => {
        render(<MyCounterApp/>);
        const h1 = screen.getByRole('heading',{level:1});
        const button = screen.getByRole('button', {name:'-1'});

        fireEvent.click(button);
        expect(h1.innerHTML).toContain('Counter: 1');
    })

    test('Should rest counter', () => {
        render(<MyCounterApp />);
        const h1 = screen.getByRole('heading',{level:1});
        const button = screen.getByRole('button',{name:'Reset'});

        fireEvent.click(button);
        expect(h1.innerHTML).toContain('Counter: 0');
    })
})