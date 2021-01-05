import React from 'react';
import {graphql, grapqhl , StaticQuery,Link} from 'gatsby'

const PortafolioItems = () => {
    return ( 
        <StaticQuery
        query={graphql`
        
        {
  allWordpressWpPortfolio{
    edges{
      node{
        id
        slug
        title
        excerpt
        content
        featured_media{
          source_url
        }
      }
    }
}
}
        
        `}
    render={props => props.allWordpressWpPortfolio.edges.map(portafolioItem => (
        <div key={portafolioItem.node.id}>

            <h2>{portafolioItem.node.title}</h2>
            <img src={portafolioItem.node.featured_media.source_url} alt="thumbnail" />
            <div  dangerouslySetInnerHTML={{__html : portafolioItem.node.excerpt}} ></div>
        <Link to={`/portfolio/${portafolioItem.node.slug}`}>Leer mas</Link>
        </div>
    ))}
    
        />
     );
}
 
export default PortafolioItems;