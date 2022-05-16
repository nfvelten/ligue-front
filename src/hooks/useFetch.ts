import { api } from "api";
import { useQuery } from "react-query";

export function useFetch<T = unknown>(url: string) {
  const { data, isFetching } = useQuery<T | null>(
    "developers",
    async () => {
      const response = await api.get(url);

      return response.data;
    },
    {
      refetchOnWindowFocus: false,
    }
  );
  return { data, isFetching };
}
