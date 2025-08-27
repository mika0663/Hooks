import React,{ useState } from 'react'

export default function UpdateArray() {
    const [foods, setFoods] = useState(["Apple","Orange","Banana"])
  
    function handleAddFood(){
        const newFood = document.getElementById("foodInput").value
        document.getElementById("foodInput").value = "";
        setFoods(foods => [...foods,newFood]);
    }
    function handleRemoveFood(index){
        setFoods(foods.filter((_, i)=> i !== index))
    }
  
    return (
    <div>
        <h2>List of Foods</h2>
      <ul>
        {
            foods.map((foods,index) => 
            <li key={index} onClick={() => handleRemoveFood(index)}>
                 {foods}</li> )
        }
      </ul>
        <input type="text" id='foodInput' placeholder='Enter food Name' />
        <button onClick={handleAddFood}>Add Food</button>
    </div>
  )
}
