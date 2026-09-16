import { chakra, HTMLChakraProps, useColorModeValue } from '@chakra-ui/react'

/** Wordmark Northvale — editorial, warm paper */
export const Logo: React.FC<HTMLChakraProps<'svg'>> = (props) => {
  const text = useColorModeValue('#1C1914', '#F4EFE6')
  return (
    <chakra.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 210 36"
      role="img"
      aria-label="Northvale"
      {...props}
    >
      <title>Northvale</title>
      <rect x="2" y="6" width="24" height="24" fill="none" stroke="#B4532A" strokeWidth="2" />
      <path
        d="M8 24V12h3.2l6.8 8.4V12H21v12h-3.2L11 15.6V24H8z"
        fill="#B4532A"
      />
      <text
        x="36"
        y="24"
        fill={text}
        fontFamily="Georgia, 'Iowan Old Style', 'Times New Roman', serif"
        fontSize="20"
        fontWeight="600"
        letterSpacing="0.01em"
      >
        Northvale
      </text>
    </chakra.svg>
  )
}
