# Installation

Download and install Ganache GUI from its official website. After that open GUI. Copy paste RPC server URL in the below code if its different as well as address you need to make transcations like sending address, recieving address, private key(sender), gas limit and gas price and run code using node.

# Etherium with web3js Demo using Ganache

This project is created by **Pranav Madhani** following udacity blockchain tutorials modules. This code is self created & modified version of the code that you can find in Blockchain developer (ourse part 5 module 1 lesson 1). The file included is **main.js**. This file makes uses of the external js libs such as **web3js** and **etheriumjs-tx** to connect to **Ganache GUI** and make transcations.

## Description of Files

   
 * _**main.js**_ is the file which contains all the functions and Etherium class,also it contains helper functions that can dynamically return latest nounce without updating manually and easy modification of code support so that you can easily change [**sending address, recieving address, private key, gas limit, gas price as well as ether value**] dynamically.
 
  


## Main Functions
* **_makeTranscation()_** method is used to make transcation by providing privateKey,gasPrice,gasLimit and ether value. You can test this by downloading the source-code and connect to ganache GUI.
```
async makeTranscation(privateKey,gasPrice,gasLimit,ether) {

**** executable code ******

}

```

* **_getBalance(address)_** method is used to get balance from specified address. It uses JS promises.

```


async getBalance(address)
  {
   **** executable code ******
    
  }

```

* **_dynamicNounce(sendingAddress)_** method is used to get transcation count originating from the specified address or  nounce value. It uses JS promises.

```

dynamicNounce(sendingAddress)
{
     **** executable code ******
}

```

### Subordinate Methods

*  There are other subordinate methods included in the code which are called when main methods are called. 


