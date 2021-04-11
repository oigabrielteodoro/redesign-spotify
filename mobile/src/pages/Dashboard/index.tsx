import React from 'react';

import Header from './sections/Header';
import Recent from './sections/Recent';

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
];

const Dashboard = () => {
  return (
    <Wrapper>
      <Container
        data={items}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item: { component: Component } }) => <Component />}
      />
    </Wrapper>
  );
};

export default Dashboard;
