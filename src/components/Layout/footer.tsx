import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
dayjs.locale('zh-cn');
export default function Footer() {
  return (
    <footer className="container mx-auto flex h-16 flex-col items-center justify-center space-x-4 p-4">
      <a
        href="https://beian.miit.gov.cn/"
        target="_blank"
        className="hidden text-sm"
      >
        赣ICP备2023004076号
      </a>
      <span className="text-gray-400">
        Copyright©2023-{dayjs().get('year')} | Made with ❤️
      </span>
    </footer>
  );
}
