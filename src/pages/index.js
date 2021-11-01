import { useEffect } from "react";

export default () => {
  useEffect(() => {
    import("../modules/esm").then((mod) => {
      console.log(mod);
    });
  }, []);

  return <div>hello</div>;
};
