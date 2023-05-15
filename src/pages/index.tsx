import { ECOLOGY } from '../constants/ecology';
import { Icon } from '@iconify/react';
import { TOOLS } from '../constants/tools';
import { LEARNING } from '../constants/learning';
export default function Home() {
  return (
    <div className="container mx-auto mb-16 mt-24 flex flex-1 flex-col gap-8 overflow-y-auto px-2 pt-8 dark:bg-gray-800 dark:text-slate-300">
      <div className="grid gap-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
        <div className="flex items-center justify-between sm:col-span-4 md:col-span-6 lg:col-span-8">
          <span className="text-lg font-semibold">Ecology</span>
          <span className="max-w-[50%] overflow-hidden text-ellipsis max-sm:hidden">
            Current must-popular techs.
          </span>
        </div>
        {ECOLOGY.map((e) => (
          <a href={e.url} target="_blank" key={e.name} className="item">
            <Icon icon={e.icon} fontSize={18} className="mr-2" />
            {e.name}
          </a>
        ))}
      </div>
      <div className="grid gap-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
        <div className="flex items-center justify-between sm:col-span-4 md:col-span-6 lg:col-span-8">
          <span className="text-lg font-semibold">Tools</span>
          <span className="max-w-[50%] overflow-hidden text-ellipsis max-sm:hidden">
            A good tool makes you do twice as much with half the work.
          </span>
        </div>
        {TOOLS.map((e) => (
          <a href={e.url} target="_blank" key={e.name} className="item">
            <Icon icon={e.icon} fontSize={18} className="mr-2" />
            {e.name}
          </a>
        ))}
      </div>
      <div className="grid gap-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
        <div className="flex items-center justify-between sm:col-span-4 md:col-span-6 lg:col-span-8">
          <span className="text-lg font-semibold">Learning</span>
          <span className="max-w-[50%] overflow-hidden text-ellipsis max-sm:hidden">
            Keep learning and keep enthusiasm.
          </span>
        </div>
        {LEARNING.map((e) => (
          <a href={e.url} target="_blank" key={e.name} className="item">
            <Icon icon={e.icon} fontSize={18} className="mr-2" />
            {e.name}
          </a>
        ))}
      </div>
    </div>
  );
}
