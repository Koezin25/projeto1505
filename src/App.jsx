import React from "react";
import './App.css'
const componente1 = () => (
  <>
    <section>
      <header className="header">
        AULA REACT
      </header>
      <div id='conteudo'>
      AULA INICIAL DE REACTJS
      </div>
      <footer className="footer">
        RETOMADA
      </footer>
    </section>
  </>
    )

const App = () => (
<>
<div id='root'>
 <componente1 />
 <componente1 />
 <componente1 />
 <componente1 />
  </div>
</>
  );

export default App;