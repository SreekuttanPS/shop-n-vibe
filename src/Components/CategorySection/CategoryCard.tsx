import { capitalizeFirst } from "@/helpers/utils";
import Image from "next/image";

function CategoryCard({
  categoryName,
  categoryImage,
}: {
  categoryName: string;
  categoryImage: string;
}) {
  return (
    <div className="group relative h-80 overflow-hidden rounded-lg shadow-md">
      <div className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500">
        <Image
          src={categoryImage}
          alt="Tester"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
      <div className="absolute bottom-0 left-0 p-6">
        <h3 className="text-2xl font-bold text-white mb-2">{capitalizeFirst(categoryName)}</h3>
        <a
          href="#"
          className="inline-flex items-center text-white hover:text-primary transition-colors"
        >
          <span>Shop Collection</span>
          <i className="ri-arrow-right-line ri-lg ml-2"></i>
        </a>
      </div>
    </div>
  );
}

export default CategoryCard;
