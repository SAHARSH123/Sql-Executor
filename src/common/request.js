import { File_MAP, Query_MAP } from "./constants";
import Papa from "papaparse";

const getQueryResult = (csvFile, query) => {
  return new Promise((resolve, reject) => {
    try {
      Papa.parse(csvFile, {
        download: true,
        header: true,
        skipEmptyLines: true,
        complete: function (results) {
          setTimeout(() => {
            resolve({ data: results.data, query: query });
          }, 1000);
        },
      });
    } catch (err) {
      reject(err);
    }
  });
};

export const fetchData = async (queries) => {
  const promises = [];
  queries.forEach((query) => {
    const fileName = Query_MAP[query];
    const file = File_MAP[fileName];
    const promise = getQueryResult(file, query);
    promises.push(promise);
  });

  const response = await Promise.allSettled(promises);
  return response;
};
