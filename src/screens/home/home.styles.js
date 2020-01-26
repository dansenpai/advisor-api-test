import styled from 'styled-components/native';

export const HomeWrapper = styled.View`
  flex: 1;
`;

export const DayWeather = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
  borderBottomWidth: 1px;
  borderColor: #eee;
  margin-bottom: 30px;
`;

export const InfoWrapper = styled.View`
  max-width: 60%;
`;

export const Temp = styled.View`
  display: flex;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 20px;
  padding: 0 20px;
  font-weight: bold;
`;

export const Text = styled.Text`
  color: #666;
`;

export const MinMax = styled.View`
  margin-left: 10px;
`;
