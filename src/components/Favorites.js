import React, {useEffect, useState} from 'react';
import Drink from './Drink'
import Sort from './Sort'

function Favorites( ) {
    const [favs, setFavs] = useState([])
    const [searchTerm, setSearchTerm] = useState("")
    const [sortedFavs, setSortedFavs] = useState([])

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

      const filtFavs = favs.filter(fav => {
       return fav.strDrink.toLowerCase().includes(searchTerm.toLowerCase())
      })

        function compare( a, b ) {
            if ( a.strDrink.toLowerCase() < b.strDrink.toLowerCase() ){
              return -1;
            }
            if ( a.strDrink.toLowerCase() > b.strDrink.toLowerCase() ){
              return 1;
            }
        }

      function sortFavs(){
        const sortedData = [...favs].sort( compare );
        setFavs(sortedData)
      }

      
      
    return (
          <>
          <h3>Search</h3>
          <input onChange={(e) => setSearchTerm(e.target.value)} value={searchTerm} type="text"/>
          <br></br><br></br>
          {/* <Sort favs={favs} onSortFavs={handleSortFavs}/> */}
          <h3>Sort</h3>
          <button onClick={sortFavs}>Sort Ascending</button>
          {/* <button onClick={sortFavs}>Sort Descending</button> */}

        {
        
        filtFavs.map(fav => {
            return (
            <>
            <Drink key={fav.id} fav={fav} onDeleteItem={handleDeleteItem} onUpdateItem={handleUpdateItem} isFav={true}/>
            </>
            )
        })}
        </>
    );
  }
  
  export default Favorites;