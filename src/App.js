import GlobalStyles from "./styles/GlobalStyles";

import { Container, InputGroup, Input, Button } from "./styles";

import { FaSearch } from "react-icons/fa";
import GithubUser from "./components/GithubUser";
import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState({});
  const [search, setSearch] = useState(" ");

  useEffect(() => {
    async function getDataUsers() {
      try {
        const response = await fetch(`https://api.github.com/users/dumoresco`);

        const data = await response.json();
        setUsers(data);
      } catch {
        console.log("erro");
      }
    }
    getDataUsers();
  }, []);

  async function handleSubmit(e) {
    const name = search.trim();
    if (!name) {
      alert("digite um usuario valido");
      return;
    }
    try {
      const response = await fetch(`https://api.github.com/users/${name}`);

      const data = await response.json();

      setUsers(data);
    } catch (e) {
      console.log(e);
    }
    setSearch("");
  }

  return (
    <>
      <GlobalStyles />
      <Container>
        <InputGroup>
          <FaSearch fill="#0078FD" className="icon" />
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Search GitHub username..."
            autoFocus
          />
          <Button onClick={handleSubmit}>Search</Button>
        </InputGroup>
        {users && (
          <>
            <GithubUser
              userImage={users.avatar_url}
              name={users.name}
              username={users.login}
              bio={users.bio}
              repos={users.public_repos}
              followers={users.followers}
              following={users.following}
              city={users.location}
              organization={users.company}
              twitter={users.twitter_username}
              site={users.blog}
            />
          </>
        )}
      </Container>
    </>
  );
}

export default App;
