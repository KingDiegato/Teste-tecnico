import { FormEvent, useRef, useState } from "react";
import { useSearch } from "../../hooks/useSearch";
import { ProductList } from "../productList";
import * as ProductListStyle from "../productList/styles";

export const SearchBar = () => {
  const formRef = useRef<HTMLInputElement>(null);
  const [keyWord, setKeyWord] = useState("");
  const { search, error, loading } = useSearch({ query: keyWord });

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (formRef.current === null) return;
    const keyWord = formRef.current.value;
    setKeyWord(keyWord);
    console.log(keyWord);
  };

  return (
    <div>
      <form onSubmit={(e) => handleSearch(e)}>
        <input
          id="search_products_bar"
          type="text"
          placeholder="Pesquisar..."
          name="query"
          ref={formRef}
        />
        <button type="submit">Pesquisar</button>
      </form>
      {search && (
        <ProductListStyle.ProductContainer>
          <ProductListStyle.ItemsSubGrid>
            <ProductList products={search.products}></ProductList>
          </ProductListStyle.ItemsSubGrid>
        </ProductListStyle.ProductContainer>
      )}
      {loading && <p>Carregando...</p>}
      {typeof error === "string" && <p>Ups! Something went wrong</p>}
    </div>
  );
};
