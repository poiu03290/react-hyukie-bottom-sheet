import Layout from "../Common/Layout";
import Container from "../Common/Container";
import Section from "../Common/Section";

type Props = {
  isShow?: boolean;
  handleBottomSheet?: (state: boolean) => void;
  contents?: React.ReactNode;
  height?: number;
  backGroundColor?: string;
  shadow?: string;
  duration?: number;
};

export default function BottomSheet({
  isShow,
  handleBottomSheet,
  contents,
  height,
  backGroundColor,
  shadow,
  duration,
}: Props) {
  return (
    <Layout>
      <Container
        isShow={isShow}
        handleBottomSheet={handleBottomSheet}
        backGroundColor={backGroundColor}
      />
      <Section
        height={height}
        isShow={isShow}
        handleBottomSheetShow={handleBottomSheet}
        shadow={shadow}
        duration={duration}
      >
        {contents}
      </Section>
    </Layout>
  );
}
