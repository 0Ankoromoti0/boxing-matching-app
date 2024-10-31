// src/App.js
import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebaseConfig";
import Welcome from "./pages/Welcome";
import CreateMatch from "./components/CreateMatch";
import MatchList from "./components/MatchList";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);
  const [showCreateMatch, setShowCreateMatch] = useState(false); // ポップアップ表示用の状態

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);  // ユーザーのログイン状態を監視
    });
    return () => unsubscribe();
  }, []);

  // ポップアップの表示切り替え
  const toggleCreateMatch = () => {
    setShowCreateMatch((prev) => !prev);
  };

  return (
    <div className="App">
      {user ? (
        <>
          {/* 募集一覧 */}
          <MatchList />

          {/* 右下の丸いボタン */}
          <button className="create-match-button" onClick={toggleCreateMatch}>
            +
          </button>

          {/* showCreateMatchがtrueのときのみCreateMatchをポップアップ表示 */}
          {showCreateMatch && (
            <CreateMatch onClose={toggleCreateMatch} />
          )}
        </>
      ) : (
        <Welcome />
      )}
    </div>
  );
}

export default App;
