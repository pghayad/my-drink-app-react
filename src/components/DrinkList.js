import React, {useState, useEffect} from 'react';
import Drink from './Drink';

function DrinkList( {searchTerm, data}) {
    const [drinks, setDrinks] = useState([]);
    
    console.log(searchTerm)
    useEffect(() => {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`)
            .then((r) => r.json())
            .then((resp) => {
            // setting state in the useEffect callback
            setDrinks(resp.drinks);
            console.log(data)
            });
    }, []);

    return (
      <div>
       { data !== null ? data.map((drink) => (<Drink key={drink.id} isFav={false} strDrink={drink.strDrink} strDrinkThumb={drink.strDrinkThumb}/>)): <p>No drinks found!</p>}

      </div>
    );
  }

  export default DrinkList;