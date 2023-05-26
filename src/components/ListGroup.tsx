import { useState } from "react";

interface Properties {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup(props: Properties) {
  //   items = [];
  const getMessage = () => {
    props.items.length === 0 ? <p>No Items Found</p> : null;
  };

  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{props.heading}</h1>
      {getMessage}
      <ul className="list-group">
        {props.items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            // aria-current={selectedIndex === index ? "true" : "false"}
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              console.log(index + " clicked");
              props.onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
