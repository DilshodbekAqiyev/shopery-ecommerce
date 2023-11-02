import FilterSearchIcon from "../../../public/assets/icons/blog-icons/filter-search-icon";

const BlogSearch = () => {
   return (
      <div className="search flex gap-[8px] item-center mt-[32px] mb-[28px] py-[14px] px-[16px] border ">
         <FilterSearchIcon />
         <input type="text" placeholder="Search..." className=" w-[100%]" />
      </div>
   );
};

export default BlogSearch;
