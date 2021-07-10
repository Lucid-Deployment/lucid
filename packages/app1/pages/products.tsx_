import { Box } from "@chakra-ui/react";
import { ApiError, client } from "@lucid/util-data-access";
import * as React from "react";
import { useQuery } from "react-query";

type FiltersData = {
  type: "text";
  title: string;
  field: string;
}[];

type FiltersInput = {
  categoryId?: number;
};

const useFilters = ({ categoryId }: FiltersInput = {}) => {
  return useQuery<FiltersData, ApiError<any>>(
    ["filters", categoryId],
    async () => {
      // Using a temp allows me to refer to the value while explaining its meaning
      // If you have to spend effort looking at a fragment of code and figuring out what it’s doing,
      // then you should extract it into a function and name the function after the “what.”
      const url = new URL(`/filters`, "https://a");
      if (categoryId !== undefined) {
        url.searchParams.set("category_id", String(categoryId));
      }

      return client(url.pathname + url.search);
    }
  );
};

interface FiltersProps {
  categoryId?: number;
}
const Filters = ({ categoryId }: FiltersProps) => {
  // Короткие имена обычно лучше длинных, если только их смысл понятен читателю кода.
  // Не включайте в имя больше контекста, чем необходимо.
  const { data, isSuccess, isError, isLoading } = useFilters({ categoryId });

  return <Box />;
};

const Products = () => {
  return <Box />;
};

export default Products;
