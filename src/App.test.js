import React from 'react'
import {render} from '@testing-library/react'
import App from './App'
describe('App component tests', () => {
    it('should render welcome text', () => {
        const {getByText} = render(<App />);
        expect(getByText('Bem-vindo à Lojinha!')).toBeInTheDocument(); 
    })
});