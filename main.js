/*##########################
##     IMPORTS      ##
##########################*/


var Web3 = require("web3")
var Tx = require('ethereumjs-tx').Transaction
var web3 = new Web3('HTTP://127.0.0.1:7545')




/*##########################
##     CONFIGURATION      ##
##########################*/
class EtheriumTranscation {
 

 
  
  constructor(sendingAddress,receivingAddress,privateKey) {

    this.sendingAddress = sendingAddress
    this.receivingAddress = receivingAddress
    this.privatekey = privateKey
    
    
  }
   
  /*#####################################################
##     TRANSCATION FUNCTION TO MAKE TRANSCATION      ##
########################################################*/



 async  makeTranscation(privateKey,gasPrice,gasLimit,ether) {
    
  const NOUNCE = await this.nounce();
   
    return new Promise((resolve) => {
      

      var rawTranscation =
      {
       
          nonce: NOUNCE,
          to: this.receivingAddress,
          gasPrice: web3.utils.toHex(gasPrice),
          gasLimit: web3.utils.toHex(gasLimit),
          value: web3.utils.toHex(web3.utils.toWei(ether, 'ether')).toString()
        
      }

   



      var privateKeySender = privateKey;
      var privateKeySenderHex = Buffer.from(privateKeySender, 'hex')
      var transaction = new Tx(rawTranscation)
      transaction.sign(privateKeySenderHex)
      var serializedTransaction = transaction.serialize();
      resolve(web3.eth.sendSignedTransaction(serializedTransaction));
    });
  }
 
  
/*##########################
##  HELPER FUNCTIONS  ##
##########################*/

  // -- Get Balance of the specified address.
  async getBalance(address)
  {
    const msg = await this.getBalanceFromAddress(address);
    console.log(msg)
    
  }
  getBalanceFromAddress(address) {
    return new Promise(resolve => {
      web3.eth.getBalance(address, function (err, result) {
        if (err) {
          console.log(err)
        } else {
          resolve(web3.utils.fromWei(result, "ether") + " ETH")
        }
      })
    })
  }


  //--  Get Latest Nounce dynamically.

  dynamicNounce(sendingAddress) {
    return new Promise((resolve) => {
      web3.eth.getTransactionCount(sendingAddress)
        .then((val) => {
          resolve(val)
        }).catch((err) => {
          console.log(err)
        });
    })
  }
  async  nounce() {
    return await this.dynamicNounce(this.sendingAddress)
    
  }
}

/*##########################
##    FUNCTION CALL     ##
##########################*/

sendingAddress = '0x9a03c4A68DE00F1256d8337632d4cf7dB14b2abd';
receivingAddress = '0x43bD9ee44B2D5dA84887330c937CBd46F273C651';
privateKey = '2c34a18114265d3e983120131f7c7f1f384271e04c56ace658acaa47be6aff0b';
gasPrice= 20000000;
gasLimit= 30000;
ether = 2;

let txn = new EtheriumTranscation(sendingAddress,receivingAddress,privateKey);

txn.makeTranscation(privateKey,gasPrice,gasLimit,ether.toString()).then(res => {
  txn.getBalance(txn.sendingAddress)
  txn.getBalance(txn.receivingAddress)
}).catch((err) => {
  console.log(err)
})












