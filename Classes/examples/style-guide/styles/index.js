import { StyleSheet } from 'react-native'

const brandColors = {
    main: 'orange'
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
    backgroundColor: brandColors.main,
    padding: 10,
    borderRadius: layoutParamters.borderRadius,
  }
})

export { buttonStyle }

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
})

export { textStyle }