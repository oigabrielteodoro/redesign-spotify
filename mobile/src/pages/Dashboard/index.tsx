import React from 'react';

import MusicPlayer from '~/components/MusicPlayer';

import Header from './sections/Header';

import Recent from './sections/Recent';
import MostPlayed from './sections/MostPlayed';
import Recommended from './sections/Recommended';
import NewCustomPlaylist from './sections/NewCustomPlaylist';

import { Wrapper, Container } from './styles';

const items = [
  {
    id: 0,
    component: Header,
  },
  {
    id: 1,
    component: Recent,
  },
  {
    id: 2,
    component: Recommended,
  },
  {
    id: 3,
    component: MostPlayed,
  },
  {
    id: 4,
    component: NewCustomPlaylist,
  },
];

const Dashboard = () => {
  return (
    <Wrapper>
      <Container
        data={items}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item: { component: Component } }) => <Component />}
      />

      <MusicPlayer />
    </Wrapper>
  );
};

export default Dashboard;
