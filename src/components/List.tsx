import { ListType } from "@/interfaces/Interface.Components";
import Link from "next/link";

const List = ({ style, list, stylelist }: ListType) => {
  return (
    <ul className={style}>
      {list.map((item, index) => (
        <li className={stylelist} key={index}>
          <Link href={`/${item.path}`} className="p-2 ">
            <p>{item.name}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default List;
