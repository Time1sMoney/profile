import { formatTimeDuration } from '@/utils/format';
import { useDebounceFn, useSetState } from 'ahooks';
import { useMemo } from 'react';
import { Icon } from '@iconify/react';
import transformIcon from '@iconify/icons-tabler/transform';
interface State {
  input: number | undefined;
  unit: string;
  digits: number;
}
const UNIT = ['ms', 'us', 'ns'];
const DIGITS = [0, 2, 3, 4, 5, 6, 7, 8, 9, 10];
export default function NoteBook() {
  const [state, setState] = useSetState<State>({
    input: undefined,
    unit: UNIT[0],
    digits: 2,
  });
  const result = useMemo(() => {
    return state.input
      ? formatTimeDuration(
          state.input,
          state.unit as 'ms' | 'us' | 'ns',
          state.digits
        )
      : '';
  }, [state.digits, state.input, state.unit]);
  const { run: handleInput } = useDebounceFn(
    (value: string) => {
      setState({ input: parseInt(value) });
    },
    {
      wait: 500,
    }
  );
  return (
    <div className="container mx-auto mt-24 flex h-full items-center justify-center dark:text-slate-300">
      <div className="w-[50%] space-y-2 rounded-lg border p-4 dark:border-gray-500">
        <div className="flex items-center justify-center py-1 text-lg font-semibold">
          <Icon icon={transformIcon} className="mr-2 text-lg" /> Time duration
          transformer
        </div>
        <div className="grid grid-cols-4 items-center">
          <label className="font-semibold">Time</label>
          <input
            className="input col-span-3 text-center"
            type="number"
            onChange={(e) => handleInput(e.target.value)}
          />
        </div>
        <div className="grid grid-cols-4 items-center">
          <label className="font-semibold">Unit</label>
          <select
            className="input col-span-3 text-center"
            onChange={(e) => setState({ unit: e.target.value })}
          >
            {UNIT.map((unit) => (
              <option key={unit} className="p-1">
                {unit}
              </option>
            ))}
          </select>
        </div>
        <div className="grid grid-cols-4 items-center">
          <label className="font-semibold">Digits</label>
          <select
            className="input col-span-3 text-center"
            onChange={(e) => setState({ digits: parseInt(e.target.value) })}
          >
            {DIGITS.map((digits) => (
              <option key={digits} className="p-1">
                {digits}
              </option>
            ))}
          </select>
        </div>
        <div className="grid grid-cols-4 items-center">
          <label className="font-semibold">Result</label>
          <input
            className="input col-span-3 text-center"
            value={result}
            disabled
          />
        </div>
      </div>
    </div>
  );
}
