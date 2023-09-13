import { ECOLOGY } from '@/constants/ecology';
import { Icon } from '@iconify/react';
import { TOOLS } from '@/constants/tools';
import { LEARNING } from '@/constants/learning';
import arrowBigRight from '@iconify/icons-tabler/arrow-big-right';
import { UI } from '@/constants/ui';
export default function Home() {
  return (
    <div className=" container mx-auto flex flex-1 flex-col gap-8 px-4">
      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-8">
        <div className="flex items-center justify-between sm:col-span-1 md:col-span-2 lg:col-span-4 xl:col-span-6 2xl:col-span-8">
          <span className="text-lg font-semibold">Ecology</span>
          <span className="max-w-[50%] overflow-hidden text-ellipsis max-sm:hidden">
            Current must-popular techs.
          </span>
        </div>
        {ECOLOGY.map((e) => (
          <a
            href={e.url}
            target="_blank"
            key={e.name}
            className="item group/item relative"
          >
            <span className="flex items-center space-x-2 transition duration-300 delay-100 ease-in-out group-hover/item:-translate-x-2">
              <Icon icon={e.icon} fontSize={18} />
              <span className="">{e.name}</span>
            </span>
            <Icon
              icon={arrowBigRight}
              fontSize={18}
              className="absolute right-1 opacity-0 transition duration-300 delay-100 ease-in-out group-hover/item:-translate-x-1 group-hover/item:opacity-100"
            />
          </a>
        ))}
      </div>
      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-8">
        <div className="flex items-center justify-between sm:col-span-1 md:col-span-2 lg:col-span-4 xl:col-span-6 2xl:col-span-8">
          <span className="text-lg font-semibold">UI Library</span>
          <span className="max-w-[50%] overflow-hidden text-ellipsis max-sm:hidden">
            Help you design and build Beautiful interface.
          </span>
        </div>
        {UI.map((e) => (
          <a
            href={e.url}
            target="_blank"
            key={e.name}
            className="item group/item relative"
          >
            <span className="flex items-center space-x-2 transition duration-300 delay-100 ease-in-out group-hover/item:-translate-x-2">
              <Icon icon={e.icon} fontSize={18} />
              <span className="">{e.name}</span>
            </span>
            <Icon
              icon={arrowBigRight}
              fontSize={18}
              className="absolute right-1 opacity-0 transition duration-300 delay-100 ease-in-out group-hover/item:-translate-x-1 group-hover/item:opacity-100"
            />
          </a>
        ))}
      </div>
      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-8">
        <div className="flex items-center justify-between sm:col-span-1 md:col-span-2 lg:col-span-4 xl:col-span-6 2xl:col-span-8">
          <span className="text-lg font-semibold">Tools</span>
          <span className="max-w-[50%] overflow-hidden text-ellipsis max-sm:hidden">
            A good tool makes you do twice as much with half the work.
          </span>
        </div>
        {TOOLS.map((e) => (
          <a
            href={e.url}
            target="_blank"
            key={e.name}
            className="item group/item relative"
          >
            <span className="flex items-center space-x-2 transition duration-300 delay-100 ease-in-out group-hover/item:-translate-x-1">
              <Icon icon={e.icon} fontSize={18} />
              <span className="">{e.name}</span>
            </span>
            <Icon
              icon={arrowBigRight}
              fontSize={18}
              className="absolute right-1 opacity-0 transition duration-300 delay-100 ease-in-out group-hover/item:-translate-x-2 group-hover/item:opacity-100"
            />
          </a>
        ))}
      </div>
      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-8">
        <div className="flex items-center justify-between sm:col-span-1 md:col-span-2 lg:col-span-4 xl:col-span-6 2xl:col-span-8">
          <span className="text-lg font-semibold">Learning</span>
          <span className="max-w-[50%] overflow-hidden text-ellipsis max-sm:hidden">
            Keep learning and keep enthusiasm.
          </span>
        </div>
        {LEARNING.map((e) => (
          <a
            href={e.url}
            target="_blank"
            key={e.name}
            className="item group/item relative"
          >
            <span className="flex items-center space-x-2 transition duration-300 delay-100 ease-in-out group-hover/item:-translate-x-2">
              <Icon icon={e.icon} fontSize={18} />
              <span className="">{e.name}</span>
            </span>
            <Icon
              icon={arrowBigRight}
              fontSize={18}
              className="absolute right-1 opacity-0 transition duration-300 delay-100 ease-in-out group-hover/item:-translate-x-1 group-hover/item:opacity-100"
            />
          </a>
        ))}
      </div>
    </div>
  );
}
