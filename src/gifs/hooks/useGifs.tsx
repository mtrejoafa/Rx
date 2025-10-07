import { useRef, useState } from "react";
import { Gif } from '../interfaces/gif.interface';
import { getGifsByQuery } from "../actions/get-Gifs-By-Query.action";

/* const gifsCache:Record<string, Gif[]> = {} */

export const useGifs = () => {
    const [previousTerms, setPreviousTerms] = useState<string[]>([]);
    const [gifSearch, setGifSearch] = useState<Gif[]>([]);

    const gifsCache = useRef<Record<string, Gif[]>>({})

    const handleTerm = async (term:string) => {
      if(gifsCache.current[term]) {
        setGifSearch(gifsCache.current[term]);
        return;
      }
    }

    const handleSearch = async (query: string) => {
        const queryFixed:string = query.toLowerCase().trim();
        if (queryFixed.length === 0) return;
        if (previousTerms.includes(queryFixed)) return;
        setPreviousTerms([queryFixed, ...previousTerms].slice(0, 8));
        const gifs = await getGifsByQuery(query);
        console.log(gifs);
        setGifSearch(gifs);
        gifsCache.current[query] = gifs;
        console.log(gifsCache);
    }

  return {
    previousTerms,
    gifSearch,
    handleTerm,
    handleSearch
  }
}
