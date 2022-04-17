import * as React from 'react';
import {useDispatch} from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react'

import { getPosts } from './actions';
import AppBar from './components/AppBar';
import Posts from './pages/Posts';
import NewPost from './pages/NewPost';


const App = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getPosts());;
  }, [dispatch])
  
  return (
    <ChakraProvider>
      <Router>
      <AppBar />
        <Switch>
          <Route exact path='/'>
            <Posts />
          </Route>
          <Route exact path='/new-post'>
            <NewPost />
          </Route>
        </Switch>    
      </Router>
    </ChakraProvider>
    )
  
}

export default App;