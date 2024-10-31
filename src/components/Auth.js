// src/components/Auth.js
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebaseConfig";
import GoogleLogo from "../assets/google-logo.png";  // Googleロゴ画像をインポート

const Auth = () => {
  const googleProvider = new GoogleAuthProvider();

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      alert("ログイン成功");
    } catch (error) {
      console.error("ログインエラー:", error);
    }
  };

  return (
    <button onClick={signInWithGoogle}>
      <img src={GoogleLogo} alt="Google Logo" />
      Googleでサインイン
    </button>
  );
};

export default Auth;
