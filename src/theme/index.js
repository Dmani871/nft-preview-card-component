// theme/index.js
import { extendTheme } from '@chakra-ui/react'

// Global style overrides
import styles from './styles'

// Foundational style overrides
import colors from './foundations/colors'
import fonts from './foundations/fonts'
// Component style overrides
import Card from './components/card'

const overrides = {
  styles,
  colors,
  fonts,
  // Other foundational style overrides go here
  components: {
    Card,
    // Other components go here
  },
}

export default extendTheme(overrides)