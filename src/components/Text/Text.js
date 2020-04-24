import PropTypes from 'prop-types'
import styled from 'styled-components'

const sizes = {
	xsmall: '0.8rem',
	small: '0.9rem',
	medium: '1rem',
	large: '1.25rem',
	xlarge: '1.50rem',
	xxlarge: '2rem',
}

const Text = styled.span`
	font-size: ${props => sizes[props.size]||props.size};
`

Text.propTypes = {
	size: PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge', 'xxlarge']),
}

Text.defaultProps = {
	size: 'medium'
}

export default Text