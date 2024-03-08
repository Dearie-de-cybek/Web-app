import styled from "styled-components";

const Loader = styled.div`
  margin: 4.8rem auto;
  width: 8.4rem;
  aspect-ratio: 1;
  border-radius: 50%;
  background: radial-gradient(
        farthest-side,
        var(--color-purple-200) 94%,
        var(--color-transparent)
      )
      top/15px 15px no-repeat,
    conic-gradient(var(--color-transparent) 30%, var(--color-purple-200));
  -webkit-mask: radial-gradient(
    farthest-side,
    var(--color-transparent) calc(100% - 15px),
    var(--color-purple-600) 0
  );
  mask: radial-gradient(
    farthest-side,
    var(--color-transparent) calc(100% - 15px),
    var(--color-purple-600) 0
  );
  animation: rotate 1.5s infinite linear;

  @keyframes rotate {
    to {
      transform: rotate(1turn);
    }
  }

  @media (max-width: 640px) {
    width: 6rem;
  }
`;

export default Loader;
