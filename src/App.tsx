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
    try {
      const data = await getAll();

      setGoods(data);
    } catch (error) {
      throw error;
    }
  };

  const fetchFirstFiveSorted = async () => {
    try {
      const data = await get5First();

      setGoods(data);
    } catch (error) {
      throw error;
    }
  };

  const fetchRedgoods = async () => {
    try {
      const data = await getRedGoods();

      setGoods(data);
    } catch (error) {
      throw error;
    }
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={fetchAllGoods}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={fetchFirstFiveSorted}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={fetchRedgoods}>
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
