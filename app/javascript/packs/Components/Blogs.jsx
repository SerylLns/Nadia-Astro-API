import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { HeartIcon as LikeIcon } from "@heroicons/react/solid";
import { HeartIcon as UnLikeIcon } from "@heroicons/react/outline";
import { IPcontext } from "./AppContext";
import { dateParser, isLiked } from "../utils";

const Blogs = () => {
  const [contents, setContents] = useState();
  const ipUser = useContext(IPcontext);


  const getArticle = () => {
    axios
      .get(`api/v1/articles`)
      .then((res) => {
        setContents(res.data);
      })
      .catch((err) => console.log(err));
  };
  const likeArticle = (articleId) => {
    axios({
      method: "POST",
      url: `api/v1/articles/${articleId}/like`,
      data: {
        ip_user: ipUser,
      },
    })
      .then((res) => {
        getArticle();
      })
      .catch((err) => console.log(err));
  };
  const unlikeArticle = (articleId) => {
    axios({
      method: "DELETE",
      url: `api/v1/articles/${articleId}/unlike`,
      data: {
        ip_user: ipUser,
      },
    })
      .then((res) => {
        getArticle();
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getArticle();
  }, []);

  return (
    <>
      {contents && (
        <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
          <div className="absolute inset-0">
            <div className="bg-white h-1/3 sm:h-2/3" />
          </div>
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center">
              <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
                From the blog
              </h2>
              <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
                Mettre un joli Header ICI
              </p>
            </div>
            <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
              {Object.keys(contents).map((key) => (
                <div
                  key={contents[key].article.id}
                  className="flex flex-col rounded-lg shadow-lg overflow-hidden"
                >
                  <NavLink to={`/article/${contents[key].article.id}`}>
                    <div className="flex-shrink-0">
                      <img
                        className="h-48 w-full object-cover"
                        src={contents[key].photo}
                        alt=""
                      />
                    </div>
                  </NavLink>
                  <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-indigo-600">
                        {contents[key].article.category}
                      </p>
                      <NavLink to={`/article/${contents[key].article.id}`}>
                        <p className="text-xl text-center font-semibold text-gray-900">
                          {contents[key].article.title}
                        </p>
                      </NavLink>
                      <p className="mt-3 text-base text-gray-500">
                        {contents[key].article.content.slice(0, 200)}...
                      </p>
                    </div>
                    <div className="flex justify-between mt-3 pt-1">
                      <em className="text-sm">
                        {dateParser(contents[key].article.created_at)}
                      </em>
                      <div className="flex justify-end">
                        {isLiked(contents[key].likes, ipUser) ? (
                          <LikeIcon
                            onClick={() =>
                              unlikeArticle(contents[key].article.id)
                            }
                            className="text-red-600  h-7 w-7"
                          ></LikeIcon>
                        ) : (
                          <UnLikeIcon
                            onClick={() =>
                              likeArticle(contents[key].article.id)
                            }
                            className="text-red-600  h-7 w-7"
                          ></UnLikeIcon>
                        )}
                        <em className="ml-1 text-blue-500 text-md">
                          {contents[key].likes.length}
                        </em>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Blogs;
