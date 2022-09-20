import logo from './logo.svg';
import Header from './componentes/Header/Header';
import './App.css';
import React,{useEffect, useState} from 'react';
import Pesquisa from './Pesquisa';
import LinhaFilmes from './componentes/LinhaFilme/LinhaFilmes';
import FilmeDestaque from './componentes/FilmeDestaque/FilmeDestaque';
import { Contexto } from './componentes/StoreProvider';

function App() {
  const {setfilmePrincipal, loading, setloading} = React.useContext(Contexto)
  const [lista_filmes, setlista_filmes] = useState([]);
  const [ check, setcheck] = useState(null)
  const [blackheader, setblackheader] = useState(false)
  useEffect( () =>{
    const load = async () => {
      const lista = await Pesquisa.homelist()
      setlista_filmes(lista)
      let list = lista.filter(i => i.titulo_pesquisa === "recomendado") 
      let index = list[0].items.results.length
      let i = Math.floor(Math.random() * (index - 1 + 1) + 1);
      let principal = list[0].items.results[i]
      let filmed = await Pesquisa.filmeHome(principal.id, 'movie')
      setfilmePrincipal(filmed)
      setcheck('ALGO')
    }
    load()
    setTimeout(() => {
      setloading('loading');
    }, "3000")
    
  }, [])
  useEffect(()=>{
    const scrollevent = () =>{
      if(window.scrollY> 10){
        setblackheader(true)
      }
      else{
        setblackheader(false)
      }
    }
    window.addEventListener("scroll", scrollevent)
    return () => {
      window.removeEventListener("scroll", scrollevent)
    }
  })
  return (
    <div className="App">
      <Header exibir={blackheader}></Header>
      {check?<FilmeDestaque></FilmeDestaque>: null}
      <section className='listas'>
        {lista_filmes.map((item, key) =>(
          <LinhaFilmes key={item.titulo_pesquisa} tipo={item.tipo} titulo={item.title} itens={item.items}/>
        ))}
      </section>
      <footer>
        <h3>Feito com ❤ por Vitor Manoel</h3>
        <h3>Todo os direitos reservados para a Netflix</h3>
        <h3>Chama no zap</h3>
      </footer>
        <div className={loading}>
          <img alt="loading" src='https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif'></img>
        </div>
    </div>
  );
}

export default App;
