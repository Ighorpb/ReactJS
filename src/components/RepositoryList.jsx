import { useState, useEffect } from "react"; // Importando hooks do React para usar no componente.
import { RepositoryItem } from "./RepositoryItem"; // Importando o componente filho.
import '../styles/repositories.scss'; // Importando o arquivo de estilos do componente.

export function RepositoryList() {
    const [repositories, setRepositories] = useState([]); // Utilizando o hook 'useState' para definir o estado do componente.

    useEffect(() => { // Utilizando o hook 'useEffect' para disparar uma função quando algo acontecer na aplicação.
        fetch('https://api.github.com/users/ighorxD/repos') // Chamando uma API para buscar informações.
          .then(response => response.json()) // Transformando a resposta em JSON.
          .then(data => setRepositories(data)); // Atualizando o estado do componente com os dados obtidos na API.
    }, [] ); // Usando o array vazio para garantir que a função seja disparada apenas uma vez, no momento da montagem do componente.

    return (
       <section className="repository-list"> 
        <h1>Lista de Repositórios</h1> 

        <ul> 
            {repositories.map(repository => {                                              // Mapeando o estado do componente e retornando um componente 'RepositoryItem' para cada item.
                return <RepositoryItem key ={repository.name} repository = {repository}/> // Passando as propriedades 'key' e 'repository' para o componente filho.
             })}
        </ul>
       </section> 
    );
}
