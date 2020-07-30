import styled from 'styled-components';

export const ErrorImage = styled.img.attrs()`
  height: 15vh;
  display: block;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 800px) {
    height: 5vh;
  }
`;

export const Text = styled.p`
  font-size: 1.3rem;
  text-align: center;
  @media (max-width: 800px) {
    font-size: 1rem;
  }
`;

export const ButtonHome = styled.button`
    color: var(--primary);
    cursor: pointer;
    display: block;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: bold;
    outline: none;
    text-align: center;
    text-decoration: none;
    transition: opacity 0.3s;    

    &:hover,
    &:focus {
    opacity: 0.5;
    }

    @media (max-width: 800px) {
    font-size: 1.3rem;
  }
`;
