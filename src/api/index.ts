import axios from "axios";
import type { Movie } from "../types";

const BASE_URL = "http://localhost:3001";

export const getMovies = async (): Promise<Movie[]> => {
  return (await axios.get<Movie[]>(`${BASE_URL}/movies`)).data;
};
