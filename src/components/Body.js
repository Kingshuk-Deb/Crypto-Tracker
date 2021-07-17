import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import '../App.css';
import Coins from './Coins';
import { GiRingedPlanet } from "react-icons/gi";

function Body() {
    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState('');
    const focus = useRef(null);

    useEffect(() => {
        focus.current.focus();
    });

    useEffect(() => {
        axios
        .get(
            'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false'
        )
        .then(res => {
            setCoins(res.data);
        })
        .catch(error => console.log(error));
    }, []);

    const handleChange = e => {
        setSearch(e.target.value);
    };

    const filteredCoins = coins.filter(coin =>
        coin.name.toLowerCase().includes(search.toLowerCase())
    );
    return (
        <div className='App'>
            <div className='coin_search'>
                <h1 className='coin_text'>
                    <GiRingedPlanet />
                </h1>
                <form>
                <input className='coin_input' type='text' onChange={handleChange} placeholder='Search a Cryptocurrency' ref={focus} />
                </form>
            </div>
            {filteredCoins.map(coin => {
                return (
                    <Coins key={coin.id} idc={coin.id} name={coin.name} price={coin.current_price} symbol={coin.symbol} marketcap={coin.total_volume} volume={coin.market_cap} image={coin.image} priceChange={coin.price_change_percentage_24h} />
                );
            })}
        </div>
    )
}

export default Body
