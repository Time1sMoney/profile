export default function Body() {
  return (
    <div className="mb-16 mt-24 flex flex-1 flex-col overflow-auto dark:bg-gray-800">
      <section className="h-full w-[20%] overflow-auto border-r border-slate-200 p-2 dark:border-slate-500">
        <ul>
          {Array.from({ length: 30 }, (_, index) => index.toString()).map(
            (e, i) => (
              <a key={e} href="../articles/profile.md">
                <div className="cursor-pointer rounded-lg p-2 text-center text-2xl font-bold hover:bg-gray-500 dark:text-white">
                  {i + 1} Under Development
                </div>
              </a>
            )
          )}
        </ul>
      </section>
    </div>
  );
}
