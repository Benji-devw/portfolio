import React from 'react'
import { func, string } from 'prop-types';
import styled from "styled-components"
import { WiDaySunny } from 'react-icons/wi';
import { IoIosMoon } from 'react-icons/io';

const Button = styled.button`
  position: fixed;
  top: .3rem;
  right: 2rem;
  z-index: 600;
  background: ${({ theme }) => theme.background};
  border: 1px solid ${({ theme }) => theme.toggleBorder};
  color: ${({ theme }) => theme.text};
  border-radius: 30px;
  cursor: pointer;
  padding: 0.2rem;
  outline: none;
`;

const Toggle = ({theme, toggleTheme }) => {
  return (
    <>
      {theme === "dark" ? (
        <Button onClick={toggleTheme}>
          <WiDaySunny className="fadeIn" style={{fontSize:"1.5em"}} />
        </Button>
      ) : (
        <Button onClick={toggleTheme}>
          <IoIosMoon  className="fadeIn" style={{ fontSize: "1.5em" }} />
        </Button>
      )}
    </>
  );
};
Toggle.propTypes = {
    theme: string.isRequired,
    toggleTheme: func.isRequired,
}
export default Toggle;
