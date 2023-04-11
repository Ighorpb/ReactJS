// Importa a função render do módulo react-dom
import {render} from "react-dom";

// Importa o componente App do arquivo App.js
import { App } from './App' 

// Renderiza o componente App dentro do elemento com o id "root"
render(<App />, document.getElementById('root'))
