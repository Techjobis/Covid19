import React from 'react'
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native'

// importing components
import Svg from '../svgs/index';

// importing constants
import Layout from '../../Layout'
const scale = Layout.fontScale

export interface DrawerItemProps {
  label: string;
  onPress: () => {};
  icon: string;
  style?: any;
}

const DrawerItem = ({ label, onPress, icon, style }: DrawerItemProps) => {
  return (
    <TouchableOpacity style={styles.drawerItemContainer} onPress={onPress}>
      <View style={styles.innerDrawerItemContainer}>
        <Svg name={icon} size={18 * scale} color="black" style={styles.drawerIconStyle} />
        <Text style={styles.drawerTextStyle}>{label}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  drawerItemContainer: {
    alignSelf: 'stretch',
    padding: 8
  },
  innerDrawerItemContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  drawerIconStyle: {
    paddingHorizontal: 4
  },
  drawerTextStyle: {
    paddingLeft: 4,
    fontSize: 18 * scale,
    fontWeight: 'bold'
  }
})

export default DrawerItem
