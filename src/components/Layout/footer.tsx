import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
dayjs.locale('zh-cn');
export default function Footer() {
  return (
    <footer className="flex h-16 items-center justify-center space-x-4 p-4">
      <span>
        <a href="https://beian.miit.gov.cn/" target="_blank">
          赣ICP备2023004076号
        </a>
      </span>
      <span className="text-gray-400">© Codercoin</span>
    </footer>
  );
}
