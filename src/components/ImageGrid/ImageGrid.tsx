import data from "../../data/sample.json";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Card from "../Cards/Card";
import React, { useState } from "react";
import "./ImageGrid.css";

interface TabType {
  title: string;
  id: string;
  type: "tabs";
  children: string[];
}

interface CardType {
  title: string;
  id: string;
  hasParent: boolean;
  image: string;
  type: "cards";
  children: CardType[] | TabType[];
}

const ImageGrid = () => {
  const getSectionType = {
    Tabs: (props: TabType[], selected: string) => {
      return (
        <Tabs className="image-grid-tab">
          <TabList>
            {props?.map((p) => (
              <Tab key={p.title}>{p.title}</Tab>
            ))}
          </TabList>
          {props?.map((p, i) => {
            return (
              <TabPanel key={p.title + i}>
                <div className="grid  md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-3">
                  {(p.children || []).map((c, j) => (
                    <Card image={c} key={c + i + j} />
                  ))}
                </div>
              </TabPanel>
            );
          })}
        </Tabs>
      );
    },
    Images: (props: TabType[]) => {
      return (
        <>
          {props?.map((p, i) => {
            return (
              <div className="grid  md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-3">
                {(p.children || []).map((c, j) => (
                  <Card image={c} key={c + i + j} />
                ))}
              </div>
            );
          })}
        </>
      );
    },
    Cards: (
      props: CardType[],
      selected: string,
      setSelected: React.Dispatch<React.SetStateAction<string>>
    ) => {
      const selectedItem = props.find((p) => p.id === selected);

      const renderableItems =
        selected === "Home" ? props : selectedItem?.children;

      return (
        <>
          <div
            className={`grid gap-4 md:grid-cols-2 lg:grid-cols-3 grid-cols-1`}
          >
            {renderableItems?.map((p, i) => {
              if (!(p.id === selected) && !(selected === "Home")) {
                return null;
              }
              return (
                <React.Fragment key={p.title + i}>
                  <Card
                    onClick={() => setSelected(p.id)}
                    title={p.title}
                    image={(p as CardType).image}
                  />
                </React.Fragment>
              );
            })}
          </div>
          {(
            getSectionType[
              selectedItem?.children[0].type as "Tabs" | "Cards"
            ] as any
          )?.(selectedItem?.children, selected, setSelected)}
        </>
      );
    },
  };
  const [selected, setSelected] = useState("Home");
  const breadCrumbItems = selected.split("/");
  const updateSelected = (idx: number) => {
    const newSelected = breadCrumbItems.filter((_, i) => i === idx).join("/");
    setSelected(newSelected);
  };
  return (
    <div>
      <ul className="breadcrumbs">
        {breadCrumbItems.map((item, i) => {
          const currentItem = "/ " + item;
          return (
            <li
              key={item}
              onClick={() =>
                i !== breadCrumbItems.length - 1 && updateSelected(i)
              }
            >
              {currentItem}
            </li>
          );
        })}
      </ul>
      {getSectionType[data.sections.type as "Tabs" | "Cards"](
        data.sections.children as any,
        selected,
        setSelected
      )}
    </div>
  );
};

export default ImageGrid;
