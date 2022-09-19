import React from "react";
import "./FilmeDestaque.css"


export default function FilmeDestaque({item}){
    function converterhora(total){

        let hora = Math.trunc(parseInt(total)/60)
        let minutos = Math.trunc(((parseInt(total)/60)/60)*1000)
        return hora+"h"+minutos+"m"
    }
    return(
        <section className="home" style={{
            backgroundSize:"cover",
            backgroundPosition: "center",
            backgroundImage:"url(https://image.tmdb.org/t/p/original"+item.backdrop_path+")"
        }}>
            <div className="home--vertical">
                <div className="home--horizontal">
                <div className="home--titulo">{item.title}</div>
                <div className="home--info">
                    <div className="home--points">{item.vote_average} pontos</div>
                    <div className="home--ano">{(item.release_date.split('-'))[0]}</div>
                    <div className="home--duracao">{converterhora(item.runtime)}</div>
                </div>
                <div className="home--description">{item.overview}</div>
                </div>
            </div>

        </section>
    )
}