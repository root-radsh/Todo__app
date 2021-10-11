import React from "react";
import ContentLoader from "react-content-loader";

const Loader = (props) => (
  <ContentLoader
    speed={1}
    width={100}
    height={40}
    viewBox="0 0 100 40"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="25" y="0" rx="3" ry="3" width="88" height="10" />
    <circle cx="5" cy="5" r="5" />
  </ContentLoader>
);
export default Loader;
