import cx from "classnames";
import styles from "./container.module.scss";

interface IContainerProps {
  className?: string;
  children?: React.ReactNode;
}

const Container = (props: IContainerProps) => {
  const { className, children } = props;
  return <div className={cx(styles.container, className)}>{children}</div>;
};
export default Container;
