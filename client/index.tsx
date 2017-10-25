import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Container from './container';

import { createStore } from "redux";
import { Provider } from "react-redux";
import { counterReducer } from "../reducer";

const store = createStore(counterReducer);

ReactDOM.render(
    <Provider store={store}>
        <Container />
    </Provider>,
    document.getElementById('root')
);
