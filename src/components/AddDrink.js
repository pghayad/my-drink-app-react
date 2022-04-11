import React, {useState, useEffect} from 'react';
import Drink from './Drink';

function AddDrink( ) {
    const [str, setStr] = useState("");
    const [strThumb, setStrThumb] = useState("")
    
    function handleSubmit(e) {
        e.preventDefault();
        const itemData = {
          strDrink: str,
          strDrinkThumb: strThumb,
          likes: 0
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
            // setFavs([...favs, newItem]);
            console.log(newItem)
          });
      }

      function handleAdd(e){
        console.log(e.target.value)
        setStr(() => e.target.value)
        
        }

        function handleAddThumb(e){
            setStrThumb(() => e.target.value)
        }

    return (
      <div>
        <form onSubmit={handleSubmit}>
            <input onChange={handleAdd} value={str} type="text" placeholder="Add Drink..."/>
            <input onChange={handleAddThumb} value={strThumb} type="text" placeholder="Add Drink URL..."/>
            <input type="submit" value="Add New Favorite" />
        </form>
      </div>
    );
  }

  export default AddDrink;