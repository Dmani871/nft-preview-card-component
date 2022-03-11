import { color } from "@chakra-ui/react";

const Card = {
    // The styles all Cards have in common
    baseStyle: {
      display: 'flex',
      flexDirection: 'column',
      background: 'blue.100',
      borderRadius: 'xl',
      boxShadow: 'xl',
      width: '20vw',
      bg:'blue.200'
    },
    // Two variants: rounded and smooth
    variants: {
      rounded: {
        padding: 5,
        borderRadius: 'xl',
        boxShadow: 'xl',
      }
    },
    // The default variant value
    defaultProps: {
      variant: 'rounded',
    },
  }
  
  export default Card;