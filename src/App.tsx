import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genres } from "./hooks/useGenres";
import PlatformIcon from "./components/PlatformIcon";
import PlatformSelector from "./components/PlatformSelector";

function App() {
  const [SelectedGenre,setSelectedGenre]=useState<Genres | null>(null)
  return (
    <Grid
      templateAreas={{
        base: `"nav "" main"`,
        lg: `"nav nav""aside main"`,
      }}
      templateColumns={{
        base:'1fr',
        lg:'200px 1fr'
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX='10px'>
          <GenreList onSelectGenre={(genre)=>setSelectedGenre(genre)} selectedGenre={SelectedGenre}/>
        </GridItem>
      </Show>

      <GridItem area="main">
        <PlatformSelector/>
        <GameGrid selectedGenre={SelectedGenre} />
      </GridItem>
    </Grid>
  );
}

export default App;
