import { Component, ReactNode, useEffect, useState } from "react";
export interface Iprops {
 initalvalue:number
}
export interface Istate{
    count:number;
    hidecomponent:boolean
}

export class LifeCycleMethod extends Component <Iprops,Istate>{
    state:Istate ={
   count:this.props.initalvalue,
   hidecomponent:false        

    };
    componentDidMount(){
        console.log("componentDidmount Called")
        this.setState({
            count:this.state.count+1
        })
    }
    componentWillReceiveProps(nextprops:Iprops ){
        console.log(" componentWillReceiveProps called")

    }
    componentDidUpdate(prevProps:Iprops,prevstate:Istate){
        console.log("componentDidUpdate called",prevProps,prevstate)

    }
    shouldComponentUpdate(){
        console.log(" shouldComponentUpdate called")
        return true
    }
    onClickButton=()=>{
        this.setState({count:this.state.count+1,hidecomponent:true})
    }
    render(){
        return(
            <div>
                count with class Component:{this.state.count}<br/>
                <button onClick={this.onClickButton}>increment value</button>
                {!this.state.hidecomponent &&<Information/>}
            </div>
        )
    }
}
export class Information extends Component{
      componentWillUnmount(){
          console.log("componentWillUnmount is called");
      }
      render(){
          return(
              <div>Information unmounted component</div>
          )
      }
}
export function LifeCycleMethodWithFunction(props:Iprops){
      const[count,setCount]=useState(props.initalvalue);
useEffect(()=>{
    console.log("one Time call");
    setCount(count+1)
},[])
useEffect(()=>{
    console.log("useEffect called when count value Change")
    return ()=>{
        console.log("one time Cleane up fetch")

    }

},[count])
useEffect(()=>{
    //all time per call 
    console.log("useEffect called everting")
})
      const setCountValue=()=>{
          setCount(count+1)
      };
      return(
          <div>
              count with Function Component:{count}<br/>
              <button onClick={setCountValue}>Click</button>
          </div>
      )
}