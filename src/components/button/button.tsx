import React from 'react';

interface ButtonProps {
    children: React.ReactNode;
    onDisplay: number;
}

export const Button: React.FC<ButtonProps> = ({ children, onDisplay }) => {
    return (
        <button className={`row load__more ${onDisplay !== -1 ? 'card__blur' : ''}`}>
            {children}
        </button>
    );
};