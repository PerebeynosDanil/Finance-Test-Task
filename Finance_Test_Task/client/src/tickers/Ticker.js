import React, { useState } from "react";
import { TickerView, InfoItem, TickerHeader, TickerFooter, PausePlay, InfoPrice, Removed } from './TickersStyled';

export const Ticker = ({ ticker, updateRemovedTickers, removedTickers }) => {
    const [enableTicker, setEnableTicker] = useState(true);
    const [savedTicker, setSavedTicker] = useState();
    const tickerData = enableTicker ? ticker : savedTicker;

    const handlePause = () => {
        setEnableTicker(!enableTicker);
        setSavedTicker(ticker);
    }

    const handleRemovedTicker = () => {
        if (removedTickers.indexOf(tickerName) === -1) {
            updateRemovedTickers([...removedTickers, tickerName]);
        }
    }


    const { tickerName,
        exchange,
        price,
        change,
        change_percent,
        dividend, yieldValue,
        last_trade_time } = tickerData;

    if (removedTickers.indexOf(tickerName) !== -1) return false;

    return (
        <TickerView enableTicker={enableTicker}>
            <TickerHeader>
                <InfoItem>
                        <PausePlay onClick={handlePause}>
                            {enableTicker ? "Pause" : "Play"}
                        </PausePlay>
                    <hr />
                    {tickerName}
                </InfoItem>
                <InfoPrice>Price: {price}$ </InfoPrice>
                <InfoItem>
                    <Removed onClick={handleRemovedTicker}>
                        Remove
                    </Removed>
                    <hr />
                    {exchange}
                </InfoItem>
            </TickerHeader>

            <TickerFooter>
                <InfoItem>Dividend: <hr />{dividend}</InfoItem>
                <InfoItem>Yield: <hr />{yieldValue}</InfoItem>
                <InfoItem>Change: <hr />{change}</InfoItem>
                <InfoItem>Change percent: <hr />{change_percent}%</InfoItem>
                <InfoItem>Last Trade: <hr /> {last_trade_time}</InfoItem>
            </TickerFooter>
        </TickerView>
    );
}