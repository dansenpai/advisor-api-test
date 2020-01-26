import React from 'react';
import {
  HeaderWrapper,
  Temp,
  Text,
  Icon,
} from './header.styles';
import TimeBackground from '../time-background';
import {H1, H3} from '../shared.styles';

const Header  = props => {
  const {city, state, weather} = props;

  return(
    <HeaderWrapper>
      <TimeBackground />
      
      <H1>{city} - {state}</H1>

      <Icon name={weather.icon} />
      <Temp>{weather.temperature}º</Temp>
      <Text>{weather.condition}</Text>

      <Text>Sensação termica de {weather.sensation}º</Text>
    </HeaderWrapper>
  )
}

export default React.memo(Header);
