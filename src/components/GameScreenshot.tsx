import React from "react";
import useScreenShot from "../hooks/useScreenShot";
import { Image, SimpleGrid } from "@chakra-ui/react";
interface Prop {
  gameId: number;
}

const GameScreenshot = ({ gameId }: Prop) => {
  const { data, isLoading, error } = useScreenShot(gameId);
  if (isLoading) return null;

  if (error) throw error;
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
      {data?.results.map((file) => (
        <Image key={file.id} src={file.image} />
      ))}
    </SimpleGrid>
  );
};

export default GameScreenshot;
