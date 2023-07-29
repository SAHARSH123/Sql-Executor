import React, { useCallback, useMemo, memo } from "react";
import Table from "./Table";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

import "react-accessible-accordion/dist/fancy-example.css";

const TableWrapper = ({ tabledata }) => {
  const getHeaderData = useCallback((data) => {
    const columns = [];
    const row = data?.[0] || {};
    for (let key in row) {
      columns.push({ Header: key, accessor: key });
    }
    return columns;
  }, []);

  const columns = useMemo(() => {
    return getHeaderData(tabledata.data);
  }, []);

  //   const columns = useMemo(
  //     () => [
  //       {
  //         // first group - TV Show
  //         Header: "TV Show",
  //         // First group columns
  //         columns: [
  //           {
  //             Header: "Name",
  //             accessor: "show.name",
  //           },
  //           {
  //             Header: "Type",
  //             accessor: "show.type",
  //           },
  //         ],
  //       },
  //       {
  //         // Second group - Details
  //         Header: "Details",
  //         // Second group columns
  //         columns: [
  //           {
  //             Header: "Language",
  //             accessor: "show.language",
  //           },
  //           {
  //             Header: "Genre(s)",
  //             accessor: "show.genres",
  //           },
  //           {
  //             Header: "Runtime",
  //             accessor: "show.runtime",
  //           },
  //           {
  //             Header: "Status",
  //             accessor: "show.status",
  //           },
  //         ],
  //       },
  //     ],
  //     []
  //   );

  return (
    <div>
      <Accordion allowZeroExpanded={true}>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>{tabledata.query}</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <Table columns={columns} data={tabledata.data} />
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default memo(TableWrapper);
