import styled from "styled-components";


export const StyledCreationCard = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  cursor: pointer;
  padding: 1.2rem;
  gap: 1.2rem;
  justify-content: flex-start;
  width: var(--creationCardWidth);
  height: var(--creationCardHeight);
  background-color: var(--white);

  &:hover {
    transform: translateY(-2px);
`

export const TextContainer = styled.div`
  display: flex;
  text-align: left;
  flex-direction: column;
  align-items: start;
  justify-content: center;
`