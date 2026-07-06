export default function ProductCard(props){
    console.log (props.name)
    
    return(
         <div className= "bg-green-600 border w-[319px] text-white">
           <h1> className = "text-blue-300 text-[40px]"{props.name}</h1>
          <img src={props.image} alt ={"Picture of a "+props.name} />
          <p>LKR {props.price}</p>
          <button>Add to cart</button>
          
          </div>
    )
}