import React, { useContext } from "react";
import { Box, styled, Typography } from "@mui/material";
import { AccountContext } from "../../context/AccountProvider";

const ImageContainer = styled(Box)`
  display: flex;
  justify-content: center;
`;
const Image = styled("img")({
  width: 200,
  height: 200,
  borderRadius: "50%",
  padding: "25px 0",
});

const BoxWrapper = styled(Box)`
  padding: 12px 30px 2px;

  & :first-child {
    color: #008069;
    font-weight: 200;
  }

  & :last-child {
    margin: 14px 0;
    color: #d1d7db;
  }
`;

const DescriptionContainer = styled(Box)`
  padding: 15px 20px 28px 30px;

  & > p {
    font-size: 13px;
    color: #8696a0;
  }
`;

export default function Profile() {
  const { account } = useContext(AccountContext);

  return (
    <>
      <ImageContainer>
        <Image src={account.picture} alt="profile-pic" />
      </ImageContainer>
      <BoxWrapper>
        <Typography> Your name</Typography>
        <Typography>{account.name}</Typography>
      </BoxWrapper>
      <DescriptionContainer>
        <Typography>
          This is not your username or pin. This name will be visible to your
          WhatsApp contacts.
        </Typography>
      </DescriptionContainer>
      <BoxWrapper>
        <Typography>About</Typography>
        <Typography>
          Don't become a philosopher before you become rich
        </Typography>
      </BoxWrapper>
    </>
  );
}
