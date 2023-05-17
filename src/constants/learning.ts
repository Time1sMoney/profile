import githubLogo from '@iconify/icons-carbon/logo-github';
import stackoverflowLogo from '@iconify/icons-tabler/brand-stackoverflow';
import mdnwebdocsLogo from '@iconify/icons-simple-icons/mdnwebdocs';
import leetcodeLogo from '@iconify/icons-tabler/brand-leetcode';
import devLogo from '@iconify/icons-simple-icons/devdotto';
import rustLogo from '@iconify/icons-tabler/brand-rust';
import golangLogo from '@iconify/icons-tabler/brand-golang';
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
  {
    name: 'DevDocs',
    icon: devLogo,
    url: 'https://devdocs.io/',
  },
  {
    name: 'Rust',
    icon: rustLogo,
    url: 'https://www.rust-lang.org/zh-CN/',
  },
  {
    name: 'Golang',
    icon: golangLogo,
    url: 'https://go.dev/',
  },
];
