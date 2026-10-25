import type {CSSProperties, ReactNode} from 'react';
import {AbsoluteFill} from 'remotion';

export const palette = {ink: '#20201d', paper: '#fffaf1', cream: '#f7f0e6', coral: '#dd705c', coralDeep: '#b84c3b', green: '#27705e', line: '#d8cbb9', muted: '#756d63'};
export const sans = 'Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';
export const serif = 'Georgia, "Times New Roman", serif';
export const mono = 'ui-monospace, SFMono-Regular, Menlo, monospace';

export const SceneFrame = ({children, style}: {children: ReactNode; style?: CSSProperties}) => (
  <AbsoluteFill style={{background: palette.cream, color: palette.ink, fontFamily: sans, overflow: 'hidden', ...style}}>{children}</AbsoluteFill>
);

export const Chapter = ({children}: {children: ReactNode}) => (
  <div style={{fontFamily: mono, color: palette.coralDeep, fontSize: 25, fontWeight: 900, letterSpacing: 3.1, textTransform: 'uppercase'}}>{children}</div>
);

export const CaptionLayer = ({children}: {children: ReactNode}) => (
  <div style={{position: 'absolute', left: 175, bottom: 48, width: 1570, zIndex: 30}}>{children}</div>
);
