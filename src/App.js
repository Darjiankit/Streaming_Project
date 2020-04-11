import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import StreamList from "../src/Component/Streams/StreamList";
import StreamCreate from "../src/Component/Streams/StreamCreate";
import StreamEdit from "../src/Component/Streams/StreamEdit";
import StreamDelete from "../src/Component/Streams/StreamDelete";
import StreamShow from "../src/Component/Streams/StreamShow";
import Header from "../src/Component/Header";
import history from "../src/history";
function App() {
  return (
    <div className="ui container ">
      <BrowserRouter history={history}>
        <div>
          <Header />
          <Route path="/" exact component={StreamList} />
          <Route path="/streams/new" exact component={StreamCreate} />
          <Route path="/streams/edit" exact component={StreamEdit} />
          <Route path="/streams/delete" exact component={StreamDelete} />
          <Route path="/streams/show" exact component={StreamShow} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
