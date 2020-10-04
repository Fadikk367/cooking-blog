import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const CardItem = styled.li`
  font-size: 2.5em;
  width: 100%;
  height: 340px;
  font-weight: 600;
  border-radius: 3px;
  background-color: ${props => props.bgColor || 'lightskyblue'};
`;

export const CardIcon = styled.img`
  display: block;
  width: 160px;
  margin: 30px 0;
`;

export const Link = styled(NavLink)`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: black;
  cursor: pointer;
`;