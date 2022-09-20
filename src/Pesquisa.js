import axios from "axios";
import React from "react";
const API_KEY = "37a5ea6b4e67602b0c6b3de98d443722";
const Base = "https://api.themoviedb.org/3/"

const Pesquisa = axios.create({
    baseURL: Base
})
async function puxar_dados(tipo, media){
    var dados = []
    await Pesquisa.get(tipo).then(res =>{
        let d =res.data
        if(media !== undefined){
            if(media === 'tudo'){
                d.tipo = 'tudo'
            }
            else{
                if(media === 'filme'){
                    d.tipo = 'filme'
                }
                else{
                    d.tipo = 'serie'
                }
            }
        }
        else{
            d.tipo = 'nenhum'
        }
        console.log(d)
        dados= d
    }).catch(error => {
        dados = "Erro no servidor"
    })
    return dados
}
export default{ 
    homelist: async () =>{
        return [
            {
                titulo_pesquisa: "originais",
                title: "Originais da netflix",
                items: await puxar_dados("discover/tv?with_network=213&language=pt-BR&api_key="+API_KEY, 'series')
            },
            {
                titulo_pesquisa: "recomendado",
                title: "Recomendados para você",
                items: await puxar_dados("trending/all/week?&language=pt-BR&api_key="+API_KEY, 'tudo')
            },
            {
                titulo_pesquisa: "em_alta",
                title: "Em alta",
                items: await puxar_dados("movie/top_rated?&language=pt-BR&api_key="+API_KEY, 'filme')
            },
            {
                titulo_pesquisa: "acao",
                title: "Ação",
                items: await puxar_dados("discover/movie?with_genres=28&language=pt-BR&api_key="+API_KEY, 'filme')
            },
            {
                titulo_pesquisa: "comedia",
                title: "Comédia",
                items: await puxar_dados("discover/movie?with_genres=35&language=pt-BR&api_key="+API_KEY, 'filme')
            },
            {
                titulo_pesquisa: "terror",
                title: "Terror",
                items: await puxar_dados("discover/movie?with_genres=27&language=pt-BR&api_key="+API_KEY, 'filme')
            },
            {
                titulo_pesquisa: "romance",
                title: "Romance",
                items: await puxar_dados("discover/movie?with_genres=10749&language=pt-BR&api_key="+API_KEY, 'filme')
            },
            {
                titulo_pesquisa: "documentarios",
                title: "Documentários",
                items: await puxar_dados("discover/movie?with_genres=10749&language=pt-BR&api_key="+API_KEY, 'filme')
            },

        ]
    },
    filmeHome:  async  (filmeid, tipo) =>{
        var info = {}
        switch(tipo){
            case 'movie':
                info = puxar_dados("movie/"+filmeid+"?&language=pt-BR&api_key="+API_KEY)
            break;
            case 'tv':
                info = puxar_dados("tv/"+filmeid+"?&language=pt-BR&api_key="+API_KEY)
            break;
            default:
                info = null
            break;
        }
        return info
    }    

}