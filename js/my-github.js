// Write code here to communicate with Github

// GET request for list of repositories
// More info on how this API is constructed in https://developer.github.com/v3/repos/#list-repositories-for-a-user

const getReposUrl = "https://api.github.com/users/joannaWebDev/repos";

const fetchRepos = async () => {
  const response = await fetch(getReposUrl);
  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }

  const repos = await response.json();
  return repos;
};

fetchRepos()
  .then(repos => {
    console.log(repos);
    repos.map(repo => {
      $("#repos-list").append(`<li><a href=${repo.url}>${repo.name}</a></li>`);
    });
    $("#repos-count").html(`${repos.length}`);
  })
  .catch(error => {
    console.log(error);
  });


