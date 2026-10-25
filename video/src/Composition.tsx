import {Composition, Folder, Series, useVideoConfig} from 'remotion';
import {ClosingScene} from './scenes/ClosingScene';
import {DemoScene} from './scenes/DemoScene';
import {ProblemScene} from './scenes/ProblemScene';
import {SolutionScene} from './scenes/SolutionScene';
import {TechnicalScene} from './scenes/TechnicalScene';

export const SamePageVideo = () => {
  const {fps} = useVideoConfig();
  return <Series>
    <Series.Sequence name="Problem statement" durationInFrames={420} premountFor={fps}><ProblemScene /></Series.Sequence>
    <Series.Sequence name="How we solve it" durationInFrames={480} premountFor={fps}><SolutionScene /></Series.Sequence>
    <Series.Sequence name="Product demo" durationInFrames={780} premountFor={fps}><DemoScene /></Series.Sequence>
    <Series.Sequence name="Technical approach" durationInFrames={750} premountFor={fps}><TechnicalScene /></Series.Sequence>
    <Series.Sequence name="Closing" durationInFrames={240} premountFor={fps}><ClosingScene /></Series.Sequence>
  </Series>;
};

export const SamePageCompositions = () => <>
  <Folder name="Scenes">
    <Composition id="Problem" component={ProblemScene} durationInFrames={420} fps={30} width={1920} height={1080} />
    <Composition id="Solution" component={SolutionScene} durationInFrames={480} fps={30} width={1920} height={1080} />
    <Composition id="Demo" component={DemoScene} durationInFrames={780} fps={30} width={1920} height={1080} />
    <Composition id="Technical" component={TechnicalScene} durationInFrames={750} fps={30} width={1920} height={1080} />
    <Composition id="Closing" component={ClosingScene} durationInFrames={240} fps={30} width={1920} height={1080} />
  </Folder>
  <Composition id="SamePageDemo" component={SamePageVideo} durationInFrames={2670} fps={30} width={1920} height={1080} />
</>;
