import axios from "axios";

const url = `${process.env.REACT_APP_BASE_URL}`;

// add user in database
export const addUser = async (data) => {
  const { sub, name, picture } = data;
  try {
    await axios.post(`${url}/users/add`, { sub, name, picture });
  } catch (error) {
    console.log("Error while calling addUser API", error.message);
  }
};

// get users from db
export const getUsers = async () => {
  try {
    let response = await axios.get(`${url}/users`);
    return response.data;
  } catch (error) {
    console.log("Error while calling addUser API", error.message);
  }
};

// add the conversation in the db
export const setConversationInDb = async (data) => {
  try {
    await axios.post(`${url}/conversations/add`, data);
  } catch (error) {
    console.log("Error while calling addUser API", error.message);
  }
};

// get the conversation from the db
export const getConversation = async (data) => {
  try {
    let response = await axios.post(`${url}/conversations/get`, data);
    return response.data;
  } catch (error) {
    console.log("Error while calling getConversation API", error.message);
  }
};

// add message in db
export const newMessage = async (data) => {
  try {
    let response = await axios.post(`${url}/messages/add`, data);
    return response.data;
  } catch (error) {
    console.log("Error while calling newMessage API", error.message);
  }
};

// get messages from db
export const getMessages = async (id) => {
  try {
    let response = await axios.get(`${url}/messages/get/${id}`);
    return response.data;
  } catch (error) {
    console.log("Error while calling getMessages API", error.message);
  }
};

// upload the file in the db
export const uploadFile = async (data) => {
  try {
    return await axios.post(`${url}/files/upload`, data);
  } catch (error) {
    console.log("Error while calling uploadFile API", error.message);
  }
};
