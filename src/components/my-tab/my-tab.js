import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import React, { useEffect } from "react";
function MyTab() {
  const [current, setCurrent] = React.useState(`bun`);

  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const sectionId = entry.target.getAttribute("id");
        const element = document.getElementById("scroll");
        let flag = null;
        if (element !== null) {
          flag = element.scrollTop;
        }
        if (flag < 30) {
          setCurrent("bun");
        } else {
          if(current === "bun"){
            setCurrent("souse");
          }
          else{
            setCurrent(sectionId);
          }
        }
      }
    });
  };

  useEffect(() => {
    const options = {
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    const sections = document.querySelectorAll("[data-scroll]");
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  });

  const setTabAndScroll = (tab) => {
    setCurrent(tab);
    document.getElementById(`${tab}`).scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div style={{ display: "flex" }}>
      <Tab
        value="bun"
        active={current === "bun"}
        onClick={() => setTabAndScroll("bun")}
      >
        Булки
      </Tab>
      <Tab
        value="souse"
        active={current === "souse"}
        onClick={() => setTabAndScroll("souse")}
      >
        Соусы
      </Tab>
      <Tab
        value="topping"
        active={current === "topping"}
        onClick={() => setTabAndScroll("topping")}
      >
        Начинки
      </Tab>
    </div>
  );
}

export default MyTab;
