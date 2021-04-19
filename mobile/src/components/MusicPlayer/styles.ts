import styled from 'styled-components/native';

interface CurrentProgressProps {
  percentage: number;
}

export const Wrapper = styled.View`
  position: absolute;

  left: 0;
  right: 0;
  bottom: 0;
`;

export const Container = styled.View`
  position: relative;
  flex: 1;
`;

export const ProgressBar = styled.View`
  height: 2px;

  background: ${({ theme }) => theme.colors.gray};
`;

export const CurrentProgress = styled.View<CurrentProgressProps>`
  width: ${({ percentage }) => percentage}%;
  height: 2px;

  background: ${({ theme }) => theme.colors.green};
`;

export const MusicPreviewContainer = styled.View`
  flex-direction: row;
  align-items: center;

  background: ${({ theme }) => theme.colors.lightBlack};

  flex: 1;
`;

export const MusicPreviewImage = styled.Image`
  height: 55px;
  width: 55px;
`;

export const MusicPreviewInformationContainer = styled.View`
  align-items: flex-start;
  margin: 12px;
`;

export const MusicPreviewTitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const MusicPreviewTitle = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.typography.medium};
`;

export const MusicPreviewArtistsText = styled.Text`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.lightGray};
  font-family: ${({ theme }) => theme.typography.regular};

  margin-left: 3px;
`;

export const MusicPreviewDescriptionContainer = styled.View`
  flex-direction: row;
  align-items: center;

  margin-top: 3px;
`;

export const MusicPreviewDescriptionIcon = styled.View`
  margin-top: 3px;
`;

export const MusicPreviewDescription = styled.Text`
  font-size: 10px;
  color: ${({ theme }) => theme.colors.green};
  font-family: ${({ theme }) => theme.typography.regular};

  letter-spacing: 1px;

  margin-top: 3px;
  margin-left: 5px;
`;

export const MusicControllerButton = styled.TouchableOpacity`
  margin-left: auto;
  margin-right: 14px;
`;
