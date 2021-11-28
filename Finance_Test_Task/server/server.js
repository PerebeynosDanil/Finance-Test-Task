'use strict';
const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);
const socketIo = require("socket.io");
const io = socketIo(server, {
  cors: {
    origin: "*",
  }
});
const cors = require('cors');

const FETCH_INTERVAL = 5000;
const PORT = process.env.PORT || 4000;

const tickers = [
  'AAPL', // Apple
  'GOOGL', // Alphabet
  'MSFT', // Microsoft
  'AMZN', // Amazon
  'FB', // Facebook
  'TSLA', // Tesla
];

function randomValue(min = 0, max = 1, precision = 0) {
  const random = Math.random() * (max - min) + min;
  return random.toFixed(precision);
}

function utcDate() {
  const now = new Date().toLocaleString();

  return now;
}

function getQuotes() {

  const quotes = tickers.map(ticker => ({
    tickerName: ticker,
    exchange: 'NASDAQ',
    price: randomValue(100, 300, 2),
    change: randomValue(0, 200, 2),
    change_percent: randomValue(0, 1, 2),
    dividend: randomValue(0, 1, 2),
    yieldValue: randomValue(0, 2, 2),
    last_trade_time: utcDate(),
  }));

  return quotes;
}
app.use(cors());

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

let interval;

function sendDate(time, socket) {

  if (interval) {
    clearInterval(interval);
  }
  interval = setInterval(() => getApiAndEmit(socket), time);
  socket.on("disconnect", () => {
    clearInterval(interval);
  });
}

io.on("connection", (socket) => {
  socket.on('Interval', function (data, callback) {
    if (data.time) {
      sendDate(data.time, socket);
      return callback('User interval time');
    }
    sendDate(5000, socket);
    return callback('Default interval time');
  });
});

const getApiAndEmit = socket => {
  socket.emit("Ticker", getQuotes());
};


server.listen(PORT, () => {
  console.log(`Streaming service is running on http://localhost:${PORT}`);
});
