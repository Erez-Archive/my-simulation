'use strict'
import axios from 'axios'
import {binance} from './binanceService'
const serverRoot = 'http://localhost:3010'

const state = {
  tradeMarkets: [
    'XRP/ETH', 'BCC/ETH', 'ETH/BTC', 'XRP/BTC', 'TRX/ETH'
  ],
  currMarketIdx: 0,
  rateLimit: 3000,
  tickPerformed: null,
  cycleTime: 10000,
  isRunning: false,
  coolDownTimer: null,
  booksData: null
}

const printBooks = () => console.log(state.booksData)

const getBooks = async market => await axios.get(`${serverRoot}/data/orderBooks/${market}`);

const runSimulation = async() => {
  clearTimeout(state.coolDownTimer);
  if (state.isRunning) {
    const market = state.tradeMarkets[state.currMarketIdx];
    const books = await getBooks(market);
    console.log(`Books for market ${market}:`);
    console.log(books)
    state.currMarketIdx = (state.currMarketIdx === state.tradeMarkets.length - 1) ? 0 : state.currMarketIdx +1;
    console.log('got markets! cooling down...');
  }
  state.coolDownTimer = setTimeout(() => {
    runSimulation()
  }, state.cycleTime)
}

const startSimulation = () => {
  state.isRunning = true;
  runSimulation();
}

const stopSimulation = () => {
  state.isRunning = false;

  clearTimeout(state.coolDownTimer);
  console.log('Simulation Ended')  
}

export default {
  printBooks,
  startSimulation,
  stopSimulation
}
