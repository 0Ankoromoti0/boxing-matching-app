// src/components/MatchList.js
import { useEffect, useState } from "react";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "../firebaseConfig";
import "./MatchList.css";
import avatar from "../assets/icon.webp";


const MatchList = () => {
  const [matches, setMatches] = useState([]);
  const [expandedMatchId, setExpandedMatchId] = useState(null); // 展開状態を管理

  useEffect(() => {
    const q = query(collection(db, "matches"), orderBy("timestamp", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const matchesData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setMatches(matchesData);
    });
    return () => unsubscribe();
  }, []);

  const toggleDetails = (matchId) => {
    setExpandedMatchId((prev) => (prev === matchId ? null : matchId));
  };

  return (
    <div className="match-list">
      {matches.map((match) => (
        <div key={match.id} className="match-card">
          <div className="match-header" onClick={() => toggleDetails(match.id)}>
            <img src={avatar} alt={`${match.name}のアバター`} className="avatar" />
            <div className="match-info">
              <h3 className="match-name">{match.name}</h3>
            </div>
          </div>

          {expandedMatchId === match.id && (
            <div className="match-details">
              <p><strong>身長:</strong> {match.height} cm</p>
              <p><strong>体重:</strong> {match.weight} kg</p>
              <p><strong>場所:</strong> {match.location}</p>
              <p><strong>戦績:</strong> {match.record}</p>
              <button className="join-button">参加申請</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default MatchList;
