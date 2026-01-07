import styled from "styled-components";

export const Container = styled.main`
  padding: 20px;
  margin: 0 auto;
  transition: 0.3s;
  background-color: ${({ theme }) => theme.colors.background};
`;