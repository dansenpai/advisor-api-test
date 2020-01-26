import styled from 'styled-components/native';
import {Text as BaseText} from 'react-native';
import BaseIcon from '../icon';

export const HeaderWrapper = styled.View`
  justify-content: center;
  align-items: center;
  background: purple;
  height: 40%;
`;

export const BackgroundImage = styled.ImageBackground`
  height: 100%;
`;

export const Temp = styled.Text`
  font-size: 50px;
  color: #fff;
`;

export const Text = styled(BaseText)`
  font-size: 20px;
  color: #fff;
`;

export const Icon = styled(BaseIcon)`
  width: ${props => props.width || 80}px;
  height: ${props => props.height || 80}px;
`;

export const Row = styled.View`
  display: flex;
  flex-direction: row;
`;