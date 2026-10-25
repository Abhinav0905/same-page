import {Audio} from '@remotion/media';
import {Img, staticFile, useVideoConfig} from 'remotion';
import {BasicCaptions} from '../basic-captions';
import {CaptionLayer, Chapter, SceneFrame, palette, serif} from '../scene-kit';

export const ClosingScene = () => {
  const {fps} = useVideoConfig();
  return (
    <SceneFrame style={{background: palette.ink, color: palette.paper}}>
      <Audio name="Closing narration" from={15} src={staticFile('audio/05-close.wav')} premountFor={fps} />
      <Img src={staticFile('images/hero.png')} style={{position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: .2}} />
      <div style={{position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(32,32,29,.99), rgba(32,32,29,.78))'}} />
      <div style={{position: 'absolute', left: 112, top: 112, width: 1540}}><Chapter>Same Page · proof of concept</Chapter><div style={{fontFamily: serif, fontSize: 112, lineHeight: .98, letterSpacing: -6, marginTop: 48}}>Two memories in.<br /><span style={{color: '#ef9c88', fontStyle: 'italic'}}>One clear plan out.</span></div><div style={{display: 'flex', gap: 14, marginTop: 65}}>{['COMPARE', 'CHECK', 'CONFIRM'].map((label, index) => <div key={label} style={{padding: '21px 27px', border: `2px solid ${index === 2 ? '#ef9c88' : '#77736d'}`, color: index === 2 ? '#ef9c88' : palette.paper, fontSize: 24, fontWeight: 900, letterSpacing: 2}}>{index === 2 ? '✓ ' : ''}{label}</div>)}</div></div>
      <CaptionLayer><BasicCaptions name="Closing captions" width={1570} captions={[
        {text: 'Same Page catches the gap before it becomes the argument.', startMs: 400, endMs: 3900, timestampMs: 2150, confidence: null, pageBreakAfter: true},
        {text: 'Two memories in. One clear plan out.', startMs: 3900, endMs: 6900, timestampMs: 5400, confidence: null},
      ]} /></CaptionLayer>
    </SceneFrame>
  );
};
