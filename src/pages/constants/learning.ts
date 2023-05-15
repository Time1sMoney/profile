import githubLogo from '@iconify/icons-carbon/logo-github';
import stackoverflowLogo from '@iconify/icons-tabler/brand-stackoverflow';
import mdnwebdocsLogo from '@iconify/icons-simple-icons/mdnwebdocs';
import leetcodeLogo from '@iconify/icons-tabler/brand-leetcode';
import { Item } from '@/types';

export const LEARNING: Item[] = [
  {
    name: 'Github',
    icon: githubLogo,
    url: 'https://github.com/',
  },
  {
    name: 'Stackoverflow',
    icon: stackoverflowLogo,
    url: 'https://stackoverflow.com/',
  },
  {
    name: 'MDN',
    icon: mdnwebdocsLogo,
    url: 'https://developer.mozilla.org',
  },
  {
    name: 'Leetcode',
    icon: leetcodeLogo,
    url: 'https://leetcode.cn/',
  },
];
