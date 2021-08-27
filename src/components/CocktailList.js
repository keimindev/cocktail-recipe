import React from 'react'
import Loading from './Loading'
import Cocktail from './Cocktail'
import { useGlobalContext } from '../context'

const CocktailList = () => {
    const { cocktails, loading } =  useGlobalContext();

    console.log(cocktails, loading)
    if(loading){
        return <Loading />
    }

    if(cocktails.length < 1){
        return(
            <>
            <h1 className="section-title"> no cocktails matched you serach criteria</h1>
            </>
        )
    }

    return (
        <>
        <section className="section">
            <h2 className="section-title">
                Cocktails
            </h2>
            <div className="cocktails-cetner">
                {cocktails.map((item) => {
                    return(
                        <Cocktail key={item.id} {...item} />
                    )
                })}
            </div>
        </section>
        </>
    )
}


export default CocktailList;