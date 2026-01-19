import styled from "styled-components";

export const Wrapper = styled.article`
  color: ${({ theme }) => theme.colors.textPrimary};
  display: grid;
  grid-gap: 32px;
  text-align: center;
  justify-items: center;
  margin-top: 96px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    grid-gap: 24px;
  }
`;

export const Header = styled.header`
  font-size: 24px;
  font-weight: 700;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 17px;
  }
`;

export const Paragraph = styled.p`
  font-size: 20px;
  line-height: 1.4;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 16px;
  }
`;

export const ButtonLink = styled.a`
    //color: inherit;
    text-decoration: none;
    padding: 12px 16px;
    font-weight: 600;
    font-size: 20px;
    border: 1px solid ${({ theme }) => theme.colors.border};
    color: ${({ theme }) => theme.color.white};
    border-radius: 5px;
    background: ${({ theme }) => theme.color.scienceBlue};
    transition: box-shadow 0.3s;

    &.hover {
        box-shadow: 0 0 0 2px ${({ theme }) => theme.color.blumine};
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        font-size: 18px;
    }
`;