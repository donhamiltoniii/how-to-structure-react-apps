import "./styles.css";

interface ContainerProps {
  children: React.ReactNode;
  maxWidth?: number;
}

export const Container = ({ maxWidth = 40, children }: ContainerProps) => {
  return (
    <div
      className="container"
      data-testid="container-container"
      style={{ maxWidth: `${maxWidth}rem` }}
    >
      {children}
    </div>
  );
};
