import CatalogHeader from './CatalogHeader';
import CategoryList from './Category/CategoryList';
import ViewAllButton from './ViewAllButton';

const Catalog = () => {
  return (
    <section id="catalogo" className="py-20 bg-linear-to-b from-white to-[#FAF7F2]">
      <div className="container mx-auto px-4 lg:px-8">
        <CatalogHeader />
        <CategoryList />
        <ViewAllButton />
      </div>
    </section>
  );
}

export default Catalog;
