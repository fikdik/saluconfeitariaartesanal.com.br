const reqFields = require.context("./fields", true, /\.json$/)
const paths = reqFields.keys()

const fields = paths.map(path => reqFields(path))

console.log(fields)

export default {
  label: "Colors",
  name: "colors",
  folder: "content/colors",
  create: true,
  fields: fields,
}
