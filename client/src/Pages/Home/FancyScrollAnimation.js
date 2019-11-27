import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

function FancyScroll({
  classNames = 'inView',
  children,
  target,
  isAllChildren = false,
  childrenClassNames,
  ...props
}) {
  if (isAllChildren) {
    return (
      <ScrollAnimation animateIn={classNames} animateOnce={true} {...props}>
        {children.map(child => {
          return React.cloneElement(child, {
            ...child.props,
            ...{ className: childrenClassNames }
          });
        })}
      </ScrollAnimation>
    );
  } else {
    return (
      <ScrollAnimation animateIn={classNames} animateOnce={true} {...props}>
        {children}
      </ScrollAnimation>
    );
  }
}

export default FancyScroll;
