import React, { useCallback, useEffect, useState } from "react";
import InputForm from "./InputForm";
import Card from "./Card";

const Main = () => {
	const defaultUsername = process.env.REACT_APP_Default_Github_Username;
	const API_ENDPOINT = process.env.REACT_APP_Github_Userinfo_API_Endpoint;
	const [user, setUser] = useState(defaultUsername);
	const [choice, setChoice] = useState(defaultUsername);
	const [error, setError] = useState("");
	const changeUser = (newUser) => {
		setChoice(newUser);
	};

  const fetchUserHandler = useCallback(async () => {
    setError("");
    try {
      const response = await fetch(`${API_ENDPOINT}/${choice}`);
      if (!response.ok) {
        throw new Error();
      }
      const newUser = await response.json();
      setUser(newUser);
    } catch (err) {
      setError("No Github user found!!");
    }
  }, [choice]);

  useEffect(() => {
    fetchUserHandler();
  }, [fetchUserHandler]);

  return (
    <>
      <InputForm changeUser={changeUser} error={error} />
      <Card user={user} />
    </>
  );
};
export default Main;
