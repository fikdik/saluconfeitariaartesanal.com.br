import theme from "../theme"

const [lpp, spl, lpl, tablet, laptop] = theme.breakpoints

const media = {
  lpp: `min-width: ${lpp}`, // Large Phone Portrait
  spl: `min-width: ${spl}`, // Small Phone Landscape
  lpl: `min-width: ${lpl}`, // Large Phone Landscape
  tablet: `min-width: ${tablet}`,
  laptop: `min-width: ${laptop}`,
}

export default media
