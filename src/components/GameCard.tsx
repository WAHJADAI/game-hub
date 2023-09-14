import React from "react";
import { Game } from "../hooks/useGame";
import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import PlatformIcon from "./PlatformIcon";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <>
      <Card borderRadius={10} overflow="hidden">
        <Image src={game.background_image} />
        <CardBody>
          <Heading fontSize="2xl">{game.name}</Heading>
          <PlatformIcon platform={game.parent_platforms.map(p=>p.platform)}/>
        </CardBody>
      </Card>
    </>
  );
};

export default GameCard;
