import React, { useEffect, useState } from 'react';

import { useTheme } from 'styled-components';

import useIcons from '~/hooks/useIcons';

import {
  Wrapper,
  Container,
  ProgressBar,
  CurrentProgress,
  MusicPreviewContainer,
  MusicPreviewImage,
  MusicPreviewInformationContainer,
  MusicPreviewTitleContainer,
  MusicPreviewTitle,
  MusicPreviewArtistsText,
  MusicPreviewDescriptionContainer,
  MusicPreviewDescriptionIcon,
  MusicPreviewDescription,
  MusicControllerButton,
} from './styles';

const MusicPlayer = () => {
  const { getIcon } = useIcons();

  const theme = useTheme();

  const [percentage, setPercentage] = useState(0);

  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercentage(prevState => (prevState >= 100 ? 0 : prevState + 1));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  function handleChangePausedState() {
    setIsPaused(prevState => !prevState);
  }

  return (
    <Wrapper>
      <Container>
        <ProgressBar>
          <CurrentProgress percentage={percentage} />
        </ProgressBar>

        <MusicPreviewContainer>
          <MusicPreviewImage source={require('../../../assets/img/albums/Wally.png')} />

          <MusicPreviewInformationContainer>
            <MusicPreviewTitleContainer>
              <MusicPreviewTitle>Fake Homies •</MusicPreviewTitle>
              <MusicPreviewArtistsText>Krawk, Blackbone</MusicPreviewArtistsText>
            </MusicPreviewTitleContainer>

            <MusicPreviewDescriptionContainer>
              <MusicPreviewDescriptionIcon>
                {getIcon('music', 13, theme.colors.green, 'feather')}
              </MusicPreviewDescriptionIcon>
              <MusicPreviewDescription>MACBOOK AIR DE GABRIEL</MusicPreviewDescription>
            </MusicPreviewDescriptionContainer>
          </MusicPreviewInformationContainer>

          <MusicControllerButton onPress={handleChangePausedState}>
            {isPaused
              ? getIcon('play', 25, '#fff', 'ionicons')
              : getIcon('pause', 25, '#fff', 'materialCommunityIcons')}
          </MusicControllerButton>
        </MusicPreviewContainer>
      </Container>
    </Wrapper>
  );
};

export default MusicPlayer;
