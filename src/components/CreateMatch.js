// src/components/CreateMatch.js
import { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebaseConfig";
import "./CreateMatch.css";

const CreateMatch = ({ onClose }) => {
  const [name, setName] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [location, setLocation] = useState("");
  const [rules, setRules] = useState("");

  const createMatch = async () => {
    try {
      await addDoc(collection(db, "matches"), {
        name,
        height,
        weight,
        location,
        rules,
        timestamp: serverTimestamp(),
      });
      onClose(); // 投稿後にポップアップを閉じる
    } catch (error) {
      console.error("投稿エラー:", error);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content pop-up">
        <button className="close-button" onClick={onClose}>×</button>
        <h2>対戦相手募集</h2>
        <input
          type="text"
          placeholder="名前"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="身長 (cm)"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
        <input
          type="number"
          placeholder="体重 (kg)"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
        <input
          type="text"
          placeholder="位置情報"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <input
          type="text"
          placeholder="ルール"
          value={rules}
          onChange={(e) => setRules(e.target.value)}
        />
        <button onClick={createMatch}>投稿</button>
      </div>
    </div>
  );
};

export default CreateMatch;
