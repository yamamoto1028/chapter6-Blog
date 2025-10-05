export type InputProps = {
  id: string;
  type: string;
  value: string;
  onChange: (value: string) => void;
  maxLength?: number;
};
export default function Input(props: InputProps) {
  return (
    <div className="input-container">
      <input
        className="input-box w-full p-4 border border-gray-300 rounded-lg"
        id={props.id}
        type={props.type}
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
        maxLength={props.maxLength}
        // required
      />
    </div>
  );
}
