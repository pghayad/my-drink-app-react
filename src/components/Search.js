import React, {useState} from 'react';
import DrinkList from './DrinkList'

function Search() {
    const [searchTerm, setSearchTerm] = useState("");
    const [data, setData] = useState([])

    function handleSubmit(e){
        e.preventDefault()
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`)
            .then((r) => r.json())
            .then((data) => {
            // setting state in the useEffect callback
            setData(data.drinks)
        });
    }

    function handleSearch(e){
        console.log(e.target.value)
        setSearchTerm(() => e.target.value)
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <label>
                Search:
                <input onChange={handleSearch} value={searchTerm} type="text" name="name" placeholder="Search Drink..."/>
            </label>
            <input type="submit" value="Submit" />
        </form> 
        <DrinkList data={data} searchTerm={searchTerm}/>
        </>
    );
  }
  
  export default Search;