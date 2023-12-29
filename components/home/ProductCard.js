import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ title, price, imageUrl }) => {
  return (
    <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-lg w-80">
      <div className="relative bg-clip-border mt-4 mx-4 rounded-xl overflow-hidden bg-white text-gray-700 h-96">
        <Image src={imageUrl} alt="card-image" fill={true} objectFit="cover" />
      </div>
      <div className="p-6">
        <div className="mb-2 flex items-center justify-between">
          <p className="text-base leading-relaxed text-gray-900 font-medium">
            {title}
          </p>
          <p className="text-base leading-relaxed text-gray-900 font-medium">
            €{price}
          </p>
        </div>
      </div>
      <div className="p-6 pt-0">
        <Link href="#">
          <button
            className="text-xs py-3 px-6 rounded-lg block w-full bg-gray-900 text-white hover:scale-105"
            type="button"
          >
            Buy Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
