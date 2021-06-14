export const dateParser = (dateToParse) => {
  let options = {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  let timestamp = Date.parse(dateToParse);
  let date = new Date(timestamp).toLocaleDateString("fr-FR", options);
  return date.toString();
};

export const timestampParser = (time) => {
   let options = {
     hour: "2-digit",
     minute: "2-digit",
     second: "2-digit",
     weekday: "short",
    //  year: "numeric",
     month: "short",
     day: "numeric",
   };
  let date = new Date(time).toLocaleDateString("fr-FR", options)
  return date.toString();
}

export const isEmpty = (value) => {
  // SI VALUE est vide return true 
  return (
    value === undefined ||
    value === null ||
    (typeof value === "object" && Object.keys(value).length === 0) ||
    (typeof value === "string" && value.trim().length === 0)
  );
};

export const isLiked = (likesArray, ip) => {
  let liked = false;
  likesArray.forEach((like) => {
    if (like.ip_user === ip) liked = true;
  })
  return liked
}

export const getYoutubeId = (url) => {
  const regex = /[v]\D(\w+)/;
  const found = url.match(regex);
  return found[1];
}