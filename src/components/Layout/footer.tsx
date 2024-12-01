import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
dayjs.locale('zh-cn');
export default function Footer() {
  return (
    <footer className="container mx-auto flex h-16 flex-col items-center justify-center space-x-4 p-4">
      <span className="text-slate-400">
        2023-{dayjs().get('year')} © Time1sMoney
      </span>
    </footer>
  );
}
