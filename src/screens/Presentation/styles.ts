import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    rowGap: 12,
    backgroundColor: '#171710'
  },
  tapHandlerContainer: {
    backgroundColor: '#e5e5e5'
  },
  image: {
    height: 400,
    width: 400
  },
  icon: {
    fontSize: 25,
    color: '#f5f5f5'
  },
  iconActive: {
    color: '#dc2626',
  },
  containerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 8,
    paddingLeft: 16
  }
});