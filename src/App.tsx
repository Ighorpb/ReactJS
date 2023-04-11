// Importa o componente RepositoryList do arquivo RepositoryList.js
import { RepositoryList } from "./components/RepositoryList";

// Importa os estilos globais definidos no arquivo global.scss
import './styles/global.scss';

// Define o componente App
export function App() {
    return (
        // Renderiza o componente RepositoryList
        <RepositoryList/> 
    ) 
}
