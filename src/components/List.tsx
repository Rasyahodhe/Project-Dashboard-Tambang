import { ListType } from "@/interfaces/Interface.Components";
import Link from "next/link";

const List = ({ style, list, stylelist, styletext }: ListType) => {
  return (
    <ul className={style}>
      {list.map((item, index) => (
        <li className={stylelist} key={index}>
          <Link href={`/${item.path}`}>
            <p className={styletext}>{item.name}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default List;
