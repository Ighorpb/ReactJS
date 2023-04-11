// Criação do Repository List que vai ser enviado para o List que vai ser enviado para o App

export function RepositoryItem(props) {
        return (
            <li>
            <strong>{props.repository.name}</strong>
            <p>Forms in ReactJS</p>

            <a href={props.repository.html_url}>
                Acessar repositórios
            </a>
        </li>    
   )
        
}

// Componentes do ReactJS tem a mesma funcionalidade de uma tag HTML. Sempre começar o componente com letra maiscúla 'A'