import React, {useState} from "react";

type CURDHookReturnType<T> = {
  listState: T[];
  setListState: React.Dispatch<React.SetStateAction<T[]>>;
  addToList: (newData: T) => void;
  updateToList: (modifiedData: T) => void;
  removeFromList: (oldData: T) => void;
  addToListLastItem: (newData: T) => void;
  updateToListLastItem: (modifiedData: T) => void;
};

export default function useCurd<T>(stateType: T[] = []): CURDHookReturnType<T> {
  const [listState, setListState] = useState<T[]>(stateType);

  const addToList = (newData: T) => {
    const item_list = [newData, ...listState];

    setListState(item_list);
  };

  const addToListLastItem = (newData: T) => {
    const item_list = [...listState, newData];

    setListState(item_list);
  };

  const updateToList = (modifiedData: T) => {
    const item_list = listState.filter((item) => (item as any).id !== (modifiedData as any).id);

    setListState([modifiedData, ...item_list]);
  };

  const updateToListLastItem = (modifiedData: T) => {
    const item_list = listState.filter((item) => (item as any).id !== (modifiedData as any).id);

    setListState([...item_list, modifiedData]);
  };

  const removeFromList = (oldData: T) => {
    const item_list = listState.filter((item) => (item as any).id !== (oldData as any).id);

    setListState(item_list);
  };

  return {
    listState,
    setListState,
    addToList,
    updateToList,
    removeFromList,
    addToListLastItem,
    updateToListLastItem,
  };
}
