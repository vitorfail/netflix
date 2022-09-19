import axios from "axios";
const API_KEY = "37a5ea6b4e67602b0c6b3de98d443722";
const Base = "https://api.themoviedb.org/3/"


const Pesquisa = axios.create({
    baseURL: Base
})
async function puxar_dados(tipo){
    var dados = []
    await Pesquisa.get(tipo).then(res =>{
        dados= res.data
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
                items: await puxar_dados("discover/tv?with_network=213&language=pt-BR&api_key="+API_KEY)
            },
            {
                titulo_pesquisa: "recomendado",
                title: "Recomendados para você",
                items: await puxar_dados("trending/all/week?&language=pt-BR&api_key="+API_KEY)
            },
            {
                titulo_pesquisa: "em_alta",
                title: "Em alta",
                items: await puxar_dados("movie/top_rated?&language=pt-BR&api_key="+API_KEY)
            },
            {
                titulo_pesquisa: "acao",
                title: "Ação",
                items: await puxar_dados("discover/movie?with_genres=28&language=pt-BR&api_key="+API_KEY)
            },
            {
                titulo_pesquisa: "comedia",
                title: "Comédia",
                items: await puxar_dados("discover/movie?with_genres=35&language=pt-BR&api_key="+API_KEY)
            },
            {
                titulo_pesquisa: "terror",
                title: "Terror",
                items: await puxar_dados("discover/movie?with_genres=27&language=pt-BR&api_key="+API_KEY)
            },
            {
                titulo_pesquisa: "romance",
                title: "Romance",
                items: await puxar_dados("discover/movie?with_genres=10749&language=pt-BR&api_key="+API_KEY)
            },
            {
                titulo_pesquisa: "documentarios",
                title: "Documentários",
                items: await puxar_dados("discover/movie?with_genres=10749&language=pt-BR&api_key="+API_KEY)
            },

        ]
    }    

}