import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(1, 1, 1, 0.3);
`;

export const Content = styled.div`
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 12px;
  max-width: 90vw;
  width: 100%;
  background-color: transparent;
  border-radius: 8px;
  box-shadow: ${p => p.theme.shadows.minimum};
  overflow: hidden;
`;

export const ContentBox = styled.div`
  height: 90vh;
  overflow-y: auto;
`;

export const CloseBtn = styled.button`
  ${({
    theme: {
      space,
      colors,
      fontSizes,
      fontWeights,
      lineHeights,
      letterSpacings,
      sizes,
      borders,
      radii,
      zIndices,
      shadows,
      mediaQueries,
    },
    top,
    right,
  }) => `
  position: absolute;
  z-index: 2;
  top: ${top}px;
  right: ${right}px;
  width: 28px;
  height: 28px;
  color: ${colors.defaultWeak};
  background-color: rgba(0, 0, 0, 0.5);
  border: ${borders.heroBtnSmall};
  border-radius: 50%;
  box-shadow: ${shadows.elevated};
  cursor: pointer;
  transition: color 300ms ease, border 300ms ease;

  &:hover,
  &:focus {
    color: ${colors.accent};
    border: ${borders.heroBtnSmallHover};
  }
  `}
`;
