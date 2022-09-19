import logo from './logo.svg';
import './App.css';
import React,{useEffect, useState} from 'react';
import Pesquisa from './Pesquisa';
import LinhaFilmes from './componentes/LinhaFilme/LinhaFilmes';
import FilmeDestaque from './componentes/FilmeDestaque/FilmeDestaque';

function App() {
  const [lista_filmes, setlista_filmes] = useState([]);
  useEffect( () =>{
    const load = async () => {
      const lista = await Pesquisa.homelist()
      setlista_filmes(lista)
      let list = lista.filter(i => i.titulo_pesquisa === "recomendado") 
      let principal = list[0].items.results[0]
      console.log(principal)
    }
    load()
  }, [])
  return (
    <div className="App">
      <FilmeDestaque></FilmeDestaque>
      <section className='listas'>
        {lista_filmes.map((item, key) =>(
          <LinhaFilmes key={item.titulo_pesquisa} titulo={item.title} itens={item.items}/>
        ))}
      </section>
    </div>
  );
}

export default App;
