import {Audio} from '@remotion/media';
import {Img, interpolate, staticFile, useCurrentFrame, useVideoConfig} from 'remotion';
import {BasicCaptions} from '../basic-captions';
import {CaptionLayer, Chapter, SceneFrame, palette, serif} from '../scene-kit';

export const ProblemScene = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const enter = interpolate(frame, [8, 34], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  return (
    <SceneFrame style={{background: palette.ink, color: palette.paper}}>
      <Audio name="Problem narration" from={15} src={staticFile('audio/01-problem.wav')} premountFor={fps} />
      <Img src={staticFile('images/hero.png')} style={{position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: .26}} />
      <div style={{position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(32,32,29,.99) 0%, rgba(32,32,29,.93) 56%, rgba(32,32,29,.35) 100%)'}} />
      <div style={{position: 'absolute', left: 112, top: 104, width: 1500, opacity: enter, translate: `${interpolate(enter, [0, 1], ['0px 32px', '0px 0px'])}`}}>
        <Chapter>1 · Problem statement</Chapter>
        <div style={{fontFamily: serif, fontSize: 112, lineHeight: .96, letterSpacing: -6, marginTop: 54, maxWidth: 1480}}>Same conversation.<br /><span style={{color: '#ef9c88', fontStyle: 'italic'}}>Two honest memories.</span></div>
        <div style={{fontSize: 35, color: '#ddd4c8', lineHeight: 1.45, width: 880, marginTop: 40}}>The gap stays invisible until the money, date or condition is already disputed.</div>
      </div>
      <div style={{position: 'absolute', right: 112, top: 542, display: 'flex', gap: 18}}>
        {['$800', 'Friday', 'After the bill'].map((item, index) => <div key={item} style={{padding: '21px 26px', border: `2px solid ${index === 0 ? '#ef9c88' : '#8d8780'}`, background: 'rgba(32,32,29,.88)', fontSize: 27, fontWeight: 850}}>{item}</div>)}
      </div>
      <CaptionLayer><BasicCaptions name="Problem captions" width={1570} captions={[
        {text: 'Everyday arguments often start with a small problem.', startMs: 400, endMs: 3600, timestampMs: 2000, confidence: null, pageBreakAfter: true},
        {text: 'Two people leave the same conversation with two honest, different memories.', startMs: 3600, endMs: 8200, timestampMs: 5900, confidence: null, pageBreakAfter: true},
        {text: 'A normal summary can hide that split until the deadline or payment is disputed.', startMs: 8200, endMs: 12800, timestampMs: 10500, confidence: null},
      ]} /></CaptionLayer>
    </SceneFrame>
  );
};
