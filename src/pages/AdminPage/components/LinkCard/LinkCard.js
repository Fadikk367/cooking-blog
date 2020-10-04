import React from 'react';

import { CardItem, CardIcon, Link } from './LinkCard.css';

const LinkCard = ({ icon, to, text, bgColor }) => {
  return (
    <CardItem bgColor={bgColor}>
      <Link to={to} exact>
        <CardIcon src={icon} />
        {text}
      </Link>
    </CardItem>
  )
}

export default LinkCard;