import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Wrapper = ({ children }) => (
  <div
    style={{
      lineHeight: 2,
      padding: "1rem",
      marginBottom: "0.5rem",
      boxShadow: "0 0 4px rgb(0 0 0 / 20%)",
      borderRadius: "25px",
    }}
  >
    {children}
  </div>
);
const HeroSkeleton = ({ count = 1, height = 351 }) => {
  return (
    <Wrapper>
      <Skeleton count={count} height={height} />
    </Wrapper>
  );
};

export default HeroSkeleton;
