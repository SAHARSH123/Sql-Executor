import AceEditor from "react-ace";
import "ace-builds/src-min-noconflict/ext-language_tools";
import "ace-builds/src-min-noconflict/mode-mysql";
import "ace-builds/src-noconflict/theme-twilight";
import { useEffect, useState } from "react";
import TableWrapper from "./components/TableWrapper";
import { fetchData } from "./common/request";
import { Audio } from "react-loader-spinner";
import "./App.css";

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
      <div className="app-editor">
        <AceEditor
          id="editor"
          aria-label="editor"
          mode="mysql"
          theme="twilight"
          name="editor"
          fontSize={16}
          minLines={15}
          maxLines={10}
          width="100%"
          showPrintMargin={false}
          showGutter
          placeholder="Write your Query here..."
          setOptions={{
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true,
            enableSnippets: true,
          }}
          value={code}
          onChange={handleChange}
          showLineNumbers
        />
        <button onClick={handleClick}>Run Query</button>
      </div>

      {loading === true && (
        <div className="loader">
          <Audio
            height="80"
            width="80"
            radius="9"
            color="black"
            ariaLabel="loading"
            wrapperStyle
            wrapperClass
          />
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
