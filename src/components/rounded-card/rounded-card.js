import React from 'react';
import { RoundedCardWrapper } from './rounded-card.styles';

const RoundedCard = props => {
  return(
    <RoundedCardWrapper>
      {props.children}
    </RoundedCardWrapper>
  )
}

export default React.memo(RoundedCard);
