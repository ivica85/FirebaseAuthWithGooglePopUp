import React from 'react';
import { auth } from '../Firebase/Config';

const Home = () => {
  return (
    <div>
      <h2>welcome</h2>
      <button onClick={() => auth.signOut()}>signOut</button>
    </div>
  );
};

export default Home;
