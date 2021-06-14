import { ChatAltIcon, UserCircleIcon } from "@heroicons/react/outline";
import axios from "axios";
import React, { useState } from "react";

const AddComment = ({articleId, getArticle}) => {
  const [pseudo, setPseudo] = useState("");
  const [content, setContent] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
     axios({
       method: "POST",
       url: `api/v1/articles/${articleId}/comment`,
       data: {
         pseudo: pseudo,
         content: content
       },
     })
       .then((res) => {
         getArticle();
         setPseudo("");
         setContent("");
       })
       .catch((err) => console.log(err));
  }
  return (
    <div className="flex mx-auto items-center z-50 justify-center shadow-lg mt-5 mx-8 mb-4 ">
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="w-full max-w-xl bg-white rounded-lg px-4 "
      >
        <div className="flex flex-wrap -mx-3 mb-6">
          <h2 className="px-4 pt-3 pb-2 text-gray-800 text-lg">
            Ajouter un commentaire
          </h2>
          <div className="w-full md:w-full px-3 mb-2 mt-2">
            
            <div className="mt-1 mb-2  w-80 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <UserCircleIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </div>
              <input
                type="text"
                name="Pseudo"
                id="Pseudo"
                value={pseudo}
                onChange={(e) => setPseudo(e.target.value)}
                placeholder="Pseudo"
                className=" focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
              />
            </div>
            <textarea
              id="about"
              name="about"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={3}
              className="max-w-lg shadow-sm block w-full focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border border-gray-300 rounded-md"
            />
          </div>
          <div className="w-full md:w-full flex items-start md:w-full px-3">
            <div className="mr-7 ml-auto">
              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Envoyer
                <ChatAltIcon
                  className="ml-2 -mr-1 h-5 w-5"
                  aria-hidden="true"
                />
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddComment;
