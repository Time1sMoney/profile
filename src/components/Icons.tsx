'use client';
import githubLogo from '@iconify/icons-carbon/logo-github';
import reactIcon from '@iconify/icons-carbon/logo-react';
import twitterLogo from '@iconify/icons-carbon/logo-twitter';
import astroIcon from '@iconify/icons-simple-icons/astro';
import jsIcon from '@iconify/icons-simple-icons/nodedotjs';
import linkIcon from '@iconify/icons-tabler/arrow-up-right';
import bookIcon from '@iconify/icons-tabler/book';
import bilibiliLogo from '@iconify/icons-tabler/brand-bilibili';
import viteIcon from '@iconify/icons-tabler/brand-vite';
import chartIcon from '@iconify/icons-tabler/chart-area';
import homeIcon from '@iconify/icons-tabler/home';
import jsonIcon from '@iconify/icons-tabler/json';
import mailIcon from '@iconify/icons-tabler/mail';
import moon from '@iconify/icons-tabler/moon';
import sun from '@iconify/icons-tabler/sun';
import templateIcon from '@iconify/icons-tabler/template';
import { Icon, IconifyIcon } from '@iconify/react';
import { MouseEvent } from 'react';

interface Props {
  name: IconNames;
  size?: number;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
  onClick?: (event: MouseEvent<SVGSVGElement>) => void;
}
export type IconNames =
  | 'moon'
  | 'sun'
  | 'githubLogo'
  | 'twitterLogo'
  | 'bookIcon'
  | 'bilibiliLogo'
  | 'homeIcon'
  | 'mailIcon'
  | 'reactIcon'
  | 'astroIcon'
  | 'viteIcon'
  | 'jsonIcon'
  | 'chartIcon'
  | 'jsIcon'
  | 'templateIcon'
  | 'linkIcon';

const iconset: Record<IconNames, IconifyIcon> = {
  moon,
  sun,
  githubLogo,
  twitterLogo,
  bookIcon,
  bilibiliLogo,
  homeIcon,
  mailIcon,
  reactIcon,
  astroIcon,
  viteIcon,
  jsonIcon,
  chartIcon,
  jsIcon,
  templateIcon,
  linkIcon,
};
const Icons: React.FC<Props> = (props) => {
  const { name, size, ...rest } = props;
  return <Icon icon={iconset[name]} fontSize={size} {...rest}></Icon>;
};
export default Icons;
