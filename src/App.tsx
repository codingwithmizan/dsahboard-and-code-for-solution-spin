import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Index from "./pages/Index";
import Accounts from "./pages/Accounts";
import LayoutBuilder from "./pages/LayoutBuilder";
import Pages from "./pages/Pages";
import Errors from "./pages/Errors";
import Chat from "./pages/Chat";
import Lists from "./pages/widgets/Lists";
import Statistics from "./pages/widgets/Statistics";
import Charts from "./pages/widgets/Charts";
import Mixed from "./pages/widgets/Mixed";
import Tables from "./pages/widgets/Tables";
import Feeds from "./pages/widgets/Feeds";
import Widgets from "./pages/widgets/index";

const App = () => {
  return (
    <Routes>
      <Route path="" element={<Dashboard />}>
        <Route index element={<Index />} />
        <Route path="layout" element={<LayoutBuilder />} />
        <Route path="pages" element={<Pages />} />
        <Route path="accounts" element={<Accounts />} />
        <Route path="errors" element={<Errors />} />
        <Route path="widgets" element={<Widgets />}>
          <Route index element={<Tables />} />
          <Route path="lists" element={<Lists />} />
          <Route path="statistics" element={<Statistics />} />
          <Route path="charts" element={<Charts />} />
          <Route path="mixed" element={<Mixed />} />
          <Route path="tables" element={<Tables />} />
          <Route path="feeds" element={<Feeds />} />
        </Route>
        <Route path="chat" element={<Chat />} />
      </Route>
    </Routes>
  );
};

export default App;
