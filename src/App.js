import GlobalStyles from "./styles/GlobalStyles";

import { Container, InputGroup, Input, Button } from "./styles";

import { FaSearch } from "react-icons/fa";
import GithubUser from "./components/GithubUser";
import { useEffect, useState } from "react";

function App() {
  const [githubUser, setGitHubUsers] = useState({});
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function getInitialData() {
      try {
        const response = await fetch(`https://api.github.com/users/dumoresco`);

        const data = await response.json();
        setGitHubUsers(data);
      } catch {
        console.log("erro");
      }
    }
    getInitialData();
  }, []);

  async function handleUserSubmit(e) {
    const githubUsername = search.trim();

    if (!githubUsername) {
      alert("digite um usuario valido");
      return;
    } else {
      try {
        const response = await fetch(
          `https://api.github.com/users/${githubUsername}`
        );

        const data = await response.json();

        setGitHubUsers(data);
        console.log(data);
      } catch (e) {
        console.log(e);
      }
      setSearch(" ");
    }
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
          />
          <Button onClick={handleUserSubmit}>Search</Button>
        </InputGroup>
        {githubUser && (
          <>
            <GithubUser
              userImage={githubUser.avatar_url}
              name={githubUser.name}
              username={githubUser.login}
              bio={githubUser.bio}
              repos={githubUser.public_repos}
              followers={githubUser.followers}
              following={githubUser.following}
              city={githubUser.location}
              organization={githubUser.company}
              twitter={githubUser.twitter_username}
              site={githubUser.blog}
            />
          </>
        )}
      </Container>
    </>
  );
}

export default App;
