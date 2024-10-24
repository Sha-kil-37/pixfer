const Category = (props) => {
  //

  //
  return (
    <div className="flex-1 min-w-[200px] m-2 p-5 bg-slate-100 rounded-sm text-center shadow-sm hover:scale-105 transition-transform cursor-pointer">
      <div>
        <div className="flex justify-center items-center mt-2">
          <span className="text-dark text-3xl">{props?.data.icon}</span>
        </div>
        <h2 className="font-medium text-lg font-primary text-dark mt-2">{props?.data.name}</h2>
      </div>
    </div>
  );
};

export default Category;
