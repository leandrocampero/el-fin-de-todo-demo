import logo from './logo.svg'
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Ejemplo usando React</h1>
        <p>
          <code>Aplicación desplegada con fleek.co a través de IPFS</code>
        </p>
        <a
          className="App-link"
          href="https://docs.fleek.co/hosting/site-deployment/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Desplegar una aplicación web con fleek
        </a>
        <br />
        <a
          className="App-link"
          href="https://docs.ipfs.io/concepts/what-is-ipfs/"
          target="_blank"
          rel="noopener noreferrer"
        >
          ¿Qué es IPFS?
        </a>
      </header>
    </div>
  )
}

export default App
