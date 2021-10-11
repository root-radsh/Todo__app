import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onLoadColor } from "../../actions/colorAction";
import { onAddList } from "../../actions/todoListsActions";

import { Input } from "../../Styles";
import {
  AddListWrapper,
  AddLists,
  AddListItem,
  AddListPopup,
  Colors,
  Color,
  AddButton,
} from "./AddListStyles";

export const AddList = () => {
  const [toglePopup, setToglePopup] = useState(false);
  const [listName, setListName] = useState("");
  const [selectedColor, setSelectedColor] = useState(null);

  const dispatch = useDispatch();
  let colors = useSelector((store) => store.colors);

  useEffect(() => {
    dispatch(onLoadColor());
  }, []);

  const createList = () => {
    if (!listName) {
      alert("Название списка не должно быть пустым");
      setListName("");
      return;
    }
    const definiteColor = colors.filter((color) => color.id === selectedColor);
    const newList = {
      name: listName,
      color: definiteColor[0],
    };
    dispatch(onAddList(newList));
    setListName("");
    setToglePopup(false);
    setSelectedColor(null);
  };

  const closePopup = () => {
    setToglePopup(false);
    setListName("");
  };

  return (
    <AddListWrapper>
      <AddLists>
        <AddListItem onClick={() => setToglePopup(true)}>
          <svg
            width="10"
            height="10"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 1V15"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M1 8H15"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <h2>Добавить список</h2>
        </AddListItem>
      </AddLists>
      {toglePopup && (
        <AddListPopup>
          <img onClick={() => closePopup()} src="/img/close.svg" alt="Close" />
          <Input
            value={listName}
            onChange={(e) => setListName(e.target.value)}
            type="text"
            placeholder="Название списка"
          />
          <Colors>
            {colors.map((item) => {
              return (
                <Color
                  onClick={() => setSelectedColor(item.id)}
                  key={item.id}
                  color={item.hex}
                  style={
                    item.id === selectedColor
                      ? { border: "2px solid rgb(145, 145, 145)" }
                      : { border: "none" }
                  }
                />
              );
            })}
          </Colors>
          <AddButton onClick={createList}>Добавить</AddButton>
        </AddListPopup>
      )}
    </AddListWrapper>
  );
};
