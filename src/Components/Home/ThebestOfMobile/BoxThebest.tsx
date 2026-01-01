
interface propsItem {
    brand: string,
    phones: [],
    id: string,
    image :string
}

interface IBoxThebestProps {
    item: propsItem
}

function BoxThebest({ item }: IBoxThebestProps) {
    console.log(item);

    return (
        <div className="flex flex-col gap-2 items-center">
            <img className="w-46 h-46 " src={item.image} alt="" />
            <span className="text-sm">{item.brand}</span>
        </div>
    )
}

export default BoxThebest