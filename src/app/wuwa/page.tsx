import GameImage from "../_components/images/GameImage";
import wuwa from "./img/banner.jpg";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
    <GameImage src="/wuwa/augusta.jpg" alt="Wuthering Waves Banner" variant="card" className="self-center" />
        <div className="text-center mt-4">
          <h1 className="text-3xl font-bold">Wuthering Waves</h1>
          <p className="mt-2 text-lg">A game about a little creature named Wuwa.</p>
        </div>
      </div>
  );
}
