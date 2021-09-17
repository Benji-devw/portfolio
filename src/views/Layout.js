import React from "react";
import Sections from '../Components/Sections/Sections';
import ScrollToTop from './../Components/GeneralComponents/Scroll_Top_Btn'

const Layout = () => {
  return (
    <>
      <main>
          <Sections/>
          <ScrollToTop />
      </main>
    </>
  );
}
export default Layout;
