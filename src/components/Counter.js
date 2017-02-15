import React, { Component, PropTypes } from 'react'

// Counter组件
class Counter extends Component {
    // 属性
    static propTypes = {
        value: PropTypes.number.isRequired,
        onIncrement: PropTypes.func.isRequired,
        onDecrement: PropTypes.func.isRequired
    }

    // 条件增加
    incrementIfOdd = () => {
        if (this.props.value % 2 !== 0) {
            this.props.onIncrement()
        }
    }

    // 异步增加
    incrementAsync = () => {
        setTimeout(this.props.onIncrement, 1000)
    }

    render() {
        const { value, onIncrement, onDecrement } = this.props
        return (
            <p>
                Clicked: {value} times
        {' '}
                <button onClick={onIncrement}>
                    +
        </button>
                {' '}
                <button onClick={onDecrement}>
                    -
        </button>
                {' '}
                <button onClick={this.incrementIfOdd}>
                    Increment if odd
        </button>
                {' '}
                <button onClick={this.incrementAsync}>
                    Increment async
        </button>
            </p>
        )
    }
}

export default Counter