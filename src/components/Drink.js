import React, {useState} from 'react';
import Favorites from './Favorites'

function Drink( { strDrink, strDrinkThumb} ) {
    const [favs, setFavs] = useState([])

    function handleSubmit(e) {
        e.preventDefault();
        const itemData = {
          strDrink: strDrink,
          strDrinkThumb: strDrinkThumb,
          //isInCart: false,
        };
        fetch("http://localhost:3000/posts", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(itemData),
        })
          .then((r) => r.json())
          .then((newItem) => {
            setFavs([...favs, newItem]);
          });
      }
    return (
        <div className="container-md">
            <p>{strDrink}</p>
            <img height="100px" width="100px"src={strDrinkThumb}/>
            <form onSubmit={handleSubmit}>
                <input type="submit" value="Add To Favorites" />
            </form>
        </div>
          

    );
  }
  
  export default Drink;