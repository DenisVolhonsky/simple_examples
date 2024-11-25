import { useEffect } from "react";

const hoc = (WrappedComponent) => {
  return (props) => {
    useEffect(() => {
      console.log(`Component ${WrappedComponent.name} mounted, props with props: ${JSON.stringify(props)}`);

      return () => {
        console.log(`Component ${WrappedComponent.name} unmounted`);
      };
    }, []);
    return WrappedComponent(props);
  };
};

export default hoc;
