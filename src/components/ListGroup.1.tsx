import { useState } from "react";
import { ListGroupProps } from "./ListGroup";

export function ListGroup(props: ListGroupProps) {
  const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  //Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className='list-group'>
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={index}
            onClick={() => {
              setSelectedIndex(index);
            }}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
