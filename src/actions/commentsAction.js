import axios from 'axios'
//sync

export const setComments=(comments)=>{
    return {type: 'SET_COMMENTS', payload:comments}
}

//async
export const startGetComments=(id)=>{
    return(dispatch) =>{
        axios.get('http://jsonplaceholder.typicode.com/comments')
        .then(response=>{
            const comments= response.data
            dispatch(setComments(comments))
        })
       
    }
}