// 1 Отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вивести id,name всіх user в index.html. Окремий блок для кожного user.
// 3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід  на сторінку User-details.html,
//     котра має детальну інфорацію про об'єкт, на який клікнули

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        let userList = document.getElementById('userList');
        for (const user of users) {
            let div = document.createElement('div');
            div.classList.add('smallBlock');
            div.innerText = `${user.id}. ${user.name}`;
            let a = document.createElement('a');
            a.innerText = "See the user details";
            a.href=`User-details.html?users=${user.id}`;
            div.appendChild(a);
            // console.log(`${user.id}`)
            let block = document.getElementsByClassName('block')[0];
            block.append(div);
            userList.append(block);
            // console.log(block);
        }
    })