import React from "react";
import "./FilmeDestaque.css"
import { Contexto } from "../StoreProvider";

export default function FilmeDestaque(){
    const {filmePrincipal} = React.useContext(Contexto)
    function converterhora(total){

        let hora = Math.trunc(parseInt(total)/60)
        let minutos = Math.trunc(((parseInt(total)/60)/60)*1000)
        return hora+"h"+minutos+"m"
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
    return(
        <section className="home" style={{
            backgroundSize:"cover",
            backgroundPosition: "center",
            backgroundImage:"url(https://image.tmdb.org/t/p/original"+filmePrincipal.backdrop_path+")"
        }}>
            <div className="home--vertical">
                <div className="home--horizontal">
                    <div className="home--titulo">{filmePrincipal.title}</div>
                    <div className="home--info">
                        <div className="home--points"><strong>{filmePrincipal.vote_average} pontos</strong></div>
                        <div className="home--ano">{(filmePrincipal.release_date.split('-'))[0]}</div>
                        <div className="home--duracao">{converterhora(filmePrincipal.runtime)}</div>
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