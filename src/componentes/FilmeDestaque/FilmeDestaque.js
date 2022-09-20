import React from "react";
import "./FilmeDestaque.css"
import { Contexto } from "../StoreProvider";

export default function FilmeDestaque(){
    const {filmePrincipal} = React.useContext(Contexto)
    function converterhora(total){
        if(total.runtime !== undefined){
            let hora = Math.trunc(parseInt(total.runtime)/60)
            let minutos = Math.trunc(((parseInt(total.runtime)/60)/60)*1000)
            return hora+"h"+minutos+"m"
        }
        else{
            let temporada ='temporada'
            if(total.last_episode_to_air.season_number >1 ){
                temporada = 'temporadas'
            }
            return total.last_episode_to_air.season_number+' '+temporada
        }
    }
    function generos(g){
        let tipos = ''
        for(var i = 0; i< g.length; i++){
            if(i === 0){
                tipos = tipos + g[i].name
            }
            else{
                tipos = tipos +", "+g[i].name
            }
        }
        return tipos
    }
    function ano(y){
        if(y.release_date !== undefined){
            return y.release_date.split('-')[0]
        }
        else{
            return y.first_air_date.split('-')[0]
        }
    }
    function Checkname(name){
        if( name.title!== undefined){
            return name.title
        }
        else{
            return name.name
        }
    }
    return(
        <section className="home" style={{
            backgroundSize:"cover",
            backgroundPosition: "center",
            backgroundImage:"url(https://image.tmdb.org/t/p/original"+filmePrincipal.backdrop_path+")"
        }}>
            <div className="home--vertical">
                <div className="home--horizontal">
                    <div className="home--titulo">{Checkname(filmePrincipal)}</div>
                    <div className="home--info">
                        <div className="home--points"><strong>{filmePrincipal.vote_average} pontos</strong></div>
                        <div className="home--ano">{ano(filmePrincipal)}</div>
                        <div className="home--duracao">{converterhora(filmePrincipal)}</div>
                    </div>
                    <div className="home--description">{filmePrincipal.overview}</div>
                    <div className="home--botoes">
                        <div className="assistir">
                            <a href="https://youtube.com">▶ <strong>Assistir</strong></a>
                        </div>
                        <div  className="add">
                            <a href="https://youtube.com">+ <strong>Adiocionar</strong></a>
                        </div>
                    </div>
                    <div className="home--generos"><strong>Gêneros: </strong>{generos(filmePrincipal.genres)}</div>
                </div>
            </div>
        </section>
    )
}