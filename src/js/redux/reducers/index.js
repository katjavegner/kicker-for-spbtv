import { combineReducers } from 'redux';
import { createAction, handleActions } from 'redux-actions';

// Actions
const chooseTeam = createAction('CHOOSE_TEAM');
const fetchTeamsStart = createAction('FETCH_TEAMS_START');
const fetchTeamsSuccess = createAction('FETCH_TEAMS_SUCCESS');
const fetchTeamsFailed = createAction('FETCH_TEAMS_FAILED');

// Reducers
// const defaultState = {
//   blue: null,
//   red: null
// };

const choosed = handleActions({
  'CHOOSE_TEAM': (state, action) => {
    const team = action.payload;
    let { red, blue } = state;

    if (team.teamColor === 'red') {
      red = team;
    }

    if (team.teamColor === 'blue') {
      blue = team;
    }

    return Object.assign({}, state, { red, blue });
  }
}, { red: null, blue: null });

const teams = handleActions({
  'FETCH_TEAMS_START': (state) => ({ isFetching: true, isFetched: false }),
  'FETCH_TEAMS_SUCCESS': (state, { payload }) => ({
    isFetching: false,
    isFetched: true,
    items: payload
  }),
  'FETCH_TEAMS_FAILED': (state, { payload }) => ({
    isFetching: false,
    isFetched: true,
    error: payload
  })
}, { isFetching: false, isFetched: false })

// Combine Reducers
const reducer = combineReducers({
  choosed,
  teams
});

const fetchTeams = () => (dispatch, getState) => {
  const { teams } = getState();

  if (teams.isFetching || teams.isFetched) { return null; }

  dispatch(fetchTeamsStart);

  fetch('/commands').then((res) => res.json())
  .then(teams => dispatch(fetchTeamsSuccess(teams)))
  .catch(fetchTeamsFailed)
};

export default reducer;
export { chooseTeam, fetchTeams };
