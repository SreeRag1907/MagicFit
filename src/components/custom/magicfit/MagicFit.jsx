import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function MagicFit() {
  return (
    <div className="flex flex-col items-center my-10">
      <h1 className="text-center text-4xl font-bold mb-8">
        Welcome to the MagicFit Section
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-20">
        {/* Your Collections Card */}
        <div className="text-black p-6 rounded-lg border border-black text-center h-52">
          <h2 className="text-3xl font-semibold mb-4">My Collections</h2>
          <p className="mb-4">View and manage your favorite items.</p>
          <Link to={"/magicFit/my-collections"}>
            <Button className=" text-white py-2 px-4 rounded">
              View Collections
            </Button>
          </Link>
        </div>

        {/* MagicFit Checker Card */}
        <div className="text-black p-6 rounded-lg border border-black text-center h-52">
          <h2 className="text-3xl font-semibold mb-4">MagicFit Checker</h2>
          <p className="mb-4">
            Find your perfect fit based on your preferences.
          </p>
          <Link to={"/magicFit/checker"}>
            <Button className=" text-white py-2 px-4 rounded">
              Check My Fit
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MagicFit;
