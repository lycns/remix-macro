import { rexConstructor } from '../../index.macro'

const [props = {}, component] = rexConstructor()

export default component

function __REX_COMPONENT__() {
    const { a }  = props
}