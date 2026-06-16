import advantage1 from "/src/assets/advantage-1.png";
import advantage2 from "/src/assets/advantage-2.png";
import advantage3 from "/src/assets/advantage-3.png";
import advantage4 from "/src/assets/advantage-4.png";

const AdvantagesList = [
  {
    id: 1,
    title: "Еда намного вкуснее",
    description:
      "Домашняя колбаса из мяса, соли и специй и колбаса из магазина — два настолько разных продукта, что они даже не родственники",
    image: advantage1,
    feature: "Фермерские продукты",
    isNegative: false,
  },
  {
    id: 2,
    title: "Просроченные продукты",
    description:
      "Из-за большого количество товара сотрудники магазинов не успевают своевременно производить замену товара",
    image: advantage3,
    feature: "Магазинные продукты",
    isNegative: true,
  },
  {
    id: 3,
    title: "Натуральные продукты",
    description:
      "Поставляем местные органические продукты выращенные без пестицидов и химических удобрений.",
    image: advantage2,
    feature: "Фермерские продукты",
    isNegative: false,
  },
  {
    id: 4,
    title: "Некачественное мясо",
    description:
      "Мясные полуфабрикаты, в которых содержится чрезмерно много натрия, вредных жиров, консервантов",
    image: advantage4,
    feature: "Магазинные продукты",
    isNegative: true,
  },
];

export default AdvantagesList;
