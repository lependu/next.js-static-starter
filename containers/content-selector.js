import { mapProps } from 'recompose'
import MdContent from 'components/md-content'

export const enchance = mapProps(
  ({ id }) => {
    let source = require(`../contents/${id}.md`)
    return { source }
  }
)

export default enchance(MdContent)
