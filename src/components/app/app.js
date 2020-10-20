import React from 'react';

import Spinner from '../spinner';

import ErrorBoundary from '../error-boundary';

function App() {
  return (
    <ErrorBoundary>
      <div className="App">
        Hello
        <Spinner />
      </div>
    </ErrorBoundary>

  );
}

export default App;
