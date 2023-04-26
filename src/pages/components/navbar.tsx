import Image from 'next/image';
import logo from '@/../public/dog.png';
export default function Navbar() {
  return (
    <div className="sticky flex h-24 px-10  border-b border-slate-300 drop-shadow shadow-slate-500">
      <div className="flex items-center space-x-4">
        <Image
          src={logo}
          width={80}
          alt="codercoin"
          priority
          className="h-auto cursor-pointer hover:scale-105 hover-transition"
        />
        <div className="flex flex-col">
          <span className="antialiased italic font-bold">欢迎来到硬币小屋</span>
          <code className="text-slate-500 cursor-pointer">
            <a href="http://codercoin.top">codercoin.top</a>
          </code>
        </div>
      </div>
    </div>
  );
}
