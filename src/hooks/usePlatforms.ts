import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import APIClient from "../service/api-client";
import { Platform } from "../entity/Platform";

const apiClient = new APIClient<Platform>("/platforms/lists/parents");
const usePlatforms = () =>
  useQuery({
    queryKey: ["platform"],
    queryFn: apiClient.getAll,
    staleTime: ms('24h'),
  });

export default usePlatforms;
