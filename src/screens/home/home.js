import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from '../../components/header/';
import RoundedCard from '../../components/rounded-card';
import Icon from '../../components/icon';
import {
  getForecast,
  getWeatherNow,
} from '../../services/actions/forecast.actions';
import moment from 'moment';
import {H1, H3} from '../../components/shared.styles';
import {
  HomeWrapper,
  DayWeather,
  InfoWrapper,
  Title,
  Temp,
  Text,
  MinMax,
} from './home.styles';

const Home = props => {
  const {city, state, weather, actions, forecast} = props;

  useEffect(() => {
    async function getData() {
      await actions.getWeatherNow();
      await actions.getForecast();
    }

    getData();
  }, []);

  
  return (
    <HomeWrapper>
      <Header city={city} state={state} weather={weather} />
      <RoundedCard>
          <Title>Previsão para 7 dias</Title>
          {forecast.map((day, index) => {
            return (
              <DayWeather key={index}>
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
              </DayWeather>
            )
          })}
      </RoundedCard>
    </HomeWrapper>
  )
}

const actionCreators = {getWeatherNow, getForecast};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actionCreators, dispatch),
})

const mapStateToProp = (stateProps) => {
  const {city, state, weather, forecast} = stateProps.ForecastReducer;

  return { city, state, weather, forecast }
}

export default connect(
  mapStateToProp,
  mapDispatchToProps
)(React.memo(Home));
