import React, { Suspense } from "react";
import { useEffect, useState } from "react";
import { fetchData } from "./common/request";
import "./App.css";
import Loader from "./components/Loader";
const SqlEditor = React.lazy(() => import("./components/SqlEditor"));
const TableWrapper = React.lazy(() => import("./components/TableWrapper"));

function App() {
  const [code, setCode] = useState("");
  const [showData, setShowData] = useState(false);
  const [queries, setQueries] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleClick = () => {
    const values = code.split("\n");
    const currentQuery = values.filter((val) => val != "");
    setQueries(currentQuery);
  };

  useEffect(() => {
    const getData = async (queries) => {
      try {
        const response = await fetchData(queries);
        const fullfilledResponse = response.filter(
          (res) => res.status === "fulfilled"
        );
        const data = fullfilledResponse.map((res) => {
          if (res.status === "fulfilled") {
            return res.value;
          }
        });
        setTableData(data);
        setShowData(true);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        setError(true);
      }
    };

    if (queries.length > 0) {
      setLoading(true);
      setError(false);
      getData(queries);
    }
  }, [queries]);

  const handleChange = (value) => {
    setCode(value);
  };

  return (
    <div>
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <SqlEditor
            code={code}
            handleChange={handleChange}
            handleClick={handleClick}
          />
        </Suspense>
      </div>

      {loading === true && (
        <div className="loader">
          <Loader />
        </div>
      )}

      {showData === true && loading === false && (
        <div>
          {tableData.map((td) => {
            const keys = Object.keys(td.data[0]);
            return <TableWrapper key={keys[0]} tabledata={td} />;
          })}
        </div>
      )}

      {error === true && <div>Something wrong happened..</div>}
    </div>
  );
}

export default App;
