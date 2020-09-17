<template>
    <div class='fixed-bottom account'>
        <div class='row text-right'>
            <div class='offset-sm-8 col-sm-2' @click='connectEth()'>
                <span class='details shadow'>{{status}}</span>
                <span class='status' :class='isconnected'><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 256 417" preserveAspectRatio="xMidYMid"><path fill="#343434" d="M127.961 0l-2.795 9.5v275.668l2.795 2.79 127.962-75.638z"/><path fill="#8C8C8C" d="M127.962 0L0 212.32l127.962 75.639V154.158z"/><path fill="#3C3C3B" d="M127.961 312.187l-1.575 1.92v98.199l1.575 4.6L256 236.587z"/><path fill="#8C8C8C" d="M127.962 416.905v-104.72L0 236.585z"/><path fill="#141414" d="M127.961 287.958l127.96-75.637-127.96-58.162z"/><path fill="#393939" d="M0 212.32l127.96 75.638v-133.8z"/></svg></span>            
            </div>
        </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'

const Web3 = require("web3");
const ethEnabled = () => {
  if (window.ethereum) {
    window.web3 = new Web3(window.ethereum);
    window.ethereum.enable();
    return true;
  }
  return false;
}
/*
if (!ethEnabled()) {
  alert("Please install an Ethereum-compatible browser or extension like MetaMask to use this dApp!");
}*/

export default {
  name: "ethaccounts",
    data: function() {
        return {
            status: "Connect",
            isconnected:''
        }
    },
    methods: {
        connectEth: async function () {
            if (!ethEnabled()) {
                alert("Please install an Ethereum-compatible browser or extension like MetaMask to use this dApp!");
            }         
            else {
                let acnt = await window.web3.eth.getAccounts();
                let balance = await window.web3.eth.getBalance(acnt[0])
                this.status = this.displayAddr(acnt[0])
                this.isconnected = 'connected'
                this.accounts = acnt
                this.account = acnt[0]
                this.setBalance(window.web3.utils.fromWei(balance.toString()))
            }

        },
        displayAddr: function(addr) {
            var output = addr.substr(0, 7)
            output = output + '...' + output.substr(-5, 5)
            return output
        },
        ...mapMutations([
            'setBalance',
        ]),        
    }
};

</script>
<style scoped>
    .account {
        bottom: 100px;
        color:black;

    }
    .shadow {
        -webkit-box-shadow: 0 15px 35px rgba(50, 50, 93, 0.1), 0 5px 15px rgba(0, 0, 0, 0.07) !important;
        box-shadow: 0 15px 35px rgba(50, 50, 93, 0.1), 0 5px 15px rgba(0, 0, 0, 0.07) !important;
    }
    .status {
        border-top: 3px solid red;
        border-right: 3px solid red;
        border-bottom: 3px solid red;
        border-radius: 90%;
        padding: 6px;
        padding-top: 12px;
        padding-bottom: 12px;
        margin-right:10px;
        background-color: white;
        cursor: pointer;
    }
    .connected{
        border-top: 3px solid greenyellow;
        border-right: 3px solid greenyellow;
        border-bottom: 3px solid greenyellow;
        
    }    
    .details {
        line-height: 50px;
        padding: 10px;
        background-color:rgba(255,255,255, 0.21);        
        border-radius: 15px;
        cursor: pointer;

    }
</style>
