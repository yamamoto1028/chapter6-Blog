type TextareaProps = {
  id: string;
  rows: number;
  value: string;
  onChange: (value: string) => void;
  maxLength?: number;
};

export default function Textarea(props: TextareaProps) {
  return (
    <div className="input-box w-full">
      <textarea
        id={props.id}
        className="text-box resize-none auto-cols-[8] w-full p-4 border border-gray-300 rounded-lg"
        rows={props.rows}
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
        maxLength={props.maxLength}
        // required
      />
    </div>
  );
}
