import React, {useState} from 'react';
import Favorites from './Favorites'

function Drink( { fav, isFav, onDeleteItem, strDrink, strDrinkThumb} ) {
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

      function handleDelete() {
        fetch(`http://localhost:3000/posts/${fav.id}`, {
          method: "DELETE",
        })
          .then((r) => r.json())
          .then(() => {
            onDeleteItem(fav)
          });
      }

    return (
        <div className="container-md">
            
      { !isFav ?   
      <> 
            <p>{strDrink}</p>
            <img height="100px" width="100px"src={strDrinkThumb}/> 
            <form onSubmit={handleSubmit}>
                <input type="submit" value="Add To Favorites" />
            </form>
      </>
            :
          <>
            <p>{fav.strDrink}</p>
            <img height="100px" width="100px" src={fav.strDrinkThumb}/>
            <button onClick={handleDelete}>Delete</button>
          </>
      }
        </div>
          

    );
  }
  
  export default Drink;