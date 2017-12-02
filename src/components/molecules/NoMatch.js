import React from "react";
//Components
import { Section, Placeholder } from "../molecules/index";

const NoMatch = () => {
  return (
    <Section noTitle>
      <div className="text-center">
        <Placeholder
          msg="404 - Page not found!"
          iconSize={32}
          iconName="fa-file-o"
          noborder
        />
      </div>
    </Section>
  );
};

export default NoMatch;
