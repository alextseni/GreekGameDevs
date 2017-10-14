import React from 'react';
import SVGInline from 'react-svg-inline';

export const InlineBackgroundImageSvg = (svg) => {
  const encodedSvg = encodeURIComponent(svg.trim());
  const backgroundSvg = `url('data:image/svg+xml;utf8, ${encodedSvg}')`;

  return backgroundSvg;
};

export const InlineSvg = (svg) => (props) => (
  <SVGInline svg={svg} {...props}/>
);
