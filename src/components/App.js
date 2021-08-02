import React from 'react';
import Banner from "./Banner";

import Main from "./Main";

function App() {
  const [main, setMain] = React.useState(false);
  const [final, setFinal] = React.useState(false);
  

  function isOpenMain(){
    setMain(true);
  }

  function isOpenFinal(){
    setFinal(true);
  }

  function closeMain(){
    setMain(false);
  }

  return (
    <div className="page">
      <Banner
      onOpenMain={isOpenMain}
      />
      <Main
      onCloseMain={closeMain}
      onOpenFinal={isOpenFinal}
      isOpen={main}
      />
    </div>
  );
}

export default App;
