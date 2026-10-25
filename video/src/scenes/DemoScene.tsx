import {Audio} from '@remotion/media';
import {Img, Sequence, staticFile, useVideoConfig} from 'remotion';
import {BasicCaptions} from '../basic-captions';
import {CaptionLayer, SceneFrame, palette, serif} from '../scene-kit';

const Screenshot = ({src, shade = false}: {src: string; shade?: boolean}) => <div style={{position: 'absolute', left: 60, top: 128, width: 1800, height: 810, overflow: 'hidden', border: `2px solid ${palette.line}`, background: palette.paper, boxShadow: '0 30px 90px rgba(50,35,25,.22)'}}><Img src={staticFile(src)} style={{width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top'}} />{shade ? <div style={{position: 'absolute', inset: 0, background: 'rgba(255,250,241,.46)'}} /> : null}</div>;
const Stage = ({children}: {children: string}) => <div style={{position: 'absolute', left: 88, top: 48, fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace', color: palette.coralDeep, fontSize: 25, fontWeight: 900, letterSpacing: 2.6}}>{children}</div>;

export const DemoScene = () => {
  const {fps} = useVideoConfig();
  return (
    <SceneFrame>
      <Audio name="Demo narration" from={15} src={staticFile('audio/03-demo.wav')} premountFor={fps} />
      <Sequence name="Two versions" durationInFrames={180} premountFor={fps}>
        <Stage>2A · TWO ACCOUNTS STAY SEPARATE</Stage><Screenshot src="images/versions.png" />
        <div style={{position: 'absolute', left: 120, top: 620, display: 'flex', gap: 20}}>{['Maya: $800 by Friday', 'Jordan: half of $1,700 on Monday'].map((text, index) => <div key={text} style={{padding: '24px 30px', background: index ? '#fff0e8' : palette.paper, border: `3px solid ${index ? palette.coral : palette.green}`, fontSize: 29, fontWeight: 850}}>{text}</div>)}</div>
      </Sequence>
      <Sequence name="Comparison receipt" from={180} durationInFrames={210} premountFor={fps}>
        <Stage>2B · THE SPLIT APPEARS WITHOUT BLAME</Stage><Screenshot src="images/results.png" shade />
        <div style={{position: 'absolute', left: 112, top: 250, width: 1060, padding: '34px 40px', background: 'rgba(255,250,241,.97)', border: `3px solid ${palette.coral}`, boxShadow: '0 24px 70px rgba(72,52,37,.18)'}}><div style={{fontFamily: serif, fontSize: 78, lineHeight: 1, letterSpacing: -3.6}}>2 aligned. <span style={{color: palette.coralDeep}}>3 to check.</span></div><div style={{fontSize: 31, lineHeight: 1.42, color: palette.muted, marginTop: 24}}>The app keeps the source phrases beside every result, so the next conversation starts with evidence.</div></div>
      </Sequence>
      <Sequence name="Evidence pairs" from={390} durationInFrames={180} premountFor={fps}>
        <Stage>2C · THE THREE GAPS ARE CONCRETE</Stage><Screenshot src="images/evidence.png" shade />
        <div style={{position: 'absolute', left: 108, right: 108, top: 270, display: 'grid', gap: 17}}>{[
          ['TIME', 'Friday, October 30', 'Monday, November 2'], ['MONEY', '$800', 'half of $1,700'], ['CONDITION', 'after the bill arrives', "even if it hasn't arrived"],
        ].map(([label, a, b]) => <div key={label} style={{display: 'grid', gridTemplateColumns: '220px 1fr 1fr', gap: 12, alignItems: 'center', padding: '22px 24px', background: 'rgba(255,250,241,.97)', borderLeft: `8px solid ${palette.coral}`, boxShadow: '0 13px 32px rgba(72,52,37,.12)'}}><div style={{fontSize: 22, fontWeight: 900, color: palette.coralDeep, letterSpacing: 1.8}}>{label}</div><div style={{fontFamily: serif, fontSize: 31}}>{a}</div><div style={{fontFamily: serif, fontSize: 31}}>{b}</div></div>)}</div>
      </Sequence>
      <Sequence name="Shared confirmation" from={570} durationInFrames={210} premountFor={fps}>
        <Stage>2D · ONE EDITABLE MESSAGE CLOSES THE LOOP</Stage><Screenshot src="images/confirmation.png" />
        <div style={{position: 'absolute', left: 100, top: 260, width: 690, padding: '34px 38px', background: 'rgba(32,32,29,.96)', color: palette.paper, borderLeft: `9px solid ${palette.coral}`}}><div style={{fontFamily: serif, fontSize: 70, lineHeight: 1.02}}>One plan.<br />Three questions.</div><div style={{fontSize: 29, lineHeight: 1.42, color: '#ddd4c8', marginTop: 25}}>Editable. Copyable. Never sent without the people involved.</div></div>
      </Sequence>
      <CaptionLayer><BasicCaptions name="Demo captions" width={1570} captions={[
        {text: 'Maya and Jordan remember one rent agreement differently.', startMs: 400, endMs: 3700, timestampMs: 2050, confidence: null, pageBreakAfter: true},
        {text: 'They agree that Maya will handle the rent payment.', startMs: 3700, endMs: 6800, timestampMs: 5250, confidence: null, pageBreakAfter: true},
        {text: 'But the timing, amount and condition do not match.', startMs: 6800, endMs: 10300, timestampMs: 8550, confidence: null, pageBreakAfter: true},
        {text: 'Each phrase appears side by side, so the gap is visible without blame.', startMs: 10300, endMs: 15000, timestampMs: 12650, confidence: null, pageBreakAfter: true},
        {text: 'Same Page creates one editable message with three direct questions.', startMs: 15000, endMs: 19700, timestampMs: 17350, confidence: null, pageBreakAfter: true},
        {text: 'Nothing is sent automatically. They settle the details and leave with one shared plan.', startMs: 19700, endMs: 24600, timestampMs: 22150, confidence: null},
      ]} /></CaptionLayer>
    </SceneFrame>
  );
};
