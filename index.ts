import { PathFinder, Network } from "@routerprotocol/asset-transfer-sdk-ts";
import { evmSignerFromPrivateKeyAndRpc } from '@routerprotocol/asset-transfer-sdk-ts';

const YOUR_WIDGET_ID = 24 
const pathfinder = new PathFinder(Network.Mainnet, '0');


const chainRPC=["https://eth.llamarpc.com","https://polygon.llamarpc.com","https://api.avax.network/ext/bc/C/rpc","https://arbitrum.llamarpc.com"]

const arrQuote=[{

    //Ethereum

    sourceChainId: "1",
    sourceTokenAddress: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
    destinationChainId: "728126428",
    destinationTokenAddress: "0xa614f803b6fd780986a42c78ec9c7f77e6ded13c",
    expandedInputAmount: "1000000",
}, 

    //Polygon

{
    sourceChainId: "137",
    sourceTokenAddress: "0xc2132D05D31c914a87C6611C10748AEb04B58e8F",
    destinationChainId: "728126428",
    destinationTokenAddress: "0xa614f803b6fd780986a42c78ec9c7f77e6ded13c",
    expandedInputAmount: "1000000",
}, 

    //Avalanche

{
    sourceChainId: "43114",
    sourceTokenAddress: "0x9702230A8Ea53601f5cD2dc00fDBc13d4dF4A8c7",
    destinationChainId: "728126428",
    destinationTokenAddress: "0xa614f803b6fd780986a42c78ec9c7f77e6ded13c",
    expandedInputAmount: "1000000",
}, 

    //Arbitrum
{
    sourceChainId: "42161",
    sourceTokenAddress: "0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9",
    destinationChainId: "728126428",
    destinationTokenAddress: "0xa614f803b6fd780986a42c78ec9c7f77e6ded13c",
    expandedInputAmount: "1000000",
}]

const main = async() => {

   
       


        for(let i=0;i<arrQuote.length;i++)
            {

                // EVM Signer for all chains

                const evmSigner = evmSignerFromPrivateKeyAndRpc("4b37e644ab78c477cf92ed880dd52d5b0d50bfe36056696d1e05ba480d5abaa3", chainRPC[i]);

                //Getting quote for all chains

                const quote = await pathfinder.getQuote(
                    arrQuote[i]
                );
                
                console.log(quote)
        
                //Executing Transaction for all chains

                const transaction = await pathfinder.executeQuote({
                    quote,
                    slippageTolerance: "1",
                    senderAddress: evmSigner.address,
                    receiverAddress: "0x8CB29084A720E6D421812A259431042F03524FED",
                },
                    {
                        evmSigner
                    }
                );
            }

      

}

main()
console.log('Radhe Radhe');
