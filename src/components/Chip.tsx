import clsx from "clsx";
export type ChipProps = React.PropsWithChildren<
  {
    content?: string;
  } & React.HTMLAttributes<HTMLDivElement>
>;

const Chip: React.FC<ChipProps> = ({ children, content, className }) => {
  return (
    <div className={clsx("chip", className)}>{children || content || ""}</div>
  );
};

export default Chip;
