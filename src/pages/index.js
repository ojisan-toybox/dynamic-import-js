import { useEffect } from "react";

export default () => {
  useEffect(() => {
    import("../modules/esm").then((mod) => {
      console.log(mod);
    });
  }, []);

  useEffect(() => {
    try {
      import("../modules/cjs")
        .then((mod) => {
          console.log(mod);
        })
        .catch((e) => console.error("eeeee", e));
    } catch (e) {
      console.error("outer", e);
    }
  }, []);

  return <div>hello</div>;
};
