import React from 'react';
import SvgIcon from '../../SvgIcon/SvgIcon';

const createSvgIcon = (path, displayName) => {
    const Component = React.memo(
        React.forwardRef((props, ref) => (
            <SvgIcon ref={ref} {...props}>
                {path}
            </SvgIcon>
        ))
    );

    if (process.env.NODE_ENV !== 'production') {
        Component.displayName = `${displayName}SvgIcon`;
    }

    Component.vowaidName = SvgIcon.vowaidName;

    return Component;
};

export default createSvgIcon;
