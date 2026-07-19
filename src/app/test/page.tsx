import PageLayout from "@/app/_components/layout/PageLayout";
import GameImage from "@/app/_components/images/GameImage";

const games = [
  { id: 1, title: "Game One", thumbnail: "/images/game-1.jpg" },
  { id: 2, title: "Game Two", thumbnail: "/images/game-2.jpg" },
  { id: 3, title: "Game Three", thumbnail: "/images/game-3.jpg" },
  { id: 4, title: "Game Four", thumbnail: "/images/game-4.jpg" },
];

export default function Home() {
  return (
    <PageLayout
      banner={
        <GameImage
          src="/wuwa/banner.jpg"
          alt="Featured game"
          variant="banner"
        />
      }
      sidebar={<Filters />}
    >
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-base font-medium">all games</h1>
        <select className="h-9 rounded-md border border-gray-300 px-2 text-sm">
          <option>sort by newest</option>
          <option>sort by name</option>
        </select>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {games.map((game) => (
          <a key={game.id} href={`/games/${game.id}`} className="block group">
            <GameImage
              src={game.thumbnail}
              alt={game.title}
              variant="card"
              className="w-full"
            />
            <p className="mt-2 text-sm text-gray-700 group-hover:text-black">
              {game.title}
            </p>
          </a>
        ))}
      </div>
    </PageLayout>
  );
}

function Filters() {
  return (
    <div className="flex flex-col gap-6 text-sm">
      <div>
        <p className="font-medium mb-2">platform</p>
        <div className="flex flex-col gap-2 text-gray-600">
          <label className="flex items-center gap-2">
            <input type="checkbox" /> PC
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" /> console
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" /> mobile
          </label>
        </div>
      </div>
      <div>
        <p className="font-medium mb-2">genre</p>
        <div className="flex flex-col gap-2 text-gray-600">
          <label className="flex items-center gap-2">
            <input type="checkbox" /> action
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" /> puzzle
          </label>
        </div>
      </div>
    </div>
  );
}