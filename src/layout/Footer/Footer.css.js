import styled from 'styled-components';


export const FooterWrapper = styled.footer`
  justify-self: flex-end;
  font-size: 1em;
  padding: 0 20px;
  background: #3d3d3d;
  color: #f2f2f2;
  display: flex;
  flex-direction: column;
  /* align-items: center;
  justify-content: center; */

  @media (max-width: 800px) {
    section {
      padding: 20px 0;
    }
  }
`;

export const FooterRow = styled.section`
  display: flex;
  padding: 20px 80px;
  align-items: flex-end;

  &:nth-child(1) {
    @media (max-width: 800px) {
      flex-direction: column-reverse;
    }
  }
`;

export const FooterLogo = styled.h2`
  font-size: 2.5em;
  font-weight: 500;
  margin: 0;
`;

