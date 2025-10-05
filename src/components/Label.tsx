type LabelProps = {
  for: string;
  text: string;
};
export default function Label(props: LabelProps) {
  return (
    <label className="name-tag w-[240px]" id={props.for}>
      {props.text}
    </label>
  );
}
