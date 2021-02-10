import React from 'react';

const Page = (props) => {
    if(props.loading){
        return <h2>Loading....</h2>
    }
    else{
        return (
            <div>    
                <ul className="list-group mb-4">
                   {
                       props.posts.map((post)=>{
                        return <li key={post.id} className="list-group-item">{post.id}. {post.title}</li>
                       })
                   } 
                </ul>
            </div>
        )
    }
    
}

export default Page;