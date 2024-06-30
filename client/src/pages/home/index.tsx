import { CategoriesButtons } from "../../components/categories";
import { SearchBar } from "../../components/search";

export const Home = () => {
  return (
    <main style={{ padding: "1rem", minHeight: "80vh" }}>
      <SearchBar></SearchBar>
      <CategoriesButtons></CategoriesButtons>
      {/* Insira o corpo da página home aqui */}
    </main>
  );
};
