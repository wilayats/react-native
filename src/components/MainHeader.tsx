import {View, Text} from 'react-native';
import React from 'react';
import {config} from "../utils/constants.ts";

export default function MainHeader() {
  return (
    <View>
      <Text>Main Header {config.ENV}</Text>
      <Text>{JSON.stringify(config)}</Text>
    </View>
  );
}
