import React, { useState } from "react"
interface IuserForm{
    name:string,
    age:number
}
const defaultvalue={
    name:'',
    age:0

}

export  function UserForm(){
    const [form,setForm]=useState<IuserForm>(defaultvalue)
   const handeleChangeName=(e:React.ChangeEvent<HTMLInputElement>)=>{
       let name=e.target.name;
       let value=e.target.value
       setForm({
        ...form,
      [name]:e.target.value
       }) 

   }
 const Submit=()=>{
    console.log("form",form);
 }
 
    return(
        <div>
           <form>
               <input type="text" name="name" onChange={handeleChangeName}  value={form?.name} />
               <input type="text" name="age" onChange={handeleChangeName}  value={form.age} />
               <button onClick={Submit}>submit</button>
           </form>
        </div>
    )
}