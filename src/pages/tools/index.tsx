import { Icon, IconifyIcon } from '@iconify/react';
import transformIcon from '@iconify/icons-tabler/transform';
import coinIcon from '@iconify/icons-tabler/coin';
import TimeTransformer from './components/TimeTransformer';
import { useState } from 'react';
interface Tool {
  icon: IconifyIcon;
  title: string;
  desc: string;
  key: string;
}
const tools: Tool[] = [
  {
    icon: transformIcon,
    title: 'Time Duration Transformer',
    desc: ' A tool for transforming time duration',
    key: '1',
  },
  {
    icon: coinIcon,
    title: 'TBD',
    desc: ' undefined',
    key: '2',
  },
  {
    icon: coinIcon,
    title: 'TBD',
    desc: ' undefined',
    key: '3',
  },
  {
    icon: coinIcon,
    title: 'TBD',
    desc: ' undefined',
    key: '4',
  },
];
const componentMap: Record<string, JSX.Element> = {
  1: <TimeTransformer />,
};
export default function NoteBook() {
  const [activeKey, setActiveKey] = useState<string>('');
  return (
    <div className="container mx-auto mt-24 space-y-8">
      <ul className="grid grid-cols-4 gap-4">
        {tools.map(({ key, title, icon, desc }) => (
          <li className="card" key={key} onClick={() => setActiveKey(key)}>
            <Icon icon={icon} fontSize={30} />
            <div className="space-y-1">
              <div className="text-lg font-semibold">{title}</div>
              <p className="text-slate-500">{desc}</p>
            </div>
          </li>
        ))}
      </ul>
      <div className="flex justify-center">
        {componentMap[activeKey] || null}
      </div>
    </div>
  );
}
