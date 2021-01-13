import React from 'react';
import Layout from '../components/layout'
import PortafolioItems from '../components/PortafolioItems'


export default ({pageContext}) => (
    <Layout>
        <h1>Hola soy portfolioundercontent</h1>
        <h1 dangerouslySetInnerHTML={{__html: pageContext.title}} />
        <div dangerouslySetInnerHTML={{__html: pageContext.content}} >
        </div>
     <PortafolioItems/>

    </Layout>
)