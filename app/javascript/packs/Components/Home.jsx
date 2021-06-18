import axios from "axios";
import React, { useContext, useState } from "react";
import { HeartIcon as LikeIcon } from "@heroicons/react/solid";
import { HeartIcon as UnLikeIcon } from "@heroicons/react/outline";
import { IPcontext } from "./AppContext";
import { dateParser, isLiked } from "../utils";
import { NavLink } from "react-router-dom";

const Home = () => {
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

  useState(() => {
    getArticle();
  }, []);

  return (
    <div className="py-20 bg-gray-100">
      <h1 className="title-font text-green-600 sm:text-4xl text-3xl mb-4 font-medium text-gray-900 text-center mt-6 mb-12">
        Accueil
      </h1>
      {contents &&
        Object.keys(contents).map((key, index) => {
          return index % 2 === 0 ? (
            // Photo right
            <div key={key}>
              <section className="w-5/6 mr-auto text-gray-600 body-font mb-8">
                <div className="container mx-auto flex px-10 bg-gray-200 md:flex-row flex-col items-center">
                  <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <p className="text-sm font-medium text-indigo-600">
                      {contents[key].article.category}
                    </p>
                    <NavLink to={`/article/${contents[key].article.id}`}>
                      <h1 className="title-font sm:text-4xl text-3xl mb-4 text-center font-medium text-gray-900">
                        {contents[key].article.title}
                        <br />
                      </h1>
                    </NavLink>
                    <p className="mb-2 leading-relaxed">
                      {/* {contents[key].article.content.slice(0, 200)}... */}
                    </p>
                    <div className="flex justify-between w-5/6">
                      <NavLink
                        className="text-green-700 font-medium w-2/3"
                        to={`/article/${contents[key].article.id}`}
                      >
                        Lire la suite
                      </NavLink>
                      <div className="flex w-full justify-end">
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
                    <em className="text-sm mt-3">
                      {dateParser(contents[key].article.created_at)}
                    </em>
                  </div>
                  <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img
                      className="object-cover object-center rounded"
                      alt="hero"
                      src={contents[key].photo}
                    />
                  </div>
                </div>
              </section>
            </div>
          ) : (
            // Photo left
            <div key={key}>
              <section className="w-5/6 ml-auto text-gray-600 body-font mb-8">
                <div className="container mx-auto flex px-10 bg-gray-200 md:flex-row flex-col items-center">
                  <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img
                      className="object-cover object-center rounded"
                      alt="hero"
                      src={contents[key].photo}
                    />
                  </div>
                  <div className="lg:flex-grow md:w-1/2  lg:pr-24 md:pr-16 flex flex-col md:items-end md:text-center mb-16 md:mb-0 items-end text-center">
                    <p className="text-sm font-medium text-indigo-600">
                      {contents[key].article.category}
                    </p>
                    <NavLink to={`/article/${contents[key].article.id}`}>
                      <h1 className="title-font sm:text-4xl text-center text-3xl mb-4 font-medium text-gray-900">
                        {contents[key].article.title}
                        <br />
                      </h1>
                    </NavLink>
                    <p className="mb-2 leading-relaxed">
                      {/* {contents[key].article.content.slice(0, 200)}... */}
                    </p>
                    <div className="flex justify-between w-5/6">
                      <NavLink
                        className="text-green-700 font-medium w-2/3"
                        to={`/article/${contents[key].article.id}`}
                      >
                        Lire la suite
                      </NavLink>
                      <div className="flex w-full justify-end">
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
                    <em className="text-sm mt-3 w-full">
                      {dateParser(contents[key].article.created_at)}
                    </em>
                  </div>
                </div>
              </section>
            </div>
          );
        })}
    </div>
  );
};

export default Home;
