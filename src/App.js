import { useRef } from 'react';
import useWindowSize from './hooks/useWindowSize';
import dataJson from './data/data.json';
import './styles/app.css';

import HeaderApp from './layout/HeaderApp/HeaderApp';
import BodyApp from './layout/BodyApp/BodyApp';
import AsideApp from './layout/AsideApp/AsideApp';
import MainApp from './layout/MainApp/MainApp';

function App() {

  const dataApp = dataJson || null;
  const headerWrapper = useRef();
  const mainElement = useRef();
  const { width, height } = useWindowSize();
  
  const getHeaderWrapperHeight = () => {
    return (width && headerWrapper?.current?.offsetHeight) ? 
      `${headerWrapper.current.offsetHeight - 1}px` : null;
  };

  return (
    <div className="wrapper">
      {dataApp ? 
        (<>
          <HeaderApp headerRef={headerWrapper} />
          <BodyApp paddingTopValue={getHeaderWrapperHeight()}>
            <AsideApp 
              screenWidth={width} 
              screenHeight={height} 
              topValue={getHeaderWrapperHeight()} 
              githubUrl={dataApp.information.github} 
            />
            <MainApp 
              mainRef={mainElement} 
              data={dataApp.body} 
            />
          </BodyApp>
        </>)
        :
        (<p>No data loaded.</p>)    
      }
    </div>
  );
}

export default App;
