import React, { useEffect } from "react";
import { Box, InputBase, styled } from "@mui/material";
import { EmojiEmotionsOutlined, AttachFile, Mic, UploadFile } from "@mui/icons-material";
import { uploadFile } from "../../../service/api";

const Container = styled(Box)`
  height: 65px;
  background: #202c33;
  display: flex;
  width: 100%;
  align-items: center;
  padding: 0 15px;

  & > * {
    margin: 5px;
    color: #8696a0;
  }
`;

const Search = styled(Box)`
  background-color: #2a3942;
  border-radius: 6px;
  width: calc(94% - 100px);
`;

const InputField = styled(InputBase)`
  width: 100%;
  padding: 5px;
  padding-left: 25px;
  font-size: 16px;
  color: #d1d7db;
  font-family: inherit;
`;

export default function Footer({
  sendText,
  messageText,
  setMessageText,
  file,
  setFile,
  setFileUrl
}) {


  useEffect(() => {
    const setFile = async () => {
      if(file) {
        const data = new FormData();
        data.append('name', file.name);
        data.append('file', file);

        let response = await uploadFile(data);
        setFileUrl(response.data);
      }
    }
    setFile();
  }, [file])


  const onFileChange = (e) => {
    setFile(e.target.files[0]);
    setMessageText(e.target.files[0].name);
  };

  return (
    <Container>
      <EmojiEmotionsOutlined
        style={{ fontSize: "1.7rem", cursor: "pointer" }}
      />
      <label htmlFor="fileInput">
        <AttachFile
          style={{
            fontSize: "1.7rem",
            transform: "rotate(40deg)",
            cursor: "pointer",
          }}
        />
      </label>
      <input
        type="file"
        id="fileInput"
        onChange={(e) => onFileChange(e)}
        style={{ display: "none" }}
      />
      <Search>
        <InputField
          placeholder="Type a message"
          onChange={(e) => setMessageText(e.target.value)}
          onKeyDown={(e) => sendText(e)}
          value={messageText}
        />
      </Search>
      <Mic style={{ fontSize: "1.7rem", cursor: "pointer" }} />
    </Container>
  );
}
