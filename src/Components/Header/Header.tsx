import LeftContent from "./LeftContent/LeftContent";

export default function Header() {
  return (
    <div className="container-custom  pt-6 px-2 border-b border-b-slate-200 pb-5" >
      <div className="flex  justify-between">
        <div className="flex gap-5 items-center">
          <div className="">
            <img
              className="w-15 sm:w-22"
              src="https://www.technolife.com/image/static_logo_techno_new.svg"
              alt=""
            />
          </div>
          <div className="w-130 sm:flex bg-slate-100 p-2 hidden items-center gap-4  ">
            <svg className="w-8 h-8 text-slate-400">
              <use xlinkHref="#magnifying-glass"></use>
            </svg>
            <input
              className="outline-0 text-xs w-full rounded-xs"
              type="text"
              placeholder="محصول.برند یا دسته مورد نظر را جستوجو کنید"
            />
          </div>
        </div>
        <LeftContent />
      </div>
    </div>
  );
}
