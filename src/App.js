import './App.css';
import { useState } from 'react';
import { ethers } from 'ethers';
import ShowCurrentTime from './showCurrentTime';


function App() {

  const [walletAddress, setWalletAddress] = useState();
  const [showMaxChar, setshowMaxChar] = useState(false);

  // Requests access to the user's META MASK WALLET
  async function requestAccount() {
    console.log('Requesting account...');

    //Check if Meta Mask Extension exists 
    if(window.ethereum) {
      console.log('detected');

      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setWalletAddress(accounts[0]);
      } catch (error) {
        console.log('Error connecting...');
      }

    } else {
      alert('Meta Mask not detected');
    }
  }

  async function connectWallet() {
    if(typeof window.ethereum !== 'undefined') {
      await requestAccount();
      const provider = new ethers.providers.Web3Provider(window.ethereum);
    }
  }

  const showmaxcarefn = () => {
    setshowMaxChar(true)
  }

  function getMaxOccurringChar(str)
{
    let mp = new Map();
    let n = str.length;
    let ans;
    let cnt=0;
    for(let i=0 ;i<n ; i++){
        mp.set(str[i], (mp.get(str[i]) || 0) + 1);
        if(cnt < mp.get(str[i])){
            ans = str[i];
            cnt = mp.get(str[i]);
        }
    }
     
    return ans;
}
   
  return (
    <div className="App">
      <header className="App-header">
        <button
        onClick={requestAccount}
        >Request Account</button>
        <h3>Wallet Address: {walletAddress}</h3>
        {walletAddress &&  <button style={{marginTop:'5px'}}
        onClick={showmaxcarefn}
        >show character</button>}
        {showMaxChar && <p>Character that appears maximum number of times consecutively: {getMaxOccurringChar(walletAddress)}</p>}
        <ShowCurrentTime />
      </header>
     
    </div>
  );
}

export default App;
