import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-sage';
import rootReducer from '../reducers';
import rootSage from '../sagas'; // TODO: next step

// Returns the store instance
// It can also take initialState argument when provided
const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware();
    return {
        ...createStore(rootReducer,
            applyMiddleware(sagaMiddleware)),
        runSaga: sagaMiddleware.run(rootSage)
    };
};

export default configureStore;
