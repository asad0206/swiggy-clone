import '@testing-library/jest-dom'
import React from 'react';
import { render, screen } from '@testing-library/react';
import Navbar from '@/components/Navbar/Navbar';

describe('Navbar', () => {
    it('renders navbar', () => {
        const setSearchInput = jest.fn();
        render(<Navbar setSearchInput={setSearchInput} />);

        expect(screen.getByAltText('Swiggy Logo')).toBeInTheDocument();

        expect(screen.getByPlaceholderText('Search...')).toBeInTheDocument();
    });
});