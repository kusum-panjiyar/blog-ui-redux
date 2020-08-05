import axios from 'axios'
//sync
export const setPosts=(posts)=>{
    return {type: 'SET_POSTS', payload:posts}
}


//async
export const startGetPosts=(id)=>{
    return(dispatch) =>{
       
        axios.get('http://jsonplaceholder.typicode.com/posts')
        .then(response=>{
            const posts= response.data
            dispatch(setPosts(posts))
        })
                
    }
}