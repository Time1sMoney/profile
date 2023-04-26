import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import { useEffect, useState } from 'react';
dayjs.locale('zh-cn');
export default function Footer() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD H:mm dddd'));
  useEffect(() => {
    const updateTime = setInterval(() => {
      setDate(dayjs().format('YYYY-MM-DD H:mm dddd'));
    }, 1000);
    return () => clearInterval(updateTime);
  }, []);
  return (
    <footer className="flex flex-col h-20 w-full justify-center text-center py-2 bg-neutral-700 text-white bottom-0">
      <span>{date}</span>
      <span>
        <a href="https://beian.miit.gov.cn/" target="_blank">
          赣ICP备2023004076号
        </a>
      </span>
    </footer>
  );
}
