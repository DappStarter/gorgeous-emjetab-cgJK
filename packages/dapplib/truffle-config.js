require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess knee oil skull warrior ridge remain pumpkin heavy close blue session'; 
let testAccounts = [
"0xce19af950d58f59a5cc2730ac4895e2a576827b3aee207b0ccf2d119a34a3521",
"0x01d60920c79b12500c2d8172a752517a53c687866d0cbfe4c1c113c19ba7e56f",
"0xf56f5e44de1f3f49325eff1e968908b1703bb300b04227187d7051051f56aa69",
"0x92dc18721a8380c34a22fe30fa0e725ef087745b664f68e0c138f2e71eb37c6f",
"0xabecc641ab4a08cc8d06f788f9c9f36ff76ba5f2b3ae22b3f80042e999950078",
"0x696150854cc8575979df208e2a759c85520e300bf9657df6f828f6fbcf506255",
"0x2c1e4c3281b1050ed9d2c61c25ec29fa057b531b57f993c59e49554aa5d63bf5",
"0x70bedfd96ef53eada58414fa656b2660c31ea5795fefaa768354e3dd93cbfced",
"0x6bcb0a9e5decfa618e01f53467118285bd5aeb8c2df7404db781e07bd5e3e16c",
"0x28e16213056be3799e4f680fd025a59946a89951a36448a966ae94fd57998aa2"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


