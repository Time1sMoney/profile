import Marquee from 'react-fast-marquee';
export default function Body() {
  return (
    <div className="flex-1 flex justify-center items-center">
      <Marquee>
        {Array.from({ length: 30 }, (_, index) => index.toString()).map((e) => (
          <p key={e} className="mr-6 font-bold text-2xl hover-transition">
            Under Development
          </p>
        ))}
      </Marquee>
    </div>
  );
}
