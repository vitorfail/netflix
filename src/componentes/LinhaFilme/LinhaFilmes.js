import React, {useState} from "react";
import './LinhaFilmes.css'
import Seta1 from "../../icons/seta1.png"
import Seta2 from "../../icons/seta2.png"
import Pesquisa from "../../Pesquisa";
import { Contexto } from "../StoreProvider";

export default ({titulo, itens}) =>{
    const [scrollx, setscrollx] = useState(-600)
    const {setfilmePrincipal, setloading} = React.useContext(Contexto)
    function setaesquerda(){
        let x = scrollx + Math.round(window.innerWidth/2)
        if(x > 0){
            x = 0
        }
        setscrollx(x)
    }
    function setadireita(){
        let x = scrollx - Math.round(window.innerWidth/2)
        let listw = itens.results.length * 150
        if(window.innerWidth - listw > x){
            x = (window.innerWidth - listw) -60
        }
        setscrollx(x)
    }
    async function pesquisar(id, media){
        setloading('loading mostrar')
        let ident = String(id)
        if(ident !== undefined && ident !== null){
            let d = (String(ident)).split('-')
            if(d[1] === 'tudo'){
                let g = await Pesquisa.filmeHome(d[0], media)
                setfilmePrincipal(g)
            }
            else{
                if(d[1] === 'filme'){
                    let p = await Pesquisa.filmeHome(d[0], 'movie')
                    setfilmePrincipal(p)
                }
                else{
                    let s = await Pesquisa.filmeHome(d[0], 'tv')
                    setfilmePrincipal(s)
                }
            }
            setTimeout(() => {
                setloading('loading');
              }, "3000")
              setTimeout(() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }, "3000")
        }

    }
    return (
        <div className="linha_filme">
            <h2>{titulo}</h2>
            <div className="seta1" onClick={() => setadireita()}>
                <img src={Seta1} alt="seta" style={{width:"34px"}} ></img>
            </div>
            <div className="seta2" onClick={() => setaesquerda()}>
                <img src={Seta2} alt="seta" style={{width:"34px"}} ></img>
            </div>
            <div className="linha_filme--area">
                <div className="linha_filme--total" style={
                        {marginLeft:scrollx,
                        width: itens.results.length*150}
                    }>
                    {itens.results.length > 0 && itens.results.map((item, keys) =>(
                        <div key={keys} className="linha_filme--filme">
                            <img alt="serie" id={item.id+'-'+itens.tipo} className={item.media_type} onClick={(event) => pesquisar(event.currentTarget.id, event.currentTarget.className)} src={"https://image.tmdb.org/t/p/w300"+item.poster_path}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}