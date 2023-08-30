import React, { useState, useEffect } from 'react';
import { fetchData } from './services/fetchService'

interface AppProps {}

const App = (props: AppProps) => {

    const [data, setData] = useState('');

    useEffect(() => {
        if (process.env.NODE_ENV === 'development') {
            document.body.classList.add('debug-screens');
        }
    }, []);

    useEffect(() => {
        fetchData('/api/hello')
            .then(data => setData(data.message))
            .catch(() => console.log('setError(true)'));
    }, []);

    return (
        <div className="container">
            <h1 className="text-red-700 bg-green-200">Hello {data}</h1>
            <button className="btn-primary">Test</button>
        </div>
    );
}

export default App;