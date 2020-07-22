import React from 'react';
import Layout from '../components/layouts/MainLayout'
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux'
import store from './store'

function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <BrowserRouter>
                    <Layout />
                </BrowserRouter>
            </Provider>
        </div>
    );
}

export default App;
