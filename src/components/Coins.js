import React from 'react';
import './Coins.css'

const Coin = ({ idc, name, price, symbol, marketcap, volume, image, priceChange }) => {
  return (
    <div className='coin_container'>
      <div className='coin_row'>
        <div className='coin'>
          <img src={image} alt='crypto' />
          <a href={`https://www.coingecko.com/en/coins/${idc}`}>
            <h1>{name}</h1>
          </a>
          <p className='coin_symbol'>{symbol}</p>
        </div>
        <div className='coin_data'>
          <p className='coin_price'>${price}</p>
          <p className='coin_volume'>${volume.toLocaleString()}</p>
          {priceChange < 0 ? ( <p className='coin_percent red'>{priceChange.toFixed(2)}%</p> ) : 
          ( <p className='coin_percent green'>{priceChange.toFixed(2)}%</p> )}
          <p className='coin_marketcap'> Mkt Cap: ${marketcap.toLocaleString()} </p>
        </div>
      </div>
    </div>
  );
};

export default Coin;