import vscodeLogo from '@iconify/icons-tabler/brand-vscode';
import postmanLogo from '@iconify/icons-simple-icons/postman';
import gitLogo from '@iconify/icons-tabler/brand-git';
import { Item } from '@/types';

export const TOOLS: Item[] = [
  {
    name: 'VSCode',
    icon: vscodeLogo,
    url: 'https://code.visualstudio.com/',
  },
  {
    name: 'Git',
    icon: gitLogo,
    url: 'https://git-scm.com/',
  },
  {
    name: 'Postman',
    icon: postmanLogo,
    url: 'https://www.postman.com/',
  },
];
