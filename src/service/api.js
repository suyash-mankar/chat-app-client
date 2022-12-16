import axios from "axios";

const url = "http://localhost:8000";

export const addUser = async (data) => {
  const { sub, name, picture } = data;
  try {
    await axios.post(`${url}/users/add`, { sub, name, picture });
  } catch (error) {
    console.log("Error while calling addUser API", error.message);
  }
};

export const getUsers = async () => {
  try {
    let response = await axios.get(`${url}/users`);
    return response.data;
  } catch (error) {
    console.log("Error while calling addUser API", error.message);
  }
};

export const setConversation = async (data) => {
  try {
    await axios.post(`${url}/conversations/add`, data);
  } catch (error) {
    console.log("Error while calling addUser API", error.message);
  }
};
