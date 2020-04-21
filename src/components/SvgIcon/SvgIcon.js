import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { numToPx } from '../../styles/utils/converters';

const SvgIcon = React.forwardRef(function Icon(props, ref) {
    const { children, component: Component = 'svg', fill, title, viewBox, xmlns, ...other } = props;

    let child = children;
    let box = viewBox;
    let Xmlns = xmlns;

    if (children && children.type === 'svg') {
        const childProps = children.props;

        child = childProps.children;
        box = childProps.viewBox || box;
        Xmlns = childProps.xmlns || Xmlns;
    }

    return (
        <Component
            focusable="false"
            viewBox={box}
            fill={fill}
            aria-hidden={title ? undefined : 'true'}
            role={title ? 'img' : 'presentation'}
            ref={ref}
            xmlns={Xmlns}
            {...other}
        >
            {child}
            {title ? <title>{title}</title> : null}
        </Component>
    );
});

SvgIcon.propTypes = {
    /**
     * Node passed into the SVG element.
     */
    children: PropTypes.node,
    /**
     * The component used for the root node.
     * Either a string to use a DOM element or a component.
     */
    component: PropTypes.elementType,
    /**
     * Applies a fill to the SVG element.
     */
    fill: PropTypes.string,
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    /**
     * Provides a human-readable title for the element that contains it.
     * https://www.w3.org/TR/SVG-access/#Equivalent
     */
    title: PropTypes.string,
    /**
     * Allows you to redefine what the coordinates without units mean inside an SVG element.
     * For example, if the SVG element is 500 (width) by 200 (height),
     * and you pass viewBox="0 0 50 20",
     * this means that the coordinates inside the SVG will go from the top left corner (0,0)
     * to bottom right (50,20) and each unit will be worth 10px.
     */
    viewBox: PropTypes.string,
    xmlns: PropTypes.string,
};

SvgIcon.defaultProps = {
    children: null,
    component: 'svg',
    fill: 'inherit',
    size: null,
    title: '',
    viewBox: '0 0 24 24',
    xmlns: 'http://www.w3.org/2000/svg',
};

SvgIcon.ckName = 'SvgIcon';

const StyledIcon = styled(SvgIcon)`
    ${({ size }) => {
        const dimensions = numToPx(size);
        return `
            height: ${dimensions || '5px'};
            min-height: ${dimensions || '5px'};
            min-width: ${dimensions || '5px'};
            width: ${dimensions || 'auto'};
        `;
    }}
`;

export default StyledIcon;
