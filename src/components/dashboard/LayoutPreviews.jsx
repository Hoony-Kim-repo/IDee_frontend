const SingleLayoutPreview = () => {
  return (
    <svg width={"40"} height={"40"} viewBox="0 0 40 40">
      <rect
        x="4"
        y="4"
        width="32"
        height="32"
        rx="4"
        fill="currentColor"
        opacity="0.15"
      />
    </svg>
  );
};

const TopBottomLayoutPreview = () => {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40">
      <rect
        x="4"
        y="4"
        width="32"
        height="14"
        rx="3"
        fill="currentColor"
        opacity="0.15"
      />
      <rect
        x="4"
        y="22"
        width="32"
        height="14"
        rx="3"
        fill="currentColor"
        opacity="0.15"
      />
    </svg>
  );
};

const LeftRightLayoutPreview = () => {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40">
      <rect
        x="4"
        y="4"
        width="14"
        height="32"
        rx="3"
        fill="currentColor"
        opacity="0.15"
      />
      <rect
        x="22"
        y="4"
        width="14"
        height="32"
        rx="3"
        fill="currentColor"
        opacity="0.15"
      />
    </svg>
  );
};

const TopOneBottomTwoLayoutPreview = () => {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40">
      <rect
        x="4"
        y="4"
        width="32"
        height="12"
        rx="3"
        fill="currentColor"
        opacity="0.15"
      />
      <rect
        x="4"
        y="20"
        width="14"
        height="16"
        rx="3"
        fill="currentColor"
        opacity="0.15"
      />
      <rect
        x="22"
        y="20"
        width="14"
        height="16"
        rx="3"
        fill="currentColor"
        opacity="0.15"
      />
    </svg>
  );
};

const TopTowBottomOneLayoutPreview = () => {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40">
      <rect
        x="4"
        y="4"
        width="14"
        height="16"
        rx="3"
        fill="currentColor"
        opacity="0.15"
      />
      <rect
        x="22"
        y="4"
        width="14"
        height="16"
        rx="3"
        fill="currentColor"
        opacity="0.15"
      />
      <rect
        x="4"
        y="24"
        width="32"
        height="12"
        rx="3"
        fill="currentColor"
        opacity="0.15"
      />
    </svg>
  );
};

const GridLayoutPreview = () => {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40">
      <rect
        x="4"
        y="4"
        width="14"
        height="14"
        rx="3"
        fill="currentColor"
        opacity="0.15"
      />
      <rect
        x="22"
        y="4"
        width="14"
        height="14"
        rx="3"
        fill="currentColor"
        opacity="0.15"
      />
      <rect
        x="4"
        y="22"
        width="14"
        height="14"
        rx="3"
        fill="currentColor"
        opacity="0.15"
      />
      <rect
        x="22"
        y="22"
        width="14"
        height="14"
        rx="3"
        fill="currentColor"
        opacity="0.15"
      />
    </svg>
  );
};

export {
  GridLayoutPreview,
  LeftRightLayoutPreview,
  SingleLayoutPreview,
  TopBottomLayoutPreview,
  TopOneBottomTwoLayoutPreview,
  TopTowBottomOneLayoutPreview,
};
