import { useState } from "react"

const defaultItem=[
    {id:"1",value:"value1"},
    {id:"2",value:"value2"},
    {id:"3",value:"value3"},
    {id:"4",value:"value4"},
    {id:"5",value:"value5"}
]
export function ConditionalRedring(){
    const[items,setItems]=useState(defaultItem);
    const addItem=()=>{
        const item=defaultItem.find((i)=>!items.includes(i))
        if(item){
           setItems([...items,item]) 
        }
    }
    const removeItem=(item:any)=>{
        setItems(items.filter((i)=>i !==item));
        
    }
    return <div>
        <button onClick={addItem}>add</button>
        <ul>
            {items.map((item)=><div key={item.id} >
                <button onClick={()=>removeItem(item)}>delete</button>
                <label>{item.id}</label>
                <input defaultValue={item.value}></input>
                </div>
            )}
        </ul>
    </div>
}