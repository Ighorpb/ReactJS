// Criação do Repository List que vai ser enviado para o List que vai ser enviado para o App

interface RepositoryItemProps {
    repository: {
        name: string;
        description: string;
        html_url: string;
    }
}

export function RepositoryItem(props: RepositoryItemProps) {
        return (
            <li>
            <strong>{props.repository.name}</strong>
            <p>{props.repository.description}</p>

            <a href={props.repository.html_url}> 
                Acessar repositórios
            </a>
        </li>    
   )
        
}

// Componentes do ReactJS tem a mesma funcionalidade de uma tag HTML. Sempre começar o componente com letra maiscúla 'A'