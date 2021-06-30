import React from 'react';
import "./StartScreen.css";


// import CryptoSendLogo from "../../CryptoSendLogo.png";

class StartScreenComponent extends React.Component{


    render() {
        return(
         <div className="Container">
             <div className="Logo">
                <img src={require('../../CryptoSendLogo.png').default} alt="Logo"/>
             </div>
             <div className="TitleText">
                 <p>Crypto address book</p>
             </div>
             <div className="DescriptionText">
                 <p>The easiest and quickest way to manage and pay your contact. Connect your wallet to begin</p>
             </div>
             <div className="ConnectToWalletButton">
                 <button>Connect Wallet</button>
             </div>
         </div>
        )
}

};


export default StartScreenComponent;
