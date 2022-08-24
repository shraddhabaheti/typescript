interface Iprops {
  name:string;

}
export function Welcome(props:Iprops){
    const {name}=props;
    return <>{name}</>

}