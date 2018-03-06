import {appName} from '../config'
import {Record, List} from 'immutable'
import {createSelector} from 'reselect'

import {reset} from 'redux-form'
/* 
Constants
*/
export const moduleName = 'people'
const prefix = `${appName}/${moduleName}`
export const ADD_PEOPLE = `${prefix}/ADD_PEOPLE`

/* 
Reducer
*/

export const ReducerRecord = Record({
  people: new List([])
})

const PeopleRecord = Record({
  id: null,
  firstName: null,
  lastName: null,
  email: null
})

export default function reducer(state = new ReducerRecord(), action) {
  const {type, payload} = action

  switch(type) {
    case ADD_PEOPLE:
      return state
        .update('people', people => people.push(new PeopleRecord(payload)))

    default:
      return state;
  }
}

/* 
Seletors
*/

export const stateSelector = state => state[moduleName]
export const userSelector = createSelector(stateSelector, state => state.people.valueSeq().toArray())


/* 
Action Creators
*/

export function addPeople(data) {
  return dispatch => {
    dispatch({
      type: ADD_PEOPLE,
      payload: { id: Date.now(), ...data }
    })

    dispatch(reset(ADD_PEOPLE))
  }
}