import React, { useEffect, useState } from "react";
import apiClient from "../service/api-client";
import { CanceledError } from "axios";
import useData from "./useData";
import { Genres } from "./useGenres";
export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: {platform:Platform}[];
  metacritic:number
}



export const useGame = (selectedGenre:Genres|null) => useData<Game>('/games',{params:{genres:selectedGenre?.id}},[selectedGenre?.id])