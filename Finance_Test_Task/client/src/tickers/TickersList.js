import React, { useState } from "react";
import { Ticker } from './Ticker';
import { ListTitle, LabelText, SendInput, Add } from './TickersStyled';


export const TickersList = ({ tickers, setintervalTime }) => {
    const [inputValue, setInputValue] = useState(500);
    const [removedTickers, updateRemovedTickers] = useState([]);


    const handleChange = (event) => {
        setInputValue(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setintervalTime(inputValue * 1000);
    }

    const restoreTicker = (tickerName) => {
        const filterMassive = removedTickers.filter(name => name !== tickerName);
        updateRemovedTickers(filterMassive);
    }


    return (
        <div>
            <ListTitle>The most popular tickers in the world:</ListTitle>
            <form onSubmit={handleSubmit}>
                <label>
                    <LabelText>
                    Update interval (sec): 
                        <input min={1} type='number' name='setInterva' onChange={handleChange} />
                        <SendInput type='submit' value = 'Send' />
                    </LabelText>
                </label>
            </form>
            {
                removedTickers.map((tickerName, index) => {
                    return (<Add key={index} onClick={() => restoreTicker(tickerName)}>{tickerName}</Add>)
                })
            }
            {
                tickers.map((ticker, index) => {
                    return (
                        <Ticker key={index} ticker={ticker} updateRemovedTickers={updateRemovedTickers} removedTickers={removedTickers} />
                    )
                })
            }


        </div >
    )
}