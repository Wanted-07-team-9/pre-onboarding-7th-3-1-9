export const setCacheStorage = async (config, response) => {
  const params = new URLSearchParams(config.params).toString();
  try {
    if (response.data.length !== 0) {
      const cacheStorage = await caches.open(params);
      cacheStorage.put(params, new Response(JSON.stringify({ data: response.data })));
    }
  } catch (err) {
    console.error(err);
  }
};

export const getCacheStorage = async config => {
  try {
    const params = new URLSearchParams(config.params).toString();
    const cacheStorage = await caches.open(params);
    const cachedResponse = await cacheStorage.match(params);
    const cached = await cachedResponse?.json();
    return cached;
  } catch (err) {
    console.error(err);
  }
};
