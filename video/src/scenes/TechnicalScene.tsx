import {Audio} from '@remotion/media';
import {staticFile, useVideoConfig} from 'remotion';
import {BasicCaptions} from '../basic-captions';
import {CaptionLayer, Chapter, SceneFrame, mono, palette, serif} from '../scene-kit';

export const TechnicalScene = () => {
  const {fps} = useVideoConfig();
  const steps = [['01', 'Extract', 'Find evidence for five narrow dimensions.'], ['02', 'Normalize', 'Turn dates and amounts into comparable values.'], ['03', 'Compare', 'Apply fixed aligned, check and missing rules.'], ['04', 'Explain', 'Keep both source phrases with the verdict.']];
  return (
    <SceneFrame style={{background: '#efe5d8'}}>
      <Audio name="Technical narration" from={15} src={staticFile('audio/04-technical.wav')} premountFor={fps} />
      <div style={{position: 'absolute', left: 110, top: 86, right: 110}}><Chapter>3 · Technical approach</Chapter><div style={{fontFamily: serif, fontSize: 86, lineHeight: 1, letterSpacing: -4.2, marginTop: 28}}>A small, inspectable phrase engine.</div></div>
      <div style={{position: 'absolute', left: 110, right: 110, top: 300, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 18}}>{steps.map(([number, title, detail], index) => <div key={title} style={{minHeight: 260, padding: '30px 28px', background: palette.paper, border: `2px solid ${index === 3 ? palette.green : palette.line}`, borderTop: `8px solid ${index === 3 ? palette.green : palette.coral}`, boxShadow: '0 18px 38px rgba(72,52,37,.1)'}}><div style={{fontFamily: mono, color: index === 3 ? palette.green : palette.coralDeep, fontSize: 20, letterSpacing: 2}}>{number}</div><div style={{fontSize: 38, fontWeight: 880, marginTop: 18}}>{title}</div><div style={{fontSize: 24, lineHeight: 1.42, color: palette.muted, marginTop: 14}}>{detail}</div></div>)}</div>
      <div style={{position: 'absolute', left: 110, right: 110, top: 628, display: 'grid', gridTemplateColumns: '1.35fr 1fr', gap: 20}}><div style={{padding: '26px 30px', background: palette.ink, color: palette.paper}}><div style={{fontFamily: mono, color: '#ef9c88', fontSize: 18, letterSpacing: 2}}>RUNTIME</div><div style={{fontSize: 30, fontWeight: 820, marginTop: 10}}>React + TypeScript · browser memory · no model call</div></div><div style={{padding: '26px 30px', background: '#e8f0eb', border: `2px solid ${palette.green}`}}><div style={{fontFamily: mono, color: palette.green, fontSize: 18, letterSpacing: 2}}>BOUNDARY</div><div style={{fontSize: 28, fontWeight: 820, marginTop: 10}}>Missing stays missing. Nothing is saved or sent.</div></div></div>
      <CaptionLayer><BasicCaptions name="Technical captions" width={1570} captions={[
        {text: 'A TypeScript phrase engine extracts structured evidence for five dimensions.', startMs: 400, endMs: 4700, timestampMs: 2550, confidence: null, pageBreakAfter: true},
        {text: 'Normalized values are compared with fixed rules.', startMs: 4700, endMs: 8100, timestampMs: 6400, confidence: null, pageBreakAfter: true},
        {text: 'Missing information stays missing, and every result keeps its source phrase.', startMs: 8100, endMs: 13100, timestampMs: 10600, confidence: null, pageBreakAfter: true},
        {text: 'React keeps the drafts, receipt and final message in browser memory.', startMs: 13100, endMs: 17800, timestampMs: 15450, confidence: null, pageBreakAfter: true},
        {text: 'There is no runtime model call, no account and no saved personal text.', startMs: 17800, endMs: 23100, timestampMs: 20450, confidence: null},
      ]} /></CaptionLayer>
    </SceneFrame>
  );
};
