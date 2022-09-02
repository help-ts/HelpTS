import styled from 'styled-components';
import { FormHTMLAttributes, ReactNode } from 'react';

interface IFormProps extends FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode;
}

export const FormReg = styled.form<IFormProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: start;
  margin: 0 auto;
  box-sizing: border-box;
  min-width: 230px;
  max-width: 500px;

  .label--register {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    color: var(--blue);
    font-family: ubuntu;
    font-weight: 700;
    font-size: 0.7rem;
  }

  .input--register {
    width: 100%;
    padding: 0.5rem;
    border: 0.5px solid var(--blue);
    border-radius: 3px;
    background-color: var(--grey-card);
    box-sizing: border-box;
  }

  .input--register::placeholder {
    font-family: ubuntu;
    font-size: 0.7rem;
  }

  .input--register:focus {
    outline: none;
  }

  .btn--register {
    width: 100%;
    padding: 0.5rem;
    border-radius: 5px;
    background-color: var(--blue-dark);
    color: var(--white);
    border: none;
    font-family: ubuntu;
  }
`;
