import React,{ useEffect,useRef } from 'react'

export default function Reference() {


    const inputRef = useRef(null);

    useEffect(() =>{
        console.log("Component Rendered")
        console.log(inputRef)
    })

    function handleClick(){
        inputRef.current.focus();
        inputRef.current.style.backgroundColor = "yellow";
    }

    return (
        <div>
        <button onClick={handleClick}>
            Click me!
        </button>
        <input ref={inputRef} />
</div>
)
}
