import { Platform, StyleSheet } from 'react-native'

Platform.select({
    ios: {borderRadius: layoutParamters},
    android: {borderRadius: 0}
})

const brandColors = {
    main: 'lightblue',
    warning: 'orange',
    error: 'red',
    valid: 'lightgreen',
    disabled: 'lightgray'
}

const layoutParamters = {
    borderRadius: 5
}

const typography = {
    baseFontSize: 18,
    headingFontSize: 24,
    fontFace: 'sans-serif',
    baseColor: '#333'
}

const buttonStyle = StyleSheet.create({
  button: {
    margin: 10,
    backgroundColor: brandColors.main,
    padding: 10,
    borderRadius: layoutParamters.borderRadius,
  },
  warning: {
      backgroundColor: brandColors.warning
  },
  error: {
    backgroundColor: brandColors.error
    },
valid: {
    backgroundColor: brandColors.valid
},
disabled: {
    backgroundColor: brandColors.disabled
},
})

export { buttonStyle }

const containerStyle = StyleSheet.create({
    card: {
        margin: 10,
        borderRadius: layoutParamters.borderRadius
    }
})

export { containerStyle }

const textStyle = StyleSheet.create({
    main: {
        color: typography.baseColor,
        fontSize: typography.baseFontSize
    },
    body: {
        
    },
    heading: {
        textTransform: 'uppercase',
        fontSize: typography.headingFontSize
    },
    subheading: {

    },
    warning: {
        color: brandColors.warning
    },
    error: {
      color: brandColors.error
      },
  valid: {
      color: brandColors.valid
  },
  disabled: {
      color: brandColors.disabled
  },
})

export { textStyle }