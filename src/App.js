import logo from './logo.svg';
import Header from './componentes/Header/Header';
import './App.css';
import React,{useEffect, useState} from 'react';
import Pesquisa from './Pesquisa';
import LinhaFilmes from './componentes/LinhaFilme/LinhaFilmes';
import FilmeDestaque from './componentes/FilmeDestaque/FilmeDestaque';

function App() {
  const [lista_filmes, setlista_filmes] = useState([]);
  const [filmeInicial, setfilmeInicial] = useState([]);
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
      setfilmeInicial(filmed)
      setcheck('ALGO')
    }
    load()
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
      {check?<FilmeDestaque item={filmeInicial}></FilmeDestaque>: null}
      <section className='listas'>
        {lista_filmes.map((item, key) =>(
          <LinhaFilmes key={item.titulo_pesquisa} titulo={item.title} itens={item.items}/>
        ))}
      </section>
    </div>
  );
}

export default App;
