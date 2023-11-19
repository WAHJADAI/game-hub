import { useQuery } from "@tanstack/react-query";
import { FetchResponse } from "../service/api-client";
import APIClient from "../service/api-client";

const apiClient = new APIClient<Platform>("/platforms/lists/parents");
export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () =>
  useQuery({
    queryKey: ["platform"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000,
  });

export default usePlatforms;
