import axios from "axios";
import React, { createContext, useContext, useState } from "react";

const MortalContext = createContext();
export const useMortal = () => useContext(MortalContext);

const MortalContextProvider = ({ children }) => {
  const API_MORTAL = "http://localhost:3000/mortal";

  const [mortalProduct, setMortalProduct] = useState([]);
  const [oneMortalProduct, setOneMortalProduct] = useState({});

  async function addMortalCombatPlus(newMortalCombotProduct) {
    await axios.post(API_MORTAL, newMortalCombotProduct);
    readMortalCombatProduct();
  }

  async function readMortalCombatProduct() {
    const response = await axios.get(API_MORTAL);
    setMortalProduct(response.data);
  }

  async function mortalDeleteProduct(id) {
    await axios.delete(`${API_MORTAL}/${id}`);
    readMortalCombatProduct();
  }

  async function getOneMortalProduct(id) {
    const { data } = await axios.get(`${API_MORTAL}/${id}`);
    setOneMortalProduct(data);
  }

  async function editMortalProduct(id, newMortalAPIProduct) {
    await axios.put(`${API_MORTAL}/${id}`, newMortalAPIProduct);
    readMortalCombatProduct();
  }

  const [mortalCombatPage, setMortalCombatPage] = useState(1);
  const itemsMortalParPage = 8;
  const MortalCount = Math.ceil(mortalProduct.length / itemsMortalParPage);

  function currentPage() {
    const startPagination = (mortalCombatPage - 1) * itemsMortalParPage;
    const endPaination = startPagination + itemsMortalParPage;
    return mortalProduct.slice(startPagination, endPaination);
  }

  return (
    <MortalContext.Provider
      value={{
        mortalProduct,
        oneMortalProduct,
        addMortalCombatPlus,
        readMortalCombatProduct,
        mortalDeleteProduct,
        getOneMortalProduct,
        editMortalProduct,
        setMortalProduct,
        MortalCount,
        mortalCombatPage,
        setMortalCombatPage,
        currentPage,
      }}
    >
      {children}
    </MortalContext.Provider>
  );
};

export default MortalContextProvider;
