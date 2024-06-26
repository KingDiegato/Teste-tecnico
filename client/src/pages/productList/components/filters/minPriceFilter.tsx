import { useAppDispatch } from "../../../../hooks/redux";
import { sortByPrice } from "../../../../redux/sort/sortSlice";

export const MinPriceFilter = () => {
  const dispatch = useAppDispatch();

  const handleMinPriceFilter = (e: string) => {
    const price = Number(e);
    dispatch(
      sortByPrice({
        minPrice: price,
      })
    );
  };
  return (
    <>
      <input
        type="number"
        onChange={(e) => handleMinPriceFilter(e.target.value)}
      />
    </>
  );
};
