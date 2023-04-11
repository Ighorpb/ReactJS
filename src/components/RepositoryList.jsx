// Vai receber o conteúdo de RepositoryItem

import { useState, useEffect } from "react"; // useeffect -> Disparar uma função quando algo acontencer na minha aplicação.
import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss';

// https://api.github.com/orgs/rocketseet/repos


export function RepositoryList() {
    const [repositories, setRepositories] = useState([]);

    useEffect(() => {
        fetch('https://api.github.com/users/ighorxD/repos')
          .then(response => response.json())
          .then(data => setRepositories(data));
    }, [] );


    return (
       <section className="repository-list">
        <h1>Lista de Repositórios</h1>

        <ul>
            {repositories.map(repository => {
                return <RepositoryItem key ={repository.name}repository = {repository}/>
             })}
        </ul>
       </section> 
    );
}