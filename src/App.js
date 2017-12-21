import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
    const table = [
        [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1250, 1500],
        [6, 9, 12, 13.5, 18, 20.4, 23.4, 25.5, 28.5, 31.5, 39, 45],
        [7.5, 12, 15, 18.6, 22.5, 25.5, 28.8, 33, 36, 39, 48, 55.5]
    ];

    const lookUp = (e) => {
        const type = e.target.id;
        let i = 0;
        for (; i < table[0].length; i++) {
            if (e.target.value <= table[0][i]) {
                break;
            }
        }
        if (i < table[0].length) {
            document.getElementById("result-" + type).value = table[type][i];
        } else {
            console.error("您这玩意儿有点大！做不了……");
        }
    };

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <h1 className="App-title">简陋的工时计算工具</h1>
            </header>
            <table className="App-standard">
                <tbody>
                <tr>
                    {table[0].map((number, index) => <th key={index}>{number}</th>)}
                </tr>
                {table.slice(1).map((numbers, index) =>
                    <tr key={index}>
                        {numbers.map((number, sindex) => <td key={sindex}>{number}</td>)}
                    </tr>
                )}
                </tbody>
            </table>
            <p>
                <label>粗铣</label>
                <input id={1} onChange={lookUp}/>
                <span className="App-split"/>
                <label>工时</label>
                <input id="result-1" readOnly={true}/>
            </p>
            <p>
                <label>精铣</label>
                <input onChange={lookUp}/>
                <span className="App-split"/>
                <label>工时</label>
                <input id="result-2" readOnly={true}/>
            </p>
        </div>
    );
};

export default App;
