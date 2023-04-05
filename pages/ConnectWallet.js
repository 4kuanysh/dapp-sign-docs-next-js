function ConnectWallet() {
    const [isConnected, setIsConnected] = useState(false);
    const [account, setAccount] = useState("");
  
    const connectWallet = async () => {
      if (window.ethereum) {
        try {
          await window.ethereum.request({ method: "eth_requestAccounts" });
          const web3 = new Web3(window.ethereum);
          const accounts = await web3.eth.getAccounts();
          setIsConnected(true);
          setAccount(accounts[0]);
        } catch (error) {
          console.log(error);
        }
      }
    };
  
    return (
      <div>
        {!isConnected ? (
          <button onClick={connectWallet}>Connect Wallet</button>
        ) : (
          <p>Connected with {account}</p>
        )}
      </div>
    );
  }
  
  export default ConnectWallet;