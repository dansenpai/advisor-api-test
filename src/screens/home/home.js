import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from '../../components/header/';
import RoundedCard from '../../components/rounded-card';
import { HomeWrapper,Title } from './home.styles';
import {
  getForecast,
  getWeatherNow,
} from '../../services/actions/forecast.actions';
import DayWeather from '../../components/day-weather';

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
          {forecast && forecast.map((day, index) => <DayWeather key={index} day={day} />)}
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
