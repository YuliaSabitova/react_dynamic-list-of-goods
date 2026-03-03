import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { get5First, getAll, getRedGoods } from './api/goods';
import { Good } from './types/Good';


// import { getAll, get5First, getRed } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const fetchAllGoods = async () => {

    const data = await getAll();
    return setGoods(data);
  }

const fetchFirstFiveSorted = async () => {

  const data = await get5First();
    return setGoods(data);
};

const fetchRedgoods = async () => {

    const data = await getRedGoods();
    return setGoods(data);
};

   return (
  <div className="App">
    <h1>Dynamic list of Goods</h1>

    <button
    type="button"
    data-cy="all-button"
    onClick={fetchAllGoods}
    >
      Load all goods
    </button>

    <button
    type="button"
    data-cy="first-five-button"
    onClick={fetchFirstFiveSorted}>
      Load 5 first goods
    </button>

    <button
    type="button"
    data-cy="red-button"
    onClick={fetchRedgoods}>
      Load red goods
    </button>

    <GoodsList goods={goods} />
  </div>
);
}

