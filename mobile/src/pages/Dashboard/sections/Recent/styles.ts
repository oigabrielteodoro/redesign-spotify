import { FlatList } from 'react-native';

import styled from 'styled-components/native';

import LottieView from 'lottie-react-native';

import ArtistDTO from '~/pages/Dashboard/dtos/ArtistDTO';

export const Wrapper = styled.View`
  margin-top: 16px;

  padding: 0 15px;
`;

export const Container = styled(FlatList as new () => FlatList<ArtistDTO>).attrs({
  numColumns: 2,
  showsVerticalScrollIndicator: false,
})``;

export const ArtistItem = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;

  background: ${({ theme }) => theme.colors.lightBlack};
  border-radius: 5px;

  flex: 1;
  margin: 5px;
`;

export const ArtistItemImage = styled.Image`
  width: 50px;
  height: 50px;

  border-radius: 5px;
  margin-right: 16px;
`;

export const ArtistItemText = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: 14px;
  font-family: ${({ theme }) => theme.typography.medium};
`;

export const AnimationContainer = styled.TouchableOpacity``;

export const ArtistItemAnimationContainer = styled(LottieView).attrs({
  autoPlay: true,
  loop: true,
  resizeMode: 'contain',
  colorFilters: [
    { color: '#62C46F', keypath: 'SoundBar' },
    { color: '#62C46F', keypath: 'Shape Layer 1' },
    { color: '#62C46F', keypath: 'Shape Layer 2' },
    { color: '#62C46F', keypath: 'Shape Layer 3' },
  ],
})`
  margin-left: 38px;
  margin-top: 3.5px;
`;
