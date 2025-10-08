import React, { useState } from "react";
import { useWallet } from "../context/WalletContext.jsx";

const artistAddresses = {
  "MC Urbano": "0x0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcd",
  "Aurora": "0x023456789abcdef0123456789abcdef0123456789abcdef0123456789abcde",
  "NeoBit": "0x03456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef",
  "DJ Flow": "0x0456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef0",
  "Luna": "0x056789abcdef0123456789abcdef0123456789abcdef0123456789abcdef01",
};

// Dirección del contrato de USDT en Starknet Testnet
const USDT_CONTRACT = "0x053C..."; 

const ModalTip = ({ onClose, artist }) => {
  const [tipSent, setTipSent] = useState(false);
  const [amountSent, setAmountSent] = useState(0);
  const [loading, setLoading] = useState(false);
  const { wallet } = useWallet();

  const handleTip = async (amount) => {
    if (!wallet) {
      alert("Por favor conecta tu wallet antes de enviar una propina.");
      return;
    }

    const receiver = artistAddresses[artist];
    if (!receiver) {
      alert("No se encontró la dirección del artista.");
      return;
    }

    try {
      setLoading(true);
      setAmountSent(amount);

      
      const amountWei = BigInt(amount * 10 ** 18).toString();

      const tx = await wallet.execute({
        contractAddress: USDT_CONTRACT,
        entrypoint: "transfer",
        calldata: [receiver, amountWei, "0"],
      });

      console.log("Transacción enviada:", tx.transaction_hash);

      setTipSent(true);
      setLoading(false);

      
      setTimeout(() => {
        setTipSent(false);
        onClose();
      }, 2000);
    } catch (error) {
      console.error("Error enviando propina:", error);
      alert("Error al enviar propina. Ver consola.");
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="bg-gray-900 p-6 rounded-xl w-96">
        <h2 className="text-lg font-semibold mb-4">Apoya a {artist} 🎁</h2>
        <p className="text-gray-400 mb-6">
          Puedes enviar una propina para apoyar el trabajo de los artistas.
        </p>

        {!tipSent ? (
          <div className="flex gap-3 mb-6">
            {[1, 5, 10].map((amount) => (
              <button
                key={amount}
                onClick={() => handleTip(amount)}
                disabled={loading}
                className={`flex-1 py-2 rounded-lg transition-all ${
                  loading
                    ? "bg-gray-700 cursor-not-allowed"
                    : "bg-pink-600 hover:bg-pink-500"
                }`}
              >
                {loading ? "Enviando..." : `${amount} USDT`}
              </button>
            ))}
          </div>
        ) : (
          <p className="text-green-400 text-center font-semibold mb-6">
            ✅ Has enviado {amountSent} USDT a {artist}!
          </p>
        )}

        <button
          onClick={onClose}
          className="w-full py-2 bg-gray-700 hover:bg-gray-600 rounded-lg"
        >
          Cerrar
        </button>
      </div>
    </div>
  );
};

// 🔒 FUTURA INTEGRACIÓN CON STARKNET (AÚN DESACTIVADA)
// ---------------------------------------------------
// import { useStarknet, useContract, useSendTransaction } from "@starknet-react/core";
// import { CONTRACT_ADDRESS, CONTRACT_ABI } from "../constants/contract.js";

// const { account } = useStarknet();
// const { contract } = useContract({ address: CONTRACT_ADDRESS, abi: CONTRACT_ABI });
// const { sendAsync } = useSendTransaction({ calls: contract.populate("sendTip", [artistId, amount]) });

// const handleSendTip = async () => {
//   if (!account) {
//     alert("Por favor conecta tu wallet primero");
//     return;
//   }
//   try {
//     await sendAsync();
//     alert("Propina enviada con éxito en Starknet 🎉");
//   } catch (err) {
//     console.error("Error al enviar propina:", err);
//     alert("Error al procesar la propina ❌");
//   }
// };


export default ModalTip;



