

const Pagination = () => {
  return (
    <div className="flex justify-center items-center my-10 gap-0.5">
      <button className="py-2 px-4 border border-neutral-100 bg-neutral-100 cursor-pointer">1</button>
      <button className="text-neutral-400 py-2 px-4 border hover:bg-neutral-100 border-neutral-100 cursor-pointer">2</button>
      <button className="text-neutral-400 py-2 px-4 border hover:bg-neutral-100 border-neutral-100 cursor-pointer">3</button>
      <button className="text-neutral-400 py-2 px-4 border hover:bg-neutral-100 border-neutral-100 cursor-pointer">4</button>
    </div>
  );
};

export default Pagination;