import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import Counter from './components/Counter'
import reducer from './reducers'

const rootEl = document.getElementById('root');

// 创建状态容器，redecuer为参数
const store = createStore(reducer);

const render = () => ReactDOM.render(
    <Counter
        value={store.getState()}
        onIncrement={() => store.dispatch({ type: 'INCREMENT' })} // action在这里传入
        onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
        />,
    rootEl
);

render();
store.subscribe(render)
