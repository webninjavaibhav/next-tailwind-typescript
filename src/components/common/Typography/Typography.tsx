import React from 'react';
import {
  ColorTypes,
  TagTypes,
  FontWeightTypes,
  LineHeightTypes,
} from '../../Types/types';

interface TypographyProps {
  children?: React.ReactNode;
  tag?: TagTypes;
  fontWeight?: FontWeightTypes;
  className?: string;
  lineHeight?: LineHeightTypes;
  color?: ColorTypes;
}

const Typography = ({
  tag = 'h1',
  className = '',
  fontWeight = 'normal',
  lineHeight = 'snug',
  color = 'black',
  children,
  ...props
}: TypographyProps) => {
  return (
    <>
      {React.createElement(
        tag,
        {
          ...props,
          className: `${fontWeight} ${className} ${lineHeight} ${color} ${tag}`,
        },
        children
      )}
    </>
  );
};

export default Typography;
