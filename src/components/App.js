import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Banner from "./Banner";

import Main from "./Main";
// import Promo from "./Promo";
import Final from './Final';

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

  // function isBannerOpen(){
  //   setBanner(true);
  // }

  return (
    <div className="page">
      {/* <Switch > */}
        {/* <Route path="/banner"> */}
          <Banner
          onOpenMain={isOpenMain}
          />
        {/* </Route> */}
        {/* <Route path="/main"> */}
          <Main
          onCloseMain={closeMain}
          onOpenFinal={isOpenFinal}
          isOpen={main}
          />
        {/* </Route> */}
      {/* </Switch> */}

      {/* <Promo
      onOpenFinal={isOpenFinal}/> */}
      {/* <Final/> */}
    </div>
  );
}

// export default withRouter(App);
export default App;
