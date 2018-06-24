//dependencies
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

//reducers
import EventsReducer from './reducers/events_reducer';
import EventsFormData from './reducers/eventFormData';
import Errors from './reducers/errors_reducer';

const reducers = combineReducers({
    EventsReducer,
    EventsFormData,
    Errors
});

const middleware = [thunk]

export default createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(...middleware)   
)