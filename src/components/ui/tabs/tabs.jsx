import { useState } from "react";
import { TabButton, Header, Content, TabListItem } from "./styles";

function Tabs({ tabsList = [], maxContentHeiht }) {
  const [selectIndex, setSelectIndex] = useState(0);

  return (
    <div>
      <Header>
        {tabsList.map((tab, index) => (
          <TabListItem key={`tab${index * 10}`}>
            <TabButton
              $isSelect={selectIndex === index}
              onClick={() => {
                if (selectIndex !== index) {
                  setSelectIndex(index);
                }
              }}
              disabled={selectIndex === index}
            >
              {tab.title}
            </TabButton>
          </TabListItem>
        ))}
      </Header>
      <Content $maxContentHeiht={maxContentHeiht}>
        {tabsList[selectIndex].content}
      </Content>
    </div>
  );
}

export default Tabs;
