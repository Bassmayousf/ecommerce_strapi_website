import Navbarr from './navbar/Navbarr';
import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
const Layout = () => {
  return (
    
      <div >
        <Fragment>
      <Navbarr/>

      <main>
        <Outlet/>
      </main>
      </Fragment>
      </div>
    
  );
}

export default Layout;
