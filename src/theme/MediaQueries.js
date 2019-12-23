import theme from "~/theme"

const [phone, phablet, tablet, laptop] = theme.breakpoints

const media = {
  phone: `@media screen and (min-width: ${phone})`,
  phablet: `@media screen and (min-width: ${phablet})`,
  tablet: `@media screen and (min-width: ${tablet})`,
  laptop: `@media screen and (min-width: ${laptop})`,
}

export default media
