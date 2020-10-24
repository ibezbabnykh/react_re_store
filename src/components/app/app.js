import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { HomePage, CartPage } from '../../routers';
import ShopHeader from '../shop-header';

function App() {
  return (
    <main role="main" className="main">
        <ShopHeader numItems={5} total={210}/>
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/cart" component={CartPage} />
        </Switch>
    </main>
  );
}

export default App;
