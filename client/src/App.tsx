import { useDispatch } from "react-redux";
import Routes from "./router";
import "./styles/styles.scss";
import { AppDispatch } from "./types/dispatch.type";
import { useEffect } from "react";
import { getCategories } from "./actions/category.action";

function App() {

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getCategories());
  }, [])

  return (
    <>
      <div id="app">
        <Routes />
      </div>
    </>
  )
}

export default App
