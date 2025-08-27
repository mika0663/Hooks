import React, {useState} from 'react';

function Counter(){
    const [num, setNum] = useState(0);

    const incrementNum = () => {
        setNum(num + 1);
    }
    const decrementNum = () => {
        setNum(num - 1);
    }
    const reset = () => {
        setNum(0);
    }
    return(
        <div className='counter'>
        <p className='txt'>Counter: {num}</p>
        <button onClick={incrementNum}>Increment</button>
        <button onClick={decrementNum}>Decrement</button>
        <button onClick={reset}>Reset</button>
    </div>
    );
}

export default Counter
