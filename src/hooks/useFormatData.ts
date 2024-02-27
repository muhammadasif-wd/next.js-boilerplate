export default function useFormatData(data = [], refValue = "", refLabel = ""): any {
  let dropdown_list: any = [];

  if (Array?.isArray(refLabel)) {
    data?.map((item) => {
      let Item = {value: 0, label: ""};
      let labelText = "";

      Item.value = item[refValue];
      refLabel?.map((label) => {
        if (Array?.isArray(label)) {
          let nestedLabelText = "";

          label?.map((nestedLabel) => {
            nestedLabelText =
              nestedLabelText + `${item[nestedLabel] != null ? item[nestedLabel] : ""} `;
          });
          labelText = labelText + `(${nestedLabelText})`;
        } else {
          labelText = labelText + `${item[label] != null ? item[label] : ""} `;
        }
      });
      Item.label = labelText;
      dropdown_list.push(Item);
    });
  } else {
    data?.map((item) => {
      let Item = {value: 0, label: ""};

      Item.value = item[refValue];
      Item.label = item[refLabel];
      dropdown_list.push(Item);
    });
  }

  return dropdown_list;
}
