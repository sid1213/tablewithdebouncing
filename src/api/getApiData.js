const getApiData = async () => {
  const response = await fetch(`${process.env.REACT_APP_BASE_URL}/users`);
  const data = await response.json();
  return data;
};
export default getApiData;
