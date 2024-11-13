const DessertsList = (props) => {
  const filteredDessert = props.data
    .filter((dessert) => {
      return dessert.calories < 500;
    })
   .sort((a, b) => { 
     return a.calories - b.calories; 
   })
   .map((dessert) => { 
     return ( 
       <li>{dessert.name} - {dessert.calories} cal </li> 
     ) 
   })
 return <ul>{filteredDessert}</ul>

}
export default DessertsList; 

