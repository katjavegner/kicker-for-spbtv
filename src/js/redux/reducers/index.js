import { combineReducers } from 'redux';
import { createAction, handleActions } from 'redux-actions';

// Actions
const chooseTeamBlue = createAction('CHOOSE_TEAM_BLUE');
const chooseTeamRed = createAction('CHOOSE_TEAM_RED');

// Reducers
const defaultState = {
  choosed: {
    Blue: null,
    Red: null
  }
};

const teams = handleActions({
  'CHOOSE_TEAM_BLUE': (state, action) => {
    const team =  action.payload;
    return Object.assign({}, state, {
      choosed: {
        Blue: team,
        Red: state.choosed.Red
      }
    });
  },
  'CHOOSE_TEAM_RED': (state, action) => {
    const team =  action.payload;
    return Object.assign({}, state, {
      choosed: {
        Blue: state.choosed.Blue,
        Red: team
      }
    });
  }
}, defaultState);

// Combine Reducers
const reducer = combineReducers({
  teams
});

export default reducer;
export { chooseTeamBlue, chooseTeamRed };
