import Checkbox from "/src/components/ui/checkbox/checkbox";

function CheckboxList({
  selectValues, // массив выбранных значений
  labelComponent,
  options, // массив с объектами для выбора {title: заголовок, value: значение}
  name,
  onChange,
  isGridList,
  onClickLabel = () => {},
}) {
  const handleChange = (value) => {
    const newValue = [...selectValues];
    const indexValue = newValue.indexOf(value);
    if (indexValue !== -1) {
      newValue.splice(indexValue, 1);
    } else {
      newValue.push(value);
    }
    onChange && onChange(newValue);
  };

  return (
    <ul style={{ padding: 0 }} $isGridList={isGridList}>
      {options.map((option, index) => (
        <li style={{ listStyle: "none" }} key={option.value}>
          <Checkbox
            labelComponent={labelComponent}
            selectValues={selectValues}
            isChecked={selectValues.includes(option.value)}
            name={name}
            value={option.value}
            text={option.title}
            onClick={(value) => onClickLabel(value, index)}
            onChange={handleChange}
          />
        </li>
      ))}
    </ul>
  );
}

export default CheckboxList;
