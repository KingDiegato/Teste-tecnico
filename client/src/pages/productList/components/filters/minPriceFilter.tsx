import { useState } from "react";
import { useAppDispatch } from "../../../../hooks/redux";
import { sortByPrice } from "../../../../redux/sort/sortSlice";

export const MinPriceFilter = () => {
  const [minPrice, setMinPrice] = useState(0);
  const dispatch = useAppDispatch();

  const handleMinPriceFilter = (e: string) => {
    const price = Number(e);
    setMinPrice(price);
    dispatch(
      sortByPrice({
        minPrice: price,
      })
    );
  };
  return (
    <div>
      <input
        type="number"
        name="minPrice"
        value={minPrice}
        onChange={(e) => handleMinPriceFilter(e.target.value)}
      />
      <label htmlFor="rangeInput">
        <input
          id="rangeInput"
          type="range"
          min="0"
          max="250"
          value={minPrice}
          onChange={(e) => handleMinPriceFilter(e.target.value)}
        />
      </label>
    </div>
  );
};
