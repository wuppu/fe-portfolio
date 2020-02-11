import React from "react";
import { useState } from "react";
import "./ItemList.css";

import ItemBlock from "./ItemBlock";

function ItemList() {
  const [listToggle, setListToggle] = useState(true);
  const [blink, setBlink] = useState(false);
  const itemList = [1, 2, 3, 4, 5, 6, 7];

  const clickHandle = () => {
    setBlink(true);
    setTimeout(() => {
      setBlink(false);
      setListToggle(!listToggle);
    }, 500);
  }

  return (
    <div className="item-container">
      <div
        className="list-toggle"
        onClick={() => clickHandle()}
      ></div>
      <div className="item-block-list">
        {itemList.map((item, index) => (
          <ItemBlock
            key={index}
            title={`Item #${item}`}
            inline={listToggle ? true : false}
            right={listToggle ? false : (index % 2 === 0 ? true : false)}
            odd={itemList.length % 2 === 1 ? true : false}
            last={
              itemList.length % 2 === 1
                ? index > itemList.length - 2
                  ? true
                  : false
                : index > itemList.length - 3
                ? true
                : false
            }
            img={"Home_img.jpg"}
            blink={blink}
          />
        ))}
      </div>
    </div>
  );
}

export default ItemList;
