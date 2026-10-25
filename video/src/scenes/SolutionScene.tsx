import {Audio} from '@remotion/media';
import {Img, staticFile, useVideoConfig} from 'remotion';
import {BasicCaptions} from '../basic-captions';
import {CaptionLayer, Chapter, SceneFrame, palette, serif} from '../scene-kit';

export const SolutionScene = () => {
  const {fps} = useVideoConfig();
  return (
    <SceneFrame>
      <Audio name="Solution narration" from={15} src={staticFile('audio/02-solution.wav')} premountFor={fps} />
      <Img src={staticFile('images/versions.png')} style={{position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: .24}} />
      <div style={{position: 'absolute', inset: 0, background: 'rgba(255,250,241,.73)'}} />
      <div style={{position: 'absolute', left: 110, top: 92, width: 1700}}>
        <Chapter>2 · How we solve it</Chapter>
        <div style={{fontFamily: serif, fontSize: 96, lineHeight: .98, letterSpacing: -5.2, marginTop: 38, maxWidth: 1420}}>Compare the details.<br /><span style={{color: palette.coralDeep, fontStyle: 'italic'}}>Not the people.</span></div>
        <div style={{fontSize: 31, color: palette.muted, lineHeight: 1.42, width: 930, marginTop: 29}}>Both accounts stay visible. Each result points back to the words that produced it.</div>
      </div>
      <div style={{position: 'absolute', left: 110, right: 110, top: 560, display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 16}}>
        {['People', 'Action', 'Time', 'Money', 'Conditions'].map((item, index) => <div key={item} style={{padding: '28px 24px', border: `2px solid ${index < 2 ? palette.green : palette.coral}`, background: palette.paper, boxShadow: '0 16px 34px rgba(72,52,37,.12)'}}><div style={{fontFamily: serif, fontSize: 33, fontWeight: 700}}>{item}</div><div style={{fontSize: 19, color: index < 2 ? palette.green : palette.coralDeep, fontWeight: 850, marginTop: 10}}>{index < 2 ? '✓ Aligned' : '? Check together'}</div></div>)}
      </div>
      <CaptionLayer><BasicCaptions name="Solution captions" width={1570} captions={[
        {text: 'Same Page keeps both versions separate.', startMs: 400, endMs: 3300, timestampMs: 1850, confidence: null, pageBreakAfter: true},
        {text: 'It compares the person, action, time, money and any condition.', startMs: 3300, endMs: 7900, timestampMs: 5600, confidence: null, pageBreakAfter: true},
        {text: 'It does not decide who is right. It points to the exact words that need one quick check.', startMs: 7900, endMs: 14200, timestampMs: 11050, confidence: null},
      ]} /></CaptionLayer>
    </SceneFrame>
  );
};
