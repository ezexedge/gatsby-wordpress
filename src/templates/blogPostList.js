import React from 'react';
import Layout from '../components/layout'
import {Link} from 'gatsby'


export default  ({pageContext}) => (
    <Layout>
        
            {pageContext.posts.map(post => (
                <div>
                    <h3 dangerouslySetInnerHTML={{__html: post.node.title}} />
                    <small>
                        {post.node.date}
                    </small>
                    <p dangerouslySetInnerHTML={{__html: post.node.excerpt}} />
                    <div>
                        <Link to={`/post/${post.node.slug}`}>
                            leer mas
                        </Link>
                    </div>
                </div>
            ))}

            {Array.from({length: pageContext.numberOfPages}).map((page,index)=>(
                <div>
                    <Link to={index === 0 ? '/blog' : `/blog/${index + 1}`}>
                        {index + 1}
                    </Link>
                </div>
            ))}
    
    </Layout>
)