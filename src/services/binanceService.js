'use strict';
import io from 'socket.io-client';
// const url = `wss://stream.binance.com:9443`
const url = 'http://localhost:3000'
const socket = io(url);

socket.on('connection live', msg => {
  console.log('Server responded to connection');
});

socket.on('mini tickers', msg => {
  console.log('RECEIVED:', msg);
})

socket.on('single trade response', msg => console.log('Trade Response', msg));

const binance = {}

export default {
  singleTrade({sell, sellAmount, buy, buyAmount}) {
    if (sellAmount) console.log('Service asking to sell', sellAmount, sell, 'for', buy);
    if (buyAmount) console.log('Service asking to buy', buyAmount, buy, 'for', sell);
    
    socket.emit('single trade', ...arguments)
  },
  arbitrageTest() {
    console.log('Service requesting arbitrage test');
    socket.emit('arbitrage test');
  }
}
