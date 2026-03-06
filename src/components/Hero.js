import Image from "next/image";

export default function Hero() {
  return (
    <section className="text-center py-24 bg-gray-100 flex flex-col items-center">
      {/* Profile Image */}
      <Image
        src="/porfile.jpg"
        alt="Nitesh Kumar"
        width={160}
        height={160}
        className="rounded-full mb-6 border-4 border-white shadow-lg"
      />

      <h1 className="text-5xl font-bold mb-4">Hi, I'm Nitesh Kumar</h1>

      <p className="text-xl text-gray-600">
        Full Stack Developer | Next.js | React | MongoDB
      </p>

      <button className="mt-6 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800">
        View My Work
      </button>
    </section>
  );
}
