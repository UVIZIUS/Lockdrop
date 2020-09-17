<template>
    <section class="section section-components pb-0" id="section-components">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-12">
                    <!-- Basic elements -->
                    <h2 class="mb-5">
                        <span>Telikos Initial DAO Lockdrop</span>
                    </h2>
                    <card shadow >This will lockup your Ethereum in a Smart Contract for the amount of time you set. After which, it will be returned to you. The longer you lock it up, the larger your reward.</card>
                    <card shadow>
                    <div class='row'>
                        <div class="col-lg-6 col-sm-6">
                            <label>Ethereum to Lockup</label> <span class='float-right'>Balance<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 256 417" preserveAspectRatio="xMidYMid"><path fill="#343434" d="M127.961 0l-2.795 9.5v275.668l2.795 2.79 127.962-75.638z"/><path fill="#8C8C8C" d="M127.962 0L0 212.32l127.962 75.639V154.158z"/><path fill="#3C3C3B" d="M127.961 312.187l-1.575 1.92v98.199l1.575 4.6L256 236.587z"/><path fill="#8C8C8C" d="M127.962 416.905v-104.72L0 236.585z"/><path fill="#141414" d="M127.961 287.958l127.96-75.637-127.96-58.162z"/><path fill="#393939" d="M0 212.32l127.96 75.638v-133.8z"/></svg><span class='text-primary font-weight-bold '><u><span class='balance' @click='maxStake()'>{{displayBalance}}</span></u></span></span>
                            <base-input
                                        placeholder="0.0000000" v-model=stake :valid="false">
                            </base-input>
                            <base-slider v-model="slider"></base-slider>

                        </div>
                    
                        <div class='col-lg-6 col-sm-6'>
                            <label>Duration</label>
                            <select class='form-control'>
                                <option>1 Months</option>
                                <option>3 Months</option>
                                <option>6 Months</option>
                                <option>12 Months</option>
                                <option>24 Months</option>

                            </select>
                        </div>
                    </div>
                    <div class='row'>
                        <div class="col-lg-8 col-sm-12">
                            <label>Estimated Telikos based on <span class='text-primary font-weight-bold'>$349.59</span> per Ethereum</label>
                            <base-input alternative
                                        placeholder="12213.12112">
                            </base-input>

                        </div>
                    </div>
                    <base-button class='btn-primary btn-block' icon='fa fa-rocket mr-2'>Attain Telikos</base-button>                        
                   </card>
                </div>
            </div>
        </div>
    </section>

</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'lockdrop',
    data: function() { return  {
            slider: 0,
            stake: '',
            accounts: {},
            balance: this.balance,
            noslide: false,
            nostake: false,

        }
    },
    watch: {
        slider: async function() {
            let acnt = await window.web3.eth.getAccounts();
            let balance = await window.web3.eth.getBalance(acnt[0])
            balance = parseInt(balance * (this.slider / 100))
            
            balance = window.web3.utils.fromWei(balance.toString())
            this.noslide = true;
            if(!this.nostake)
                this.stake = balance
            else
                this.nostake = false

        },
        stake: async function(val) {
            let acnt = await window.web3.eth.getAccounts();
            let balance = await window.web3.eth.getBalance(acnt[0])
            var percentage;
            balance = window.web3.utils.fromWei(balance.toString())
            percentage = parseInt(( val / balance) * 100)
            percentage = Math.min(100, percentage)
            this.nostake = true;
            if(!this.noslide)
                this.slider = percentage
            else
                this.noslide = false;
        }

    },
    computed: {
        ...mapGetters([
            'displayBalance'
        ])        
    },
    methods: {
        maxStake: async function() {
            let acnt = await window.web3.eth.getAccounts();
            let balance = await window.web3.eth.getBalance(acnt[0])
            balance = window.web3.utils.fromWei(balance.toString())
            this.stake = balance
        }

    }
}

</script>
<style>
 svg {
     margin-bottom: 5px;
 }
</style>

<style scoped>
    .balance {
        cursor: pointer;
    }
    .mb-5 {
        text-align:center;
    }
</style>
