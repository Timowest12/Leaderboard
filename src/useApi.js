export default function useApi() {
  const baseurl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';
  const scoreurl = 'games/superawesomegame/scores/';
  const outputdiv = document.querySelector('.scores');
  const userinp = document.querySelector('.userinp');
  const scoreinp = document.querySelector('.scoreinp');
  function loaddata() {
    axios.get(baseurl + scoreurl).then((response) => {// eslint-disable-line
      outputdiv.innerHTML = '';
      response.data.result.forEach((item) => {
        outputdiv.innerHTML
          += `<li>name:${item.user} score:${item.score}</li>`;
      });
    });
  }

  function adduser() {
    console.log(userinp);
    axios// eslint-disable-line
      .post(baseurl + scoreurl, {
        user: userinp.value,
        score: scoreinp.value,
      })
      .then((response) => {
        console.log(response);
        loaddata()
      })
      .catch((error) => {
        console.log(error);
      });
  }
  document.querySelector('.submitscore').addEventListener('click', adduser);
  document.querySelector('.refreshbutton').addEventListener('click', loaddata);

  loaddata();
}
