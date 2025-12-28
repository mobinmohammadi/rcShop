import LeftContent from "./LeftContent/LeftContent";

export default function Header() {
  return (
    <div className="container-custom pt-6">
      <div className="flex  justify-between">
        <div className="flex gap-5 items-center">
          <div className="">
            <img
              className="w-22"
              src="https://www.technolife.com/image/static_logo_techno_new.svg"
              alt=""
            />
          </div>
          <div className="w-130 bg-slate-100 p-2 flex items-center gap-4  ">
            <svg className="w-10 h-10 text-slate-400">
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
