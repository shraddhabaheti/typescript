import { useState } from "react"

export function Togglebutton(){
    const [check,toggle]=useState(false);
    return(
        <div>
            <input type="checkbox" checked={check} onClick={(event:any)=>toggle(event.target.check)}/>
            Toggle with state management
        </div>
    )
}