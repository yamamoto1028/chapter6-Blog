type LabelProps = React.ComponentProps<"label">;

export default function Label(props: LabelProps) {
  return (
    <label className="name-tag w-[240px]" htmlFor={props.htmlFor}>
      {props.children}
    </label>
  );
}
