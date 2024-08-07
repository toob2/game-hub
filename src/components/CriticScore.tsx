import { Badge } from "@chakra-ui/react";

interface Prop {
  metacritic: number;
}

const CriticScore = ({ metacritic }: Prop) => {
  const colorScheme =
    metacritic > 90 ? "green" : metacritic > 85 ? "yellow" : "red";
  return (
    <Badge colorScheme={colorScheme} borderRadius={3}>
      {metacritic}
    </Badge>
  );
};

export default CriticScore;
