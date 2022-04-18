import React, {useState, useEffect} from 'react';

function Sort( {favs, onSortFavs}) {

    useEffect(() => {
        fetch("http://localhost:3000/posts")
          .then((r) => r.json())
          .then((data) => {
            console.log(data)
            // setSortedFavs(data);
          })
      }, []);

    function compare( a, b ) {
        if ( a.strDrink.toLowerCase() < b.strDrink.toLowerCase() ){
          return -1;
        }
        if ( a.strDrink.toLowerCase() > b.strDrink.toLowerCase() ){
          return 1;
        }
    }

    function sortFavs(){
        favs.sort( compare );
        console.log(favs)
        onSortFavs(favs)
        console.log(favs)
      }

    return (
        <div>
            <h3>Sort</h3>
            <button onClick={sortFavs}>Sort</button>      
        </div>
    );
  }

  export default Sort;