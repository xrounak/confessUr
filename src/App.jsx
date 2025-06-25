import Sidebar from "./components/sidebar";
import styles from "./app.module.css";
import { useState } from "react";
import Form from "./components/form";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/footer";
import Postlist from "./components/postlist";
import PostListProvider from "./store/post-list-provider";
import Header from "./components/header";

function App() {
  const [selectedTab, setSelectedTab] = useState("home");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <PostListProvider>
        <div className={`${styles.viewpage}`}>
          <Header toggleSidebar={() => setIsSidebarOpen((prev) => !prev)} />
          <Sidebar
            isOpen={isSidebarOpen}
            onClose={() => setIsSidebarOpen(false)}
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
          />
          <div className="vw-100">
            {selectedTab === "create-posts" && <Form submit={setSelectedTab} />}

            <Postlist></Postlist>
            <Footer></Footer>
          </div>
        </div>
      </PostListProvider>
    </>
  );
}

export default App;
