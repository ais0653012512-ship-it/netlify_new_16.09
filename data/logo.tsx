import { chakra, HTMLChakraProps, useColorModeValue } from '@chakra-ui/react'

/** Wordmark Harborline — trung tính, không dùng palette Saas UI */
export const Logo: React.FC<HTMLChakraProps<'svg'>> = (props) => {
  const text = useColorModeValue('#0B1F2A', '#F2F7F5')
  return (
    <chakra.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 220 36"
      role="img"
      aria-label="Harborline"
      {...props}
    >
      <title>Harborline</title>
      <circle cx="14" cy="18" r="10" fill="none" stroke="#1F7A6B" strokeWidth="2.5" />
      <path
        d="M8 18h12M14 12v12"
        fill="none"
        stroke="#1F7A6B"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <text
        x="34"
        y="24"
        fill={text}
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="20"
        fontWeight="600"
        letterSpacing="0.02em"
      >
        Harborline
      </text>
    </chakra.svg>
  )
}
