import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
dayjs.locale('zh-cn');
export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-[999] flex h-16 items-center justify-center space-x-4 border-t bg-slate-100 py-2 dark:border-slate-500 dark:bg-gray-800 dark:text-white">
      <span>
        <a href="https://beian.miit.gov.cn/" target="_blank">
          赣ICP备2023004076号
        </a>
      </span>
      <span className="text-gray-400">© Codercoin</span>
    </footer>
  );
}
