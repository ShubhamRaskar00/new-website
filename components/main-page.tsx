import Image from "next/image";

function MainPage() {
  return (
    <div className="font-bold py-36 text-center space-y-4 flex items-center justify-around">
      <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold">
        <h1>Hello I&apos;m Shubham 😉</h1>
      </div>
      <div className="relative h-32 w-32 overflow-hidden rounded-full">
        <Image fill alt="Author image" src="/shubham.png" />
      </div>
    </div>
  );
}

export default MainPage;
