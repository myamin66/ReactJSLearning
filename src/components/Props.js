const Props = (props) =>{
    
    return(
        <>
        <h1>I am Props</h1>
        <h1>{props.name}</h1>
        <button onClick={()=> props.setName("Bilal")}>Click Me</button>    
        </>        
    );
}

export default Props ;