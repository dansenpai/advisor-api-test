import React from 'react';
import {
  DayWeatherWrapper,
  InfoWrapper,
  Temp,
  Text,
  MinMax,
} from './day-weather.styles';
import { H3 } from '../../components/shared.styles';
import moment from 'moment';
import Icon from '../../components/icon';

const DayWeather = props => {
  const {day} = props;

  return(
    <DayWeatherWrapper>
      <InfoWrapper>
        <H3>{moment(day.date).format('dddd')}</H3>
        <Text>{day.text_icon.text.pt}</Text>
      </InfoWrapper>
      <Temp>
        <Icon name={day.text_icon.icon.day} width={50} height={50}/>
        <MinMax>
          <H3>{day.temperature.max}º</H3>
          <H3>{day.temperature.min}º</H3>
        </MinMax>
      </Temp>
    </DayWeatherWrapper>
  );
}

export default React.memo(DayWeather);












