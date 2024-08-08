import Layout from "../Common/Layout";
import Container from "../Common/Container";
import Section from "../Common/Section";

type Props = {
  isShow?: boolean;
  handleBottomSheet: (state: boolean) => void;
  contents?: React.ReactNode;
  height?: number;
};

export default function BottomSheet({
  isShow,
  handleBottomSheet,
  contents,
  height,
}: Props) {
  return (
    <Layout>
      <Container isShow={isShow} handleBottomSheet={handleBottomSheet} />
      <Section
        height={height}
        isShow={isShow}
        handleBottomSheetShow={handleBottomSheet}
      >
        {contents}
      </Section>
    </Layout>
  );
}
