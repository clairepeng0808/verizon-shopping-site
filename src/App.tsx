import React from 'react';
import GlobalStyle from './components/styles/GlobalStyle';
import ProductPage from './pages/ProductPage';

function App() {
  return (
    <>
      <GlobalStyle />
      <ProductPage />
    </>
  );
}

export default React.memo(App);
