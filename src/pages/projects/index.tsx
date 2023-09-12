import { Icon } from '@iconify/react';
import { projects } from '@/constants/projects';
import Link from 'next/link';

export default function NoteBook() {
  return (
    <div className="container mx-auto mt-24 space-y-8">
      <ul className="grid grid-cols-4 gap-4 auto-rows-max">
        {projects.map(({ title, icon, desc, url, tech_icons }) => (
          <Link key={url} href={url} target="_blank">
            <li className="card" key={url}>
              <Icon icon={icon} fontSize={30} />
              <div className="flex-1">
                <div className="pr-10 text-lg font-semibold">{title}</div>
                <p className="line-clamp-2 overflow-hidden text-ellipsis text-slate-500">
                  {desc}
                </p>
              </div>
              <div className="absolute right-2 top-2 flex gap-2 text-base">
                {tech_icons?.map((tech_icon, index) => (
                  <Icon key={index} icon={tech_icon} />
                ))}
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
