import React from 'react';
import { HStack, Text, VStack } from 'native-base';

export function Home() {
  return (
    <VStack flex={1} px={6}>
        <HStack w="full" mt={8} justifyContent="space-between" alignItems="center">
            <Text fontSize="4xl" fontWeight="bold">Hello World</Text>
        </HStack>
    </VStack>
  );
}