import React, {useEffect, useState} from 'react';
import Drink from './Drink'

function Favorites( ) {
    const [favs, setFavs] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/posts")
          .then((r) => r.json())
          .then((data) => {
            console.log(data)
            setFavs(data);
          })
      }, []);

            // add this callback function
    function handleDeleteItem(deletedItem) {
        const updatedFavs = favs.filter((fav) => fav.id !== deletedItem.id)
        setFavs(updatedFavs)
    }

    // add this callback function
    function handleUpdateItem(updatedItem) {
        const updatedItems = favs.map((fav) => {
          if (fav.id === updatedItem.id) {
            return updatedItem;
          } else {
            return fav;
          }
        });
        setFavs(updatedItems);
      }

    return (
          <>
        {favs.map(fav => {
            return (
            <>
            <Drink key={fav.id} fav={fav} onDeleteItem={handleDeleteItem} onUpdateItem={handleUpdateItem} isFav={true}/>
                {/* <p>{fav.strDrink}</p>
                <img height="100px" width="100px"src={fav.strDrinkThumb}/>
                <button onClick={handleDelete}>Delete Favorite</button> */}
            </>
            )
        })}
        </>
    );
  }
  
  export default Favorites;