import React, { createContext, useContext, useState, useEffect } from 'react';
import { getOpnPrice } from '../utils/helper';

const PriceContext = createContext();

export const PriceProvider = ({ children }) => {
  const [price, setPrice] = useState(null);

  const fetchPrice = async () => {
    try {
      let price = await getOpnPrice();
      if (price) {
        setPrice(price);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPrice();
  }, []);

  return (
    <PriceContext.Provider value={{ price, fetchPrice }}>
      {children}
    </PriceContext.Provider>
  );
};

export const useOpnPrice = () => {
  return useContext(PriceContext);
};
