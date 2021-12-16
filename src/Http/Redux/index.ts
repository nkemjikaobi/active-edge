import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './Reducers/RootReducer/index';
import { composeWithDevTools } from 'redux-devtools-extension';
const middlewares = [thunk];

const persistConfig = {
	key: 'root',
	storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = createStore(
	persistedReducer,
	undefined,
	composeWithDevTools(applyMiddleware(...middlewares))
);
export const persistor = persistStore(store);
