import React from 'react';
import { BackgroundWrapper, BackgroundImage } from './time-background.styles';
import * as Images from '../../assets/images';
import moment from 'moment';

const TimeBackground = props => {
  // TODO GET HOUR FROM REQUEST SUN SUNSET AND SUNRISE
  const hour = moment().hour();

  //TODO ADD MORE IMAGES FOR DIFFERENTS HOURS AND CONDITIONS
  let time = 'night';

  if (hour >= 5 && hour < 18) {
    time = 'day'
  }

  return(
    <BackgroundWrapper>
      <BackgroundImage source={Images[time]} />
    </BackgroundWrapper>
  )
}

export default React.memo(TimeBackground);
