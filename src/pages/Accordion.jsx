import { Accordion } from "components/Accordion";

export const AccordionPage = () => {
  const items = [
    {
      label: "Can I use React on a Project",
      content: "You can use React on any project  you want",
      id: "lwert",
    },
    {
      label: "What is React",
      content: "React is a JS framework for building user interface",
      id: "qwer",
    },
    {
      label: "When was React Created",
      content:
        "React was created in 2010 by facebook as a Js framework. it build on component for building user interface",
      id: "rete",
    },
  ];
  return <Accordion items={items} />;
};

