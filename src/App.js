import React, {Component, Fragment} from 'react';
// import Category from './container/category/category';
import Sidebar from './container/layouts/sidebar';

class App extends Component {
  
  render() {    
    return (
        <Fragment>
          {/* <Category/> */}
          <Sidebar/>
          
        </Fragment>
    );
  }
}

export default App;
