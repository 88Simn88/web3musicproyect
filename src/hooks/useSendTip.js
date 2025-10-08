import { useState } from "react";
import { Contract, Provider, Account } from "starknet";
import { CONTRACT_ADDRESS, CONTRACT_ABI } from "../constants/contract.js";

export const useSendTip = () => {
  const [isSending, setIsSending] = useState(false);
  const [txHash, setTxHash] = useState(null);
  const [error, setError] = useState(null);

  // ✅ Enviar propina al artista
  const sendTip = async (artistId, amount, wallet) => {
    if (!wallet) {
      setError("Por favor conecta tu wallet antes de enviar una propina.");
      return;
    }

    try {
      setIsSending(true);
      setError(null);

      // Proveedor de Starknet
      const provider = new Provider({ sequencer: { network: "sepolia" } });

      // Cuenta conectada desde el contexto o wallet del usuario
      const account = new Account(provider, wallet.address, wallet.signer);

      // Crear instancia del contrato
      const contract = new Contract(CONTRACT_ABI, CONTRACT_ADDRESS, account);

      // Ejecutar función del contrato (placeholder por ahora)
      const tx = await contract.invoke("sendTip", [artistId, amount]);

      setTxHash(tx.transaction_hash);
      console.log("💸 Propina enviada:", tx.transaction_hash);
    } catch (err) {
      console.error("❌ Error al enviar propina:", err);
      setError("No se pudo completar la transacción.");
    } finally {
      setIsSending(false);
    }
  };

  return { sendTip, isSending, txHash, error };
};
