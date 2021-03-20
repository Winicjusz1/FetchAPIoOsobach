
import './index.css';

const getUsers = (e) => {
  e.preventDefault();/*hamuje ponowne automatyczne odświeżanie strony tj. przechwycenie zdarzenia któego nie chcemy aby  zachodziło z automatu  - a tak dzieje się przy submicie !!! */

  const usersNumber = document.querySelector('[name = "users-number"]').value; /* to jest odwołanie się do pola poprzez name a nie poprzez class !!! i odrazu uchwycenie wartości tego pola i odwołanie się do długiej nazwy z myślnikiem, odwołanie sie do tego elemenyu nie przez class a przez name !!!!!!!!!!!! */

  const usersGender = document.querySelector('[name = "gender"]').value;
  const url = `https://randomuser.me/api/?results=${usersNumber}&gender=${usersGender === "both" ? "male,female" : usersGender}`; /* ==>  tojest B.WAZNE zdanie z operatorem warunkowym trójargumentowym !!!!!!!!!!!!!!!!!!!!!!!!! TO jest prawidłowo skonstruowanh reqest,  endpoint i  teraz trzeba go wyświetlić czyli coś z tymi uzyskanymi danymi zrobić i teraz trzeba stworzyć funkcje która pozwoli namwyświetlić w/w dane */


  fetch(url) //obietnica - oczekujący (pending)

    .then(response => {
      if (response.status !== 200) {
        throw Error("To nie jest odpowedź 200")
      } else {
        return response.json() /*Fetch API = json() z body wyodrębnia json i zmienia tj. parsuje na obiekt JS */

      }
    })
    .then(json => showUsers(json.results)) /* tu do funkcji showUsers przekazujemy tylko właściowośc results z json tj. z już obiektu z 17 linijki i wyodrędniamy z niego w/w results zawierającą tablicę z naszymi danymi,  catch wykonuje catch gdy rozstrzygnięcie - odrzucona */
    .catch(err => console.log(err))
}

const showUsers = (users) => {
  const resultArea = document.querySelector('.user-list');
  resultArea.textContent = "";
  users.forEach(user => {
    const item = document.createElement('div');/* tu mały div dla każdego użytkownika o classie*/

    item.className = 'user';
    /* poniżej wewnątrz napisu w divie user jest kolejny div o class="user__name" w którym umieszczamy dane co do imienia nazwiska i title  - to wszysto pobrane z w/w tablicy i w niej określone, a poniżj jako odrębny byt jescz obrazek img też z tablicy z właściwościpictur */
    item.innerHTML = `
    <div class="user__name">${user.name.title.toUpperCase()} ${user.name.first.toUpperCase()} ${user.name.last.toUpperCase()}</div>
    <img class="user__image" src=${user.picture.medium}>`
    resultArea.appendChild(item); /* dodane itema do diva w HTML resultArea*/
  })
}
document.querySelector('.generator').addEventListener('submit', getUsers);




/*function(res) {return res.json;} to jest to samo co (res=> res.json()) !!!!!!!!!!! */



