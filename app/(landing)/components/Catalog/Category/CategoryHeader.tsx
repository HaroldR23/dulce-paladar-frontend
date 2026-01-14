import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { CategoryHeaderProps, CategoryKey } from "../../props/categoryProps";


const CategoryHeader = ({ category, isExpanded, toggleCategory, info, visibleCount }: CategoryHeaderProps) => {
  return (
    <button 
      onClick={() => toggleCategory(category as CategoryKey)}
      className="w-full px-6 lg:px-8 py-6 flex items-center justify-between hover:bg-[#FAF7F2] transition-colors duration-200"
      style={{
        background: isExpanded
          ? `linear-gradient(135deg, ${info.color}20 0%, transparent 100%)`
          : 'transparent',
      }}
    >
      <div className="flex items-center space-x-4">
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center"
          style={{ backgroundColor: info.color }}
        >
          <span className="text-2xl">
            {category === 'tortas' && '🎂'}
            {category === 'cupcakes' && '🧁'}
            {category === 'galletas' && '🍪'}
            {category === 'merengues' && '🍬'}
          </span>
        </div>
        <div className="text-left">
          <h3 className="font-['Cormorant'] text-2xl lg:text-3xl text-foreground">
            {info.title}
          </h3>
          <p className="text-sm text-foreground/60">{info.description}</p>
        </div>
      </div>
      <div className="flex items-center space-x-3">
        <span className="text-sm text-foreground/50 hidden sm:block">
          {visibleCount} producto{visibleCount > 1 ? 's' : ''}
        </span>
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="w-6 h-6 text-foreground/40" />
        </motion.div>
      </div>
    </button>
  );
};

export default CategoryHeader;
