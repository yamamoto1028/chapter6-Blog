import { useState } from "react";

export default function InquiryPage() {
  // inputの状態管理
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  // エラー状態の管理→状態によって処理分岐したいのはhandleCheckInput関数の中だけなのでコンポーネント全体でstate管理する必要ないので消し結果だけ戻しておけばJSXの表示分岐に使える
  // const [isError, setIsError] = useState(false);

  // エラーメッセージの管理
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [textError, setTextError] = useState("");

  // 送信ボタン押下でしたいチェック処理-----------------
  const handleCheckInput = () => {
    console.log(`handleCheckInput`);
    let isError = false; //関数内では変数で状態を制御して出力時にsetStateに入れる
    let nameErrMessage = "";
    let emailErrMessage = "";
    let textErrMessage = "";
    // 名前の入力有無チェック　→状態管理
    if (!name) {
      nameErrMessage = "名前は必須です";
      isError = true;
      // 名前の30文字以内チェック
    } else if (name.length > 30) {
      nameErrMessage = "お名前は30文字以内で入力してください";
      isError = true;
    }
    // アドレスの入力有無チェック　→状態管理
    if (!email) {
      emailErrMessage = "メールアドレスは必須です";
      isError = true;

      // アドレスのメール形式チェック
    } else if (!email.match(/.+@.+\..+/)) {
      emailErrMessage = "メールアドレスの形式が正しくありません";
      isError = true;
    }
    // 本文の入力有無チェック　→状態管理
    if (!text) {
      textErrMessage = "本文は必須です";
      isError = true;

      // 本文の500文字以内チェック
    } else if (text.length > 500) {
      textErrMessage = "本文は500文字以内で入力してください";
      isError = true;
    }
    setNameError(nameErrMessage);
    setEmailError(emailErrMessage);
    setTextError(textErrMessage);
    // setIsError(isError);
    console.log(`letのisError：${isError}`);

    return isError;
  };

  const handleClearInput = () => {
    setName("");
    setEmail("");
    setText("");
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    //イベント(e)にも型付けしないと赤字怒られる
    e.preventDefault();
    console.log("handleSubmit Clicked!");
    handleCheckInput(); //入力内容チェックしエラーMSGをセット
    console.log(handleCheckInput());
    if (handleCheckInput()) {
      alert("入力内容に誤りがあります");
      return;
    }

    // 送信処理
    fetch(
      "https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/contacts",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: name, email: email, text: text }), //送信データをオブジェクト形式で渡す
      }
    );
    alert("送信完了しました");
  };
  return (
    <>
      <main className="inquiry-page max-w-[800px] m-auto py-10">
        <h1 className="title font-[700] text-xl">問合わせフォーム</h1>
        <form
          action="https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/contacts"
          method="post"
          className="inquiry-form mt-10"
        >
          <div className="input-name flex justify-between w-[100%] items-center">
            <label className="name-tag w-[240px]">お名前</label>
            <div className="input-box w-full">
              <input
                id="name"
                type="text"
                className="name-box w-full p-4 border border-gray-300 rounded-lg"
                maxLength={30}
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              {nameError && <p className="text-sm text-red-700">{nameError}</p>}
            </div>
          </div>
          <div className="email flex justify-between mt-6 items-center">
            <label className="email-tag w-[240px]">メールアドレス</label>
            <div className="input-box w-full">
              <input
                id="email"
                type="email"
                className="email-box w-full p-4 border border-gray-300 rounded-lg"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              {emailError && (
                <p className="text-sm text-red-700">{emailError}</p>
              )}
            </div>
          </div>
          <div className="text flex justify-between mt-6 items-center">
            <label className="text-tag w-[240px]">本文</label>
            <div className="input-box w-full">
              <textarea
                id="message"
                className="text-box resize-none auto-cols-[8] w-full p-4 border border-gray-300 rounded-lg"
                rows={8}
                maxLength={500}
                value={text}
                onChange={(e) => setText(e.target.value)}
                required
              />
              {textError && <p className="text-sm text-red-700">{textError}</p>}
            </div>
          </div>
          <div className="button-box flex justify-center mt-10">
            <button
              type="submit"
              className="send-button text-white font-bold rounded-lg bg-gray-800 py-2 px-4"
              onClick={handleSubmit}
            >
              送信
            </button>
            <button
              type="reset"
              className="clear-button bg-gray-200 font-bold rounded-lg ml-4 py-2 px-4"
              onClick={handleClearInput}
            >
              クリア
            </button>
          </div>
        </form>
      </main>
    </>
  );
}
