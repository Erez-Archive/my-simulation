<template>
  <div class="trade-line">
    <h2> Sell Orders </h2>
    <div class="line-buttons">
      <input type="text" v-model="sellOrder.coinToSell" placeholder="Coin to sell">
      <input type="number" step="0.1" v-model="sellOrder.amount" placeholder="Sell Amount">
      <input type="text" v-model="sellOrder.coinToBuy" placeholder="Coin to Buy">
      <button @click.stop="setSellOrder"> Trade </button>
    </div>
    <div class="check-data">
      <div> Coin to sell: {{sellOrder.coinToSell}} </div>
      <div> Amount: {{sellOrder.amount}} </div>
      <div> Coin to Buy: {{sellOrder.coinToBuy}} </div>
    </div>
    <br/>
    <h2> Buy Orders </h2>
    <div class="line-buttons">
      <input type="text" v-model="buyOrder.coinToBuy" placeholder="Coin to buy">
      <input type="number" step="0.1" v-model="buyOrder.amount" placeholder="Buy Amount">
      <input type="text" v-model="buyOrder.coinToSell" placeholder="Coin to sell">
      <button @click.stop="setBuyOrder"> Trade </button>
    </div>
    <div class="check-data">
      <div> Coin to buy: {{buyOrder.coinToBuy}} </div>
      <div> Amount: {{buyOrder.amount}} </div>
      <div> Coin to Sell: {{buyOrder.coinToSell}} </div>
    </div>
    <br/>
    <h2> Single Arbitrage Test </h2>
    <button @click.stop="runSingleTest"> Trade </button>

  </div>
</template>

<script>
import binanceService from '../services/binanceService.js'
export default {
  name: 'trade-line',
  data() {
    return {
      sellOrder: {
        coinToSell: '',
        amount: null,
        coinToBuy: '',
      },
      buyOrder: {
        coinToBuy: '',
        amount: null,
        coinToSell: '',
      },
    }
  },
  methods: {
    setSellOrder() {
      binanceService.singleTrade({
        sell: this.sellOrder.coinToSell,
        sellAmount: this.sellOrder.amount,
        buy: this.sellOrder.coinToBuy,
        buyAmount: null,
      })
    },
    setBuyOrder() {
      binanceService.singleTrade({
        buy: this.buyOrder.coinToBuy,
        buyAmount: this.buyOrder.amount,
        sell: this.buyOrder.coinToSell,
        sellAmount: null,
      })
    },
    runSingleTest() {
      console.log("Running Test!");
      binanceService.arbitrageTest();
    }
  },
}
</script>

<style scoped lang="scss">

</style>
