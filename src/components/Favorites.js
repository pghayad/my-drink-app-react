import React, {useEffect} from 'react';

function Favorites( { favs } ) {
    console.log("in Favorites: ", favs)
    useEffect(() => {
        fetch("http://localhost:3000/posts")
          .then((r) => r.json())
          .then((data) => {
            console.log(data)
            //setDrinks(data);
          })
      }, []);

      //console.log("in Favorites: ", drinks)
    return (
       
        // <div style={{textAlign: 'center', border: '5px solid black'}} className="container-md">
           
        //     {
        //          drinks.map(drink => {
        //              return (
        //              <>
        //                 <p>{drink.strDrink}</p>
        //                 <img alt="drinkpic" height="100px" width="100px"src={drink.strDrinkThumb}/>
        //             </>
        //              )
        //         })
        //     }
        // </div>
          <>
        {favs.map(fav => {
            return <p>{fav.strDrink}</p>
        })}
        </>
    );
  }
  
  export default Favorites;