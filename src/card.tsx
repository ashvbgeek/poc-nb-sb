import { Box, AspectRatio, Stack, Image, Text } from 'native-base';
import React from 'react';

export interface CardProps {
  imgUrl?: string;
  category?: string;
  date?: string;
  heading?: string;
  desc?: string;
}

const Card = ({ imgUrl, category, date, heading, desc }: CardProps) => {
  return (
    <>
      <Box
        shadow="2"
        rounded="lg"
        w={{ base: '64', md: '80', lg: 'md' }}
        _light={{ bg: 'coolGray.50' }}
        _dark={{ bg: 'gray.700' }}
        overflow="hidden"
      >
        {imgUrl && (
          <AspectRatio w="100%" ratio={1.7}>
            <Image
              source={{
                uri: imgUrl,
              }}
              alt="image base"
            />
          </AspectRatio>
        )}

        {category && (
          <Text
            bold
            position="absolute"
            color="coolGray.50"
            top="0"
            m="4"
            textTransform="uppercase"
          >
            {category}
          </Text>
        )}

        <Stack space="2" p="4">
          {date && <Text color="gray.400">{date}</Text>}

          {heading && <Text fontSize="xl">{heading}</Text>}

          {desc && <Text> {desc} </Text>}
        </Stack>
      </Box>
    </>
  );
};

export default Card;
