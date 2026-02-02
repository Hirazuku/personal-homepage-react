import axios from "axios";

export const githubAPIBaseURL = "https://api.github.com";
export const githubUsername = "mkowalczyk-dev";

export const getRepositories = (username) => {

  return (
    axios.get(`${githubAPIBaseURL}/users/${username}/repos`)
  ).then((response) => {
    const addOGImage = (repo) => {

      return {
        ...repo,
        custom_og_image: `https://raw.githubusercontent.com/${repo.full_name}/main/public/share.png`
      };
    };

    return response.data.filter(repo => repo.name.toLowerCase() !== username.toLowerCase()).map(addOGImage);
  });
};