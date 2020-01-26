import React from 'react';
import { Image } from 'react-native';
import * as Icons from '../../assets/icons/';

const Icon = props => {
  const {name, style, height, width} = props;

  if(!name) return null;

  return(
    <Image
      style={{width, height, ...style}}
      source={Icons[`icon_${name}`]}
    />
  )
}

export default React.memo(Icon);
