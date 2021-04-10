import React from 'react';

import Ionicons from 'react-native-vector-icons/Ionicons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

interface VectorIcon {
  [name: string]: any;
}

const vectorIcons: VectorIcon = {
  feather: FeatherIcon,
  antDesign: AntDesignIcon,
};

export default function useIcons() {
  function loadIcons() {
    Ionicons.loadFont();
    FeatherIcon.loadFont();
    AntDesignIcon.loadFont();
    MaterialIcons.loadFont();
  }

  function getIcon(name: string, size: number, color: string, lib: string) {
    const Icon = vectorIcons[lib];

    if (Icon) {
      return <Icon name={name} size={size} color={color} />;
    }

    return <FeatherIcon name="alert-circle" size={size} color={color} />;
  }

  return {
    getIcon,
    loadIcons,
    vectorIcons,
  };
}
