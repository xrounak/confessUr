import Sidebar from "./components/sidebar";
import styles from "./App.module.css";
import { useState } from "react";
import Form from "./components/form";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/footer";
import Postlist from "./components/postlist";
import PostListProvider, { Postlistcontext } from "./store/post-list-provider";
import Header from "./components/header";
import PostPopup from "./components/postpopup";
import { useContext } from "react";
import { CommentProvider } from "./store/comment-provider";

function App() {
  const [selectedTab, setSelectedTab] = useState("home");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activepostid, activatepostbyid] = useState(6);

  return (
    <>
      <PostListProvider>
        <CommentProvider>
          <div className={`${styles.viewpage}`}>
            <Header toggleSidebar={() => setIsSidebarOpen((prev) => !prev)} />
            <Sidebar
              isOpen={isSidebarOpen}
              onClose={() => setIsSidebarOpen(false)}
              selectedTab={selectedTab}
              setSelectedTab={setSelectedTab}
            />
            <div className="vw-100">
              {selectedTab === "create-posts" && (
                <Form selectedtab={setSelectedTab} />
              )}

              <Postlist onpostclick={(id) => activatepostbyid(id)}></Postlist>
              {activepostid && (
                <PostPopup
                  postId={activepostid}
                  onClose={() => activatepostbyid(null)}
                />
              )}
              <Footer></Footer>
            </div>
          </div>
        </CommentProvider>
      </PostListProvider>
    </>
  );
}

export default App;
