import React, {useState} from "react";
import './LinhaFilmes.css'
import Seta1 from "../../icons/seta1.png"
import Seta2 from "../../icons/seta2.png"

export default ({titulo, itens}) =>{
    const [scrollx, setscrollx] = useState(-400)
    function setaesquerda(){
        console.log('passou por aqui')
        let x = scrollx + 150
        if(x > 0){
            x = 0
        }
        setscrollx(0)
    }
    function setadireita(){

    }
    return (
        <div className="linha_filme">
            <h2>{titulo}</h2>
            <div className="seta1" onClick={() => setaesquerda()}>
                <img src={Seta1} style={{width:"34px"}} ></img>
            </div>
            <div className="seta2" onClick={() => setadireita()}>
                <img src={Seta2} style={{width:"34px"}} ></img>
            </div>
            <div className="linha_filme--area">
                <div className="linha_filme--total" style={
                        {marginLeft:scrollx,
                        width: itens.results.length*150}
                    }>
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