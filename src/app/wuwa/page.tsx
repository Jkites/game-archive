import BannerImage from "../_components/BannerImage";
import wuwa from "./img/banner.jpg";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
    <BannerImage
      src="/wuwa/banner.jpg"
      alt="Wuwa"
      ></BannerImage>
        <div className="text-center mt-4">
          <h1 className="text-3xl font-bold">Wuwa</h1>
          <p className="mt-2 text-lg">A game about a little creature named Wuwa.</p>
        </div>
      </div>
  );
}
