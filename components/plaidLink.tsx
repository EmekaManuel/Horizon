import React, { useCallback, useEffect, useState } from "react";
import { Button } from "./ui/button";
import {
  PlaidLinkOnSuccess,
  PlaidLinkOptions,
  usePlaidLink,
} from "react-plaid-link";
import { useRouter } from "next/navigation";

const PlaidLink = (props: PlaidLinkProps) => {
  const router = useRouter();
  const [token, setToken] = useState("");
  useEffect(() => {
    const getLinkToken = async () => {
      // const data = await createLinkToken(user);
      // setToken(data?.linkToken);
    };
    getLinkToken();
  }, []);

  const onSuccess = useCallback<PlaidLinkOnSuccess>(
    async (public_token: string) => {
      // await exchangePublicToken({
      //   publicToken: public_token,
      //   user,
      // });
    },

    [props.user]
  );

  const config: PlaidLinkOptions = {
    token,
    onSuccess,
  };

  const { open, ready } = usePlaidLink(config);
  return (
    <>
      {props.variant === "primary" && (
        <Button disabled={!ready} onClick={() => open()}>
          Connect Bank
        </Button>
      )}
      {props.variant === "ghost" && <Button>Link Bank</Button>}
    </>
  );
};

export default PlaidLink;
