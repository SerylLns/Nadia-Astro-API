import axios from "axios";
import React, { useEffect, useState } from "react";
import { dateParser } from "../utils";
import AddComment from "./AddComment";

const Article = ({ match }) => {
  const articleId = match.params.id;
  const [content, setContent] = useState();

  const getArticle = () => {
    axios
      .get(`/api/v1/articles/${articleId}`)
      .then((res) => {
        setContent(res.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getArticle();
  }, []);

  return (
    <>
      {content && (
        <div className="relative py-20 bg-white overflow-hidden">
          <div className="hidden z-0 lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
            <div
              className="relative h-full text-lg max-w-prose mx-auto"
              aria-hidden="true"
            >
              <svg
                className="absolute top-12 left-full transform translate-x-32"
                width={404}
                height={384}
                fill="none"
                viewBox="0 0 404 384"
              >
                <defs>
                  <pattern
                    id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className="text-gray-200"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width={404}
                  height={384}
                  fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)"
                />
              </svg>
              <svg
                className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32"
                width={404}
                height={384}
                fill="none"
                viewBox="0 0 404 384"
              >
                <defs>
                  <pattern
                    id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className="text-gray-200"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width={404}
                  height={384}
                  fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
                />
              </svg>
              <svg
                className="absolute bottom-12 left-full transform translate-x-32"
                width={404}
                height={384}
                fill="none"
                viewBox="0 0 404 384"
              >
                <defs>
                  <pattern
                    id="d3eb07ae-5182-43e6-857d-35c643af9034"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className="text-gray-200"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width={404}
                  height={384}
                  fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)"
                />
              </svg>
            </div>
          </div>
          <div className="relative px-4 sm:px-6 lg:px-5">
            <div className="w-full flex justify-around">
              <span className="block text-base text-center text-indigo-600 font-semibold tracking-wide uppercase">
                {content.article.category}
              </span>
              <span className="text-gray-500 text-sm">
                {dateParser(content.article.created_at)}
              </span>
            </div>
            <div className="text-lg max-w-prose mx-auto">
              <h1>
                <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                  {content.article.title}
                </span>
              </h1>
            </div>
            <div className="mt-6 w-3/4 prose-lg text-gray-500 mx-auto">
              <figure>
                <img
                  className="w-full rounded-lg"
                  src={content.photo}
                  alt={"photo" + content.article.title}
                  width={1310}
                  height={873}
                />
              </figure>
              <p>{content.article.content}</p>
            </div>
            {/* COMMENTS */}
            <div className="antialiased mx-auto w-3/4 mt-4 max-w-screen-sm">
              <h3 className="mb-4 text-center text-2xl font-semibold text-gray-900">
                Commentaires
                <hr />
              </h3>
              {content.comments.map((comment) => {
                return (
                  <div key={comment.id} className="space-y-4 ">
                    <div className="flex">
                      <div className="flex-1 bg-gray-50 border rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed">
                        <strong>{comment.pseudo}</strong>{" "}
                        <span className="text-xs text-gray-400">3:34 PM</span>
                        <p className="text-sm">{comment.content}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
              <AddComment articleId={articleId} getArticle={getArticle} />
            </div>
            {/* END COMMENTS */}
          </div>
        </div>
      )}
    </>
  );
};

export default Article;
