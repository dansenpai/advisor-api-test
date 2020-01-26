import React from 'react';
import { BackgroundWrapper, BackgroundImage } from './time-background.styles';
import * as Images from '../../assets/images';

const TimeBackground = props => {

  return(
    <BackgroundWrapper>
      <BackgroundImage source={Images['night']} />
    </BackgroundWrapper>
  )
}

export default React.memo(TimeBackground);
