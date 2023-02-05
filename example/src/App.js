import React from 'react'
import { Link, Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to='/'>Simple form</Link>
          </li>
          <li>
            <Link to='/init?age=34&fn=Yura&ln=Chuchola'>Initialize form</Link>
          </li>
          <li>
            <Link to='/loading?age=34&fn=Yura&ln=Chuchola'>Loading...</Link>
          </li>
        </ul>
      </nav>
      <div className='content'>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
