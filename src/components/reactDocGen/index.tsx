import React, { memo } from "react";
import { parse } from "react-docgen";
import "./index.css";

export const Component = memo(function Component() {
  const code = `
/** コンポーネントのドキュメント化 */
export const Component = memo(function Component({test}: {test: string}) {
  return (
    <Tabs>
    <TabList>
      <Tab>Title 1</Tab>
      <Tab>Title 2</Tab>
    </TabList>

    <TabPanel>
      <h2>Any content 1</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
  </Tabs>
  )
});`;
  const documentation = parse(code);
  console.log(documentation);
  return (
    <div>
      {documentation.map((doc, index) => (
        <div key={index}>{JSON.stringify(doc)}</div>
      ))}
    </div>
  );
});
