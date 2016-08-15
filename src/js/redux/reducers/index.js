import { combineReducers } from 'redux';
import { createAction, handleActions } from 'redux-actions';

// Actions
const chooseTeam = createAction('CHOOSE_TEAM');

// Reducers
const defaultState = {
  choosed: {
    blue: null,
    red: null
  }
};

const teams = handleActions({
  'CHOOSE_TEAM': (state, action) => {
    const team = action.payload;
    let { red, blue } = state.choosed;

    if (team.teamColor === 'red') {
      red = team;
    }

    if (team.teamColor === 'blue') {
      blue = team;
    }

    return Object.assign({}, state, {
      choosed: { red, blue }
    });
  }
}, defaultState);

// Combine Reducers
const reducer = combineReducers({
  teams
});

export default reducer;
export { chooseTeam };
