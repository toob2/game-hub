import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import getCroppedImageUrl from "../services/image-url";

import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";

import CriticScoreV2 from "./CriticScoreV2";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <HStack justifyContent="space-between">
          <PlatformIconList
            platforms={game.parent_platforms.map(
              (platform) => platform.platform
            )}
          />
          <CriticScoreV2 metacritic={game.metacritic} />
          {/* <CriticScore metacritic={game.metacritic} /> */}
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
