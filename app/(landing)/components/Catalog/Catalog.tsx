import CatalogHeader from './CatalogHeader';
import CategoryList from './Category/CategoryList';
import ViewAllButton from './ViewAllButton';
import ProductSchema from './ProductSchema';

const Catalog = () => {
  return (
    <section id="catalogo" className="py-20 bg-linear-to-b from-white to-[#FAF7F2]">
      <ProductSchema />
      <div className="container mx-auto px-4 lg:px-8">
        <CatalogHeader />
        <CategoryList />
        <ViewAllButton />
      </div>
    </section>
  );
}

export default Catalog;
