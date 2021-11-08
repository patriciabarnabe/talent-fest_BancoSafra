//import reactDom from 'react-dom';
import { Switch, Route } from 'react-router-dom';

import  PageNotFound from '../pages/notfound'

export const Routes = () => {
  return (
    <Switch>
      <Route component={() => <div>Page 404</div>} />   
      <Route component={() => <div>Page 404</div>} />
    </Switch>
  )
}