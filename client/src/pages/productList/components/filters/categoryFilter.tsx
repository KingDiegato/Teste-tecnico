import { useAppDispatch } from "../../../../hooks/redux";
import { sortByCategory } from "../../../../redux/sort/sortSlice";

export const CategoryFilter = () => {
  const dispatch = useAppDispatch();

  const handleCategoryFilter = (category: string) => {
    dispatch(
      sortByCategory({
        category: category,
      })
    );
  };
  return (
    <>
      <select onChange={(e) => handleCategoryFilter(e.target.value)}>
        <option value="all">Todos</option>
        <option value="beauty">Beleza</option>
        <option value="furniture">Moletom</option>
        <option value="fragrances">Parfum</option>
        <option value="groceries">Alimentos</option>
      </select>
    </>
  );
};
