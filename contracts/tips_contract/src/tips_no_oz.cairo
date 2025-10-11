// src/lib.cairo
use starknet::ContractAddress;
use starknet::get_caller_address;
use starknet::get_block_timestamp;
use integer::u256;

#[starknet::interface]
trait IERC20<TContractState> {
    fn transfer_from(
        self: @TContractState, 
        sender: ContractAddress, 
        recipient: ContractAddress, 
        amount: u256
    );
}

#[starknet::contract]
mod tips {
    use super::*;

    #[event]
    fn TipSent(
        from: ContractAddress,
        to: ContractAddress,
        token: ContractAddress,
        amount: u256,
        timestamp: u64
    );

    #[storage]
    struct Storage {
        tips_received: LegacyMap<ContractAddress, u256>
    }

    #[abi(embed_v0)]
    impl ITips of super::ITips<ContractState> {
        fn send_tip(
            ref self: ContractState,
            artist: ContractAddress,
            token: ContractAddress,
            amount: u256
        ){
            assert(amount > 0_u256, 'Amount must be positive');
            assert(artist != ContractAddress::default(), 'Invalid artist address');
            assert(token != ContractAddress::default(), 'Invalid token address');

            let caller = get_caller_address();
            let ts = get_block_timestamp();

            // Llamada directa al contrato ERC20
            IERC20Dispatcher { contract_address: token }
                .transfer_from(caller, artist, amount);

            let current = self.tips_received.read(artist);
            self.tips_received.write(artist, current + amount);

            TipSent(caller, artist, token, amount, ts);
        }
    }
}
