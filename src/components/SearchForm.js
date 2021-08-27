import React from 'react'
import {  useGlobalContext } from "../context"

const SearchForm = () =>{
    const { setSearchTerm } =  useGlobalContext();;
    const searchValue = React.useRef('')

    React.useEffect( () => {
        searchValue.current.focus()

    }, [])

    const searchCocktail = ()=> {
        setSearchTerm(searchValue.current.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return(
        <>
        <div className="form" >
        <h3>Search Your Favorite Cocktail</h3>
        <form className="input-form" onSubmit={handleSubmit}>
            <input 
            type="text" 
            id='name'
            placeholder='Irish..'
            ref={searchValue} 
            onChange={searchCocktail} 
            />
        </form>
        </div>
        </>
    )

}

export default SearchForm