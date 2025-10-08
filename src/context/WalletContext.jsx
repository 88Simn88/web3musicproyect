import React, { createContext, useContext, useState, useEffect } from "react";
import { connect, disconnect } from "starknetkit";

const WalletContext = createContext();

export const WalletProvider = ({ children }) => {
  const [wallet, setWallet] = useState(null);

  // Conectar wallet
  const connectWallet = async () => {
    try {
      const connection = await connect({
        modalMode: "alwaysAsk", 
        webWalletUrl: "https://web.argent.xyz", 
      });

      if (connection && connection.account) {
        setWallet(connection.account);
        localStorage.setItem("connectedWallet", connection.account.address);
      }
    } catch (error) {
      console.error("Error conectando wallet:", error);
    }
  };

  // Desconectar wallet
  const disconnectWallet = async () => {
    await disconnect();
    setWallet(null);
    localStorage.removeItem("connectedWallet");
  };

  // Reconexion automática
  useEffect(() => {
    const reconnect = async () => {
      const address = localStorage.getItem("connectedWallet");
      if (address) {
        try {
          const connection = await connect({ modalMode: "neverAsk" });
          if (connection && connection.account) {
            setWallet(connection.account);
          }
        } catch (err) {
          console.warn("No se pudo reconectar la wallet:", err);
        }
      }
    };
    reconnect();
  }, []);

  return (
    <WalletContext.Provider value={{ wallet, connectWallet, disconnectWallet }}>
      {children}
    </WalletContext.Provider>
  );
};

export const useWallet = () => useContext(WalletContext);






