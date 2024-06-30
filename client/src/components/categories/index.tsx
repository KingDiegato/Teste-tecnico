import { Link } from "react-router-dom";
import { useFetchCategories } from "../../hooks/useFetchCategories";
import * as CategoriesButtonsStyles from "./styles";

export const CategoriesButtons = () => {
  const { categories } = useFetchCategories();
  return (
    <div>
      <h2>Categorias</h2>
      <CategoriesButtonsStyles.CategoriesContainer
        style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}
      >
        {categories?.map((category) => (
          <li key={category.name}>
            <CategoriesButtonsStyles.CategoriesButtons>
              <button>
                <Link to={`/category/${category.slug}`}>{category.name}</Link>
              </button>
            </CategoriesButtonsStyles.CategoriesButtons>
          </li>
        ))}
      </CategoriesButtonsStyles.CategoriesContainer>
    </div>
  );
};
