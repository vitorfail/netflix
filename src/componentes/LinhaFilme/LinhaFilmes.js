import React from "react";
import './LinhaFilmes.css'

export default ({titulo, itens}) =>{
    return (
        <div className="linha_filme">
            <h2>{titulo}</h2>
            <div className="linha_filme--area">
                <div className="linha_filme--total">
                    {itens.results.length > 0 && itens.results.map((item, keys) =>(
                        <div key={keys} className="linha_filme--filme">
                            <img alt="serie" src={"https://image.tmdb.org/t/p/w300"+item.poster_path}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}