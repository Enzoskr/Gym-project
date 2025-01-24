import React from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import Layout from "./components/Layout/Layout.jsx";
import Routes from "./router/Routes.jsx";

function App() {
  return (
    <Layout>
      <Navbar />
      <Routes />
    </Layout>
  );
}

export default App;
