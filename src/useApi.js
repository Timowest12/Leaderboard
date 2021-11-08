export default function useApi() {
  const baseurl =
    "https://us-central1-js-capstone-backend.cloudfunctions.net/api/";
  const scoreurl = "games/superawesomegame/scores/";
  const outputdiv = document.querySelector(".scores");
  const userinp = document.querySelector(".userinp");
  const scoreinp = document.querySelector(".scoreinp");
  //alert(scoreurl)
  function loaddata() {
      axios.get(baseurl + scoreurl).then(function (response) {
        console.log('hi');
      console.log(response.data);
      console.log(response.status);
      //alert(response.data.result.length)
      outputdiv.innerHTML = "";
      response.data.result.forEach(item => {
        outputdiv.innerHTML +=
          "<li>name:" + item.user + " score:" + item.score + "</li>";
      });
    });
  }
  
   function adduser() {

       console.log(userinp);
    axios
      .post(baseurl + scoreurl, {
        user: userinp.value,
        score: scoreinp.value,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    loaddata();
  } 
  document.querySelector(".submitscore").addEventListener("click", adduser);
  document.querySelector(".refreshbutton").addEventListener("click", loaddata);
  
  loaddata();
}

