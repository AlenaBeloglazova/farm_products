import VisuallyHiddenInput from "./styles";


// чекбокс
function Checkbox({
  onClick,
  labelComponent, // Компонент для отображения label
  isChecked, // выбрано ли значение
  name, // имя
  value, // значение
  text, // текст элемента
  onChange, // событие при изменении
  ...props
}) {
  const LabelComponent = labelComponent;

  return (
    <label>
      <VisuallyHiddenInput
        value={value}
        checked={isChecked}
        name={name}
        onChange={() => onChange(value)}
        {...props}
        type="checkbox"
      />
      <LabelComponent onClick={() => onClick(value)} $isChecked={isChecked}>
        {text}
      </LabelComponent>
    </label>
  );
}

export default Checkbox;
