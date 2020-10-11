import styled from 'styled-components';

export const Table = styled.div`
  border-top: 1px solid lightgrey;
  padding-top: 20px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, minmax(120px, 1fr));
  grid-gap: 30px;
  grid-template-rows: 1fr;

  @media (max-width: 800px) {
    /* grid-template-columns: repeat(auto-fit, minmax(100px, 1fr)); */
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
  }
`;

export const ContentCard = styled.div`
  /* background-color: darkred; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    display: block;
    width: 40%;
    padding: 20px;
  }

  h3 {
    font-size: 1.3em;
    text-align: center;
    color: #d6d6d6;
  }

  @media (max-width: 800px) {
    img {
      padding: 5px;
    }
  }
`;