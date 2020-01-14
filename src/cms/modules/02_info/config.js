const reqFields = require.context("./fields", true, /\.json$/)
const paths = reqFields.keys()

const fields = paths.map(path => reqFields(path))

export default {
  label: "Info",
  name: "info",
  files: fields,
}
