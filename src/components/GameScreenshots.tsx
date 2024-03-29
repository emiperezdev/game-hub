import { Image, SimpleGrid } from "@chakra-ui/react";
import useScreenshots from "../hooks/useSreenshots";

interface Props {
  gameId: number;
}

export const GameScreenshots = ({ gameId }: Props) => {
  const { data, isLoading, error } = useScreenshots(gameId);

  if (isLoading) return null;

  if (error) throw error;

  return (
    <SimpleGrid
      spacing={2}
      columns={{
        base: 1,
        md: 2,
      }}
    >
      {data?.results.map((file) => (
        <Image key={file.id} src={file.image} />
      ))}
    </SimpleGrid>
  );
};
