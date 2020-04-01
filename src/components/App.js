import React from 'react';
import Main from './Main';
import Particleswrap from './Particles';
import Zoom from 'react-reveal/Zoom';

function App() {

  return (
    <div className="App">
      <Zoom>
        <section>
          <Particleswrap />
          <Main />
        </section>
      </Zoom>
    </div>
  );
}

export default App;
