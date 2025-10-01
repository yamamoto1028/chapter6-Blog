import { useParams } from "react-router-dom";
import { posts } from "../data/posts";
import parse from "html-react-parser";

export default function ArticleDetail() {
  const detailData = posts; //dataを定義
  const paramId = useParams(); //URLのパラメータのIDを取得
  //URLのパラメータIDとdataのIDが一致するオブジェクトを取得
  const displayData = detailData.find((obj) => obj.id === Number(paramId.id));
  if (!displayData) {
    return <div className="undefinedArticle">記事がありません</div>; //parseの使用にあたりundefinedの場合のハンドリング記載
  } else
    return (
      <>
        <article className="page-wrapper max-w-[800px] mx-[auto] my-[40px] p-[1rem]">
          <div className="image-container w-768px h-384px">
            <img
              src={displayData.thumbnailUrl}
              alt="記事の画像"
              className="article-image w-[100%] h-[100%]"
            />
          </div>
          <div className="post-container p-[1rem]">
            <div className="post-info flex justify-between">
              <div className="post-date text-[#888] text-[0.8rem]">
                {displayData.createdAt
                  .slice(0, 10)
                  .split("-")
                  .map((n) => Number(n))
                  .join("/")}
              </div>
              <div className="lang-box flex flex-wrap">
                {displayData?.categories.map((category) => (
                  <div className="post-lang text-[#06c] text-[0.8rem] border-1 border-[#06c] rounded-[0.2rem] mr-[0.5rem] px-[0.4rem] py-[0.2rem]">
                    {category}
                  </div>
                ))}
              </div>
            </div>
            <h1 className="article-title text-[1.5rem] mt-[0.5rem] mb-[1rem]">
              {displayData.title}
            </h1>
            <div className="text leading-[1.5] ">
              {/* contentの中をHTMLとしてレンダリング */}
              {parse(displayData.content)}
            </div>
          </div>
        </article>
      </>
    );
}
