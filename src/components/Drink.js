import React, {useState} from 'react';
import Favorites from './Favorites'

function Drink( { fav, isFav, onUpdateItem, onDeleteItem, strDrink, strDrinkThumb} ) {
    const [favs, setFavs] = useState([])
    const [likes, setLikes] = useState(0)

    function handleSubmit(e) {
        e.preventDefault();
        const itemData = {
          strDrink: strDrink,
          strDrinkThumb: strDrinkThumb,
          likes: likes
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

      function handleLikes(){
        fetch(`http://localhost:3000/posts/${fav.id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            likes: fav.likes + 1,
          }),
        })
          .then((r) => r.json())
          .then((updatedItem) => {
            console.log(updatedItem)
            setLikes(likes)
            onUpdateItem(updatedItem)
          });
      }

      function handleDownvote(){
        fetch(`http://localhost:3000/posts/${fav.id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            likes: fav.likes - 1,
          }),
        })
          .then((r) => r.json())
          .then((updatedItem) => {
            console.log(updatedItem)
            setLikes(likes)
            onUpdateItem(updatedItem)
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
            <button onClick={handleLikes}>Likes: {fav.likes}</button>
            <button onClick={handleDownvote}>-</button>
            <button onClick={handleDelete}>Delete</button>
          </>
      }
        </div>
          

    );
  }
  
  export default Drink;