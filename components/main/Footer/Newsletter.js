import Link from "next/link";
import { Button } from "../../ui/button";

const Newsletter = () => {
  return (
    <div className="color border-8 border-white rounded-lg">
      <div className="text-center container mx-auto p-8 rounded shadow-lg">
        <h2 className="text-xl  text-white mb-4">
          Join us to make the most of our resources today
        </h2>
        <div className="flex justify-center">
          <Link href="#">
            <Button variant="secondary" className="font-semibold">
              Register Now
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
