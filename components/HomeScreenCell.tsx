import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import type { ImageSourcePropType } from 'react-native';
import { Cell } from 'react-native-tableview-simple';

interface HomeScreenCellProps {
  title: string;
  tagline: string;
  eta: string;
  imgUri: ImageSourcePropType;
  action: () => void; // Add action prop
}

export const HomeScreenCell = ({ title, tagline, eta, imgUri, action }: HomeScreenCellProps) => {
  return (
    <TouchableOpacity onPress={action} style={styles.cellContainer}>
      <View style={styles.cell}>
        <Cell
          cellContentView={
            <View style={styles.cellContent}>
              <Image source={imgUri} style={styles.image} resizeMode="cover" />
              <View style={styles.textOverlay}>
                <Text style={styles.eta}>{eta}</Text>
              </View>
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.tagline}>{tagline}</Text>
            </View>
          }
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cellContainer: {
    width: '100%',
  },
  cell: {
    height: 290,
    width: '100%',
    backgroundColor: 'transparent',
  },
  cellContent: {
    flex: 1,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  textOverlay: {
    position: 'absolute',
    top: 160,
    left: 10,
    backgroundColor: 'rgba(0,0,0,0.6)',
    borderRadius: 5,
    padding: 5,
  },
  eta: {
    color: '#fff',
    fontSize: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  tagline: {
    marginTop: 5,
    fontSize: 14,
    color: '#777',
  },
});

export default HomeScreenCell;
