import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
import { TickersList } from "../tickers/TickersList";
import { MainPage } from './AppStyled';

const ENDPOINT = "http://localhost:4000";

function App() {
  const [response, setResponse] = useState([]);
  const [intervalTime, setintervalTime] = useState();
  const socket = socketIOClient(ENDPOINT);

  useEffect(() => {

      socket.emit('Interval', { time: intervalTime }, function (dataFromServer) {
        console.log(dataFromServer);
      });
      socket.on("Ticker", data => {
        setResponse(data);
      });

  });

  return (
    <MainPage>
      <TickersList tickers={response} setintervalTime={setintervalTime} />
    </MainPage>);
}

export default App;