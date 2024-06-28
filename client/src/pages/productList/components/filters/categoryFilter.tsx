import { useAppDispatch } from "../../../../hooks/redux";
import { sortByCategory } from "../../../../redux/sort/sortSlice";
import * as FilterStyles from "./filterStyles";

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
    <FilterStyles.FilterButtons>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => handleCategoryFilter(category)}
          className={category}
        >
          {category}
        </button>
      ))}
    </FilterStyles.FilterButtons>
  );
};

const categories = ["all", "beauty", "furniture", "fragrances", "groceries"];
