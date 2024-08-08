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
}: Props) {
  return (
    <Layout>
      <Container isShow={isShow} handleBottomSheet={handleBottomSheet} />
      <Section
        isShow={isShow}
        handleBottomSheetShow={handleBottomSheet}
        height={350}
      >
        {contents}
      </Section>
    </Layout>
  );
}
