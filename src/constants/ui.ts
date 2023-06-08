import { Item } from '@/types';
import antdesignLogo from '@iconify/icons-simple-icons/antdesign';
import elementPlusLogo from '@iconify/icons-ep/element-plus';
import radixLogo from '@iconify/icons-tabler/brand-radix-ui';
import muiLogo from '@iconify/icons-simple-icons/mui';

export const UI: Item[] = [
  {
    name: 'AntDesign',
    icon: antdesignLogo,
    url: 'https://ant-design.antgroup.com/index-cn',
  },
  {
    name: 'ElementPlus',
    icon: elementPlusLogo,
    url: 'https://element-plus.org/zh-CN/',
  },
  {
    name: 'Radix',
    icon: radixLogo,
    url: 'https://www.radix-ui.com/',
  },
  {
    name: 'MUI',
    icon: muiLogo,
    url: 'https://mui.com/core/',
  },
];
