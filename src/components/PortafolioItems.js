import React from 'react';
import styled from 'styled-components'
import {graphql, grapqhl , StaticQuery,Link} from 'gatsby'


const PortfolioItemsWrapper = styled.div`

  display: flex;
  justify-content: center;

`

const PortfolioItem = styled.div`

width: 300px;
border: 1px solid #efefef;
margin: 16px;
padding: 16px;

`

const PortfolioImg = styled.img`

max-width: 100%;

`

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
    render={props => (<PortfolioItemsWrapper> {props.allWordpressWpPortfolio.edges.map(portafolioItem => (
        <PortfolioItem key={portafolioItem.node.id}>

            <h2>{portafolioItem.node.title}</h2>
            <PortfolioImg src={portafolioItem.node.featured_media.source_url} alt="thumbnail" />
            <div  dangerouslySetInnerHTML={{__html : portafolioItem.node.excerpt}} ></div>
        <Link to={`/portfolio/${portafolioItem.node.slug}`}>Leer mas</Link>
        </PortfolioItem>
    ))}
    </PortfolioItemsWrapper>
    )}
    
    
        />
        
     );
}
 
export default PortafolioItems;