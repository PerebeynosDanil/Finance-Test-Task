import styled from 'styled-components';


export const ListTitle = styled.h1`
    text-align: center;
    color: skyblue;
`
export const InfoItem = styled.span`
    padding: 5px 5px 5px 5px;
    text-align: center;
    padding: 7px;
`

export const InfoPrice = styled(InfoItem)`

`
export const TickerFooter = styled.div`
    display:flex;
    ${InfoItem} {
        width:100%;
    }
`

export const TickerView = styled.div`
    padding: 10px;
    border: 10px solid lightblue;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    margin: 20px;
    background-color:white;
    ${InfoPrice} {
        opacity: ${props => props.enableTicker ? '1' : '0.5'};
    }
    ${TickerFooter} {
        opacity: ${props => props.enableTicker ? '1' : '0.5'};
    }
`

export const TickerHeader = styled.div`
    display:flex;
    justify-content: space-between;
`

export const LabelText = styled.span`
    font-size: large;
    display:flex;
    justify-content: center;
    color: skyblue;

`

export const PausePlay = styled.button`
&:hover {
    background-color: #4CAF50; /* Green */
    color: white;
}
    padding: 6px 25px;
    text-align: center;
    display: inline-block;
    font-size: 15px;
    margin: 4px 2px;
    transition-duration: 0.4s;
    cursor: pointer;
    background-color: white; 
    color: black; 
    border: 2px solid #4CAF50;
    min-width: 100px;
`
export const Removed = styled(PausePlay) `
&:hover {
    background-color: red;
}
    border: 2px solid red;
`

export const Add = styled(PausePlay) `
margin:10px 20px;
`

export const SendInput = styled.input `
    margin: 2px;
    font-size: 20px;
    border-radius: 5px;
    background-color: white;
    border:1px solid skyblue;
    color: black;
    transition-duration: 0.4s;
    
    cursor: pointer;
    &:hover {
        background-color: skyblue;
    }
`