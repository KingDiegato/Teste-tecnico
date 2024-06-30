import { Toaster } from "sonner";
import { SearchBar } from "../../components/search";

export const Search = () => {
  return (
    <div>
      Search
      <SearchBar></SearchBar>
      <Toaster
        richColors
        position="top-center"
        toastOptions={{ style: { padding: "1rem", borderRadius: "0.5rem" } }}
      />
    </div>
  );
};
