// import { createContext, useContext,useState } from 'react';

// const AppContext = createContext();

// export function AppWrapper({ children }) {
//     const [ displaySideMenu,setDisplaySideMenu ] = useState(false);

//     const toggleSideMenu = () => {
//         setDisplaySideMenu(!displaySideMenu);
//     }

//   return (
//     <AppContext.Provider value={{displaySideMenu,toggleSideMenu}}>
//       {children}
//     </AppContext.Provider>
//   );
// }

// export function useAppContext() {
//   return useContext(AppContext);
// }

import { createContext, useState } from 'react';

const IndiceContext = createContext();

const IndiceProvider = ({ children }) => {
  const [displaySideMenu, setDisplaySideMenu] = useState(false);

  const toggleSideMenu = () => {
    setDisplaySideMenu(!displaySideMenu);
  };


  return (
    <IndiceContext.Provider
      value={{
        displaySideMenu,
        toggleSideMenu,
      }}
    >
      {children}
    </IndiceContext.Provider>
  );
};

export { IndiceProvider, IndiceContext };
