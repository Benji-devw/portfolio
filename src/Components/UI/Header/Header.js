import React from 'react';
import Nav from './Nav';

const Header = () => {

  const [backG, setBackG] = React.useState("#222222)")
  const theme = localStorage.getItem('theme');
  
  React.useEffect(() => {
    if (theme !== 'light') {
      setBackG("#222222")
    } else { setBackG("rgb(245, 245, 245)") }
  }, [theme])
  


  return (
    <div className="header" style={{ backgroundColor: backG, transitionDuration: "1s" }}>
      <Nav />
    </div>
  );
};

export default Header;
