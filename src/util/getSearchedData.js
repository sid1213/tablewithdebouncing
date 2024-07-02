export const getSearchedData = async (users, search) => {
  if (search === "") {
    return users;
  }
  return users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );
};
