import React from 'react';

const Pagebar = (props) => {
    const pagelist = [];
    
    for( let i =1; i < Math.ceil(props.totalPosts/props.postsPerPage); i++){
        pagelist.push(i);
    }

    return(
        <nav>
            <ul className="pagination">
                {pagelist.map((page)=>(
                    <li key={page} className="page-item">
                        <a onClick={() => props.paginate(page)} href="#"  className='page-link'>{page}</a>
                    </li>
                ))
                }
            </ul>
        </nav>
    )

}

export default Pagebar;