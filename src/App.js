import React from 'react'
import UsersList from './UsersList'
import UsersShow from './UserShow'
import Posts from './Posts'
import {BrowserRouter, Route, Link} from 'react-router-dom'
import PostShow from './PostShow'

function App (props){
    return(
            <BrowserRouter>
                    <div>

                        <h1>Hello React App</h1>
                        
                        <Link to="/users">Users</Link> -
                        <Link to="/posts">Posts</Link>                    

                       
                        <Route path="/users" component={UsersList} exact={true}/>
                        <Route path="/users/:id" component={UsersShow}/>
                        <Route path="/posts" component={Posts} exact={true}/>
                        <Route path="/posts/:id" component={PostShow}/>

                    </div>
            </BrowserRouter>
            
    )
}
export default App