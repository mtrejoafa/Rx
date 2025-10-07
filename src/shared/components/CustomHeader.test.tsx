import { describe, expect, test } from "vitest";
import {render, screen} from '@testing-library/react'
import { CustomHeader } from "./CustomHeader";

describe('CustomHeader', () => {
     const title = 'Hola';
     const description = 'Test desc';

    test('Should render title correctly', () => {
        render(<CustomHeader title={title} description={description}/>)
        expect(screen.getByText(title)).toBeDefined();
    })

    test('Should render description when provided', () => {
        render(<CustomHeader title={title} description={description}/>)
        expect(screen.getByText(description)).toBeDefined();
        expect(screen.getByRole('paragraph')).toBeDefined();
        expect(screen.getByRole('paragraph').innerHTML).toBe(description);
    })

    test('Should not render description when is not provided', () => {
        const {container} = render(<CustomHeader title={title}/>);

        const divElement = container.querySelector('.content-center');

        const h1 = divElement?.querySelector('h1');
        expect(h1.innerHTML).toBe(title);

        const desc = divElement?.querySelector('p');
        expect(desc).toBeNull();
    })
})