 // cac the class --> className , for --> htmlFor

 //component 
 function App(pro){
     return (
        <div>
           <h1>{pro.name}</h1>
           <img src={pro.photo}/>
            <p>Price : {pro.price}</p>
         </div>
         
     )
 }


export default App ;
