const users = {}
for (let i = 1; i < 10; i++) {
    let name = prompt('Введите ваше имя');
    let age = prompt('Введите ваш возраст')
    users[i]={
        name: name,
        age:age,
    }    
}
for(const key in users){
    console.log('Пользователь '+ key);
    for(const NewKey in users[key]){
        console.log(NewKey == 'name' ? 'Ваше имя ' + users[key][NewKey] : 'Ваш возраст ' + users[key][NewKey] );
    }
}
console.log(users);