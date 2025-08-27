import React, {useState} from 'react';

function Updater(){
    const [num, setNum] = useState(0);

    function incrementNum() {
        setNum(num => num + 1);
        setNum(num => num + 1);
        setNum(num => num + 1);
    }
    function decrementNum() {
        setNum(num => num - 1);
    }
    function reset(){
        setNum(0);
    }
    return(<div>
         <p className='txt'>Counter: {num}</p>

        <div className='counter'>
        <button onClick={incrementNum}>Increment</button>
        <button onClick={decrementNum}>Decrement</button>
        <button onClick={reset}>Reset</button>
    </div>
    </div>
    );
}

export default Updater
