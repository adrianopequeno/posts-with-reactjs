export const loadPosts = async () => {
  const urlPosts = "https://jsonplaceholder.typicode.com/posts";
  const urlPhotos = "https://picsum.photos/v2/list?page=2&limit=100";
  const postsResponse = await fetch(urlPosts);
  const photosResponse = await fetch(urlPhotos);

  const [posts, photos] = await Promise.all([postsResponse, photosResponse]);

  const postsJson = await posts.json();
  const photosJson = await photos.json();

  // função de ziper
  const postsAndPhotos = postsJson.map((post, index) => {
    return { ...post, cover: photosJson[index].download_url };
  });

  return postsAndPhotos;
};
