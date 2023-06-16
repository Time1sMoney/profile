import vscodeLogo from '@iconify/icons-tabler/brand-vscode';
import postmanLogo from '@iconify/icons-simple-icons/postman';
import swaggerLogo from '@iconify/icons-simple-icons/swagger';
import gitLogo from '@iconify/icons-tabler/brand-git';
import gitlabLogo from '@iconify/icons-tabler/brand-gitlab';
import lodashLogo from '@iconify/icons-simple-icons/lodash';
import postgresqlLogo from '@iconify/icons-simple-icons/postgresql';
import mysqlLogo from '@iconify/icons-tabler/brand-mysql';
import mongodbLogo from '@iconify/icons-tabler/brand-mongodb';
import rabbitmqLogo from '@iconify/icons-simple-icons/rabbitmq';
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
    name: 'Gitlab',
    icon: gitlabLogo,
    url: 'https://gitlab.com/',
  },
  {
    name: 'Postman',
    icon: postmanLogo,
    url: 'https://www.postman.com/',
  },
  {
    name: 'Swagger',
    icon: swaggerLogo,
    url: 'https://swagger.io/',
  },
  {
    name: 'Lodash',
    icon: lodashLogo,
    url: 'https://www.lodashjs.com/',
  },
  {
    name: 'PostgreSQL',
    icon: postgresqlLogo,
    url: 'https://www.postgresql.org/',
  },
  {
    name: 'MySQL',
    icon: mysqlLogo,
    url: 'https://www.mysql.com/',
  },
  {
    name: 'MongoDB',
    icon: mongodbLogo,
    url: 'https://www.mongodb.com/',
  },
  {
    name: 'RabbitMQ',
    icon: rabbitmqLogo,
    url: 'https://www.rabbitmq.com/',
  },
];
