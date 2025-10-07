import { CustomHeader } from './shared/components/CustomHeader';
import { SearchBar } from './shared/components/SearchBar';
import { PreviousSearches } from './gifs/components/PreviousSearches';
import { GifList } from './gifs/components/GifList';
import { useGifs } from './gifs/hooks/useGifs';
export const GifsApp = () => {

  const {previousTerms,gifSearch,handleTerm,handleSearch} = useGifs();

  return (
    <>
        <CustomHeader title='Buscador de Gifs' description='Descubre y comparte el gif perfecto'/>
        <SearchBar placeholder='Busca lo que quieras' onQuery={handleSearch}/>
        <PreviousSearches searches={previousTerms} onLabelClick={handleTerm}/>
        <GifList gifs={gifSearch}/>
    </>
  )
}
