import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Welcome } from './Welcome';
import { Togglebutton } from './Togglebutton';
import { UserForm } from './UserForm';
import { LifeCycleMethod } from './LifeCycleMethod';
import {LifeCycleMethodWithFunction} from './LifeCycleMethod'
import { ConditionalRedring } from './ConditionalRedring';
function sum(a:number,b:number){
  return a+b;

}
interface Iprops{
  a:number;
  b:number;
}
function SomeComponent(props:Iprops){
  return <>{props.a+props.b}</>
}
function App() {
  const name=sum(5,6);
  return (
    <div className="App">
     <h1>to number of value {name}</h1>
     <div >Sum of two number with component <SomeComponent a={8} b={9}/></div>
     <Welcome name="shraddha Baheti"/>
     {/* <Welcome name="komal Baheti"/> */}
     <Togglebutton/>
     <UserForm />
     <h3>Life Cycle with Class component</h3>
    <LifeCycleMethod initalvalue={0}/>
    <h3>Life cycle with function Component</h3>
    <LifeCycleMethodWithFunction initalvalue={0}/>
    <ConditionalRedring/>
    </div>
  );
}

export default App;
