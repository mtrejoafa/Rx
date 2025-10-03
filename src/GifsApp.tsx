import { CustomHeader } from './shared/components/CustomHeader';
import { mockGifs } from './mock-data/gifs.mock';
import { SearchBar } from './shared/components/SearchBar';
import { PreviousSearches } from './gifs/components/PreviousSearches';
import { GifList } from './gifs/components/GifList';
import { useState } from 'react';
export const GifsApp = () => {

    const [previousTerms, setPreviousTerms] = useState(['Dragon Ball z']);

    const handleTerm = (term:string) => {
        console.log({term});
    }

    const handleSearch = (query:string) => {
        if (query.trim().length > 0 && !previousTerms.includes(query) && previousTerms.length < 8) {
            const queryFixed = query.toLowerCase().trim();
            console.log(queryFixed);
            setPreviousTerms([...previousTerms, queryFixed]);
        }
    }

  return (
    <>
        <CustomHeader title='Buscador de Gifs' description='Descubre y comparte el gif perfecto'/>
        <SearchBar placeholder='Busca lo que quieras' onQuery={handleSearch}/>
        <PreviousSearches searches={previousTerms} onLabelClick={handleTerm}/>
        <GifList gifs={mockGifs}/>
    </>
  )
}
