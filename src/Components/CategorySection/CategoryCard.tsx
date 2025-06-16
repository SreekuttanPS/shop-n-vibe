import { capitalizeFirstAndSplit } from "@/helpers/utils";
import Image from "next/image";
import Link from "next/link";

function CategoryCard({ categoryName, categoryImage }: { categoryName: string; categoryImage: string }) {
  return (
    <Link className="group relative h-80 overflow-hidden rounded-lg shadow-md cursor-pointer" href={`/category/${categoryName}`}>
      <div className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500">
        <Image src={categoryImage} alt="Tester" width={300} height={400} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
      <div className="absolute bottom-0 left-0 p-6">
        <h3 className="text-2xl font-bold text-white mb-2">{capitalizeFirstAndSplit(categoryName)}</h3>
        <div className="inline-flex items-center text-white hover:text-primary transition-colors">
          <span>Shop Collection</span>
          <i className="ri-arrow-right-line ri-lg ml-2"></i>
        </div>
      </div>
    </Link>
  );
}

export default CategoryCard;
