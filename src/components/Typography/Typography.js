import styled from 'styled-components';
import PropTypes from 'prop-types';

// should be based on global theme
const variants = {
  body1: '1rem',
  caption: '.9rem',
  headline: '1.5rem',
}

// should be based on global theme
const weights = {
  body1: 'normal',
  headline: 'bold',
  caption: 'normal',
}

const DEFAULT_COLOR = '#212121';

const Typography = styled.p.attrs(props => ({
  variant: variants[props.variant]
}))`
  font-size: ${({ variant }) => variant};
  line-height: 1.6;
  color: ${({ color = DEFAULT_COLOR }) => color };
  text-align: ${({ align }) => align || 'left'};
  font-weight: ${({ fontWeight, variant }) => !!fontWeight ? fontWeight : weights[variant] };
`;

Typography.defaultProps = {
  variant: variants.body1,
  fontWeight: ''
}

Typography.propTypes = {
  variant: PropTypes.oneOf(Object.keys(variants)),
  fontWeight: PropTypes.string,
  align: PropTypes.oneOf(['left', 'right', 'center']),
};

export default Typography;