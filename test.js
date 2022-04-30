// // //let item1 =5
// // console.log(item1)
// // //let item2 =3
// // console.log(item2)
// // //let item3 = item1+item2
// // console.log(item3) 
// // //let item4= "Yolochka"
// // console.log(item4) 
// // console.log(item3+item4)
// // console.log(item3*item4)
// // //let item5 = item3
// // //let item6=15
// // //let item6_type=typeof item6
// //  console.log("item6 == ", item6 , "item6_type == ", item6_type )
// // //item7="item6"
// // //let item7_type = typeof item7
// // console.log("item7 == ", item7 , "item7_type == ", item7_type )

// // const check_age = function (age_1){
// //     age_1=Number(age_1)
// //     if (typeof(age_1) == 'number'){
// //         if (age_1 < 18) {
// //             console.log(`You don’t have access cause your age is ${age_1}. It’s less then.`)
// //         }  
        
// //         else if (age_1 >= 18 && age_1 < 60){
// //             console.log('Welcome !')
// //         }
        
// //         else if (age_1 > 60){
// //             console.log('Keep calm and look Culture channel')
// //         }
        
// //         else {
// //             console.log('Technical work')
// //         }   
// //     }
// //     else {
// //         console.log('Not a number')
// //     }
      
// // }
// // check_age(17)
// // check_age(18)
// // check_age(61)
// // check_age('2 ')

// // let age=prompt("Enter the value")
// // check_age(age)
// // let i=0
// // while(i<40){
// //     console.log(i ,"holodno")
// //     i++
// //     if(i==40){ console.log(i,"ZHarko vurybai")}
// // }
// // let names= ["Kiril","Vadim"]
// // for(let i in names){
// //     console.log(names[i])
// // }



// //1. Написать скриптик, который сосчитает и выведет результат от возведения 2 в степень 10, начиная со степени 1


// // let stepen=1
// // let chislo=2 
// // while (stepen<=10){
// //     console.log(chislo ** stepen) 
// //     stepen++
// //     }

// // 1*. Преобразовать 1 задачу в функцию, принимающую на вход степень, в которую будет возводиться число 2
// // let chislo=2
// // let stepen
// // const check_stepen =function(stepen){
// //     let i=chislo**stepen
// //      console.log(i)

// // }
// // check_stepen(5)


// // 

// // 2*. Преобразовать 2 задачу в функцию, принимающую на вход строку, которая и будет выводиться в консоль (как в условии смайлик), а также количество строк для вывода 
// // e.g. function printSmile(stroka, numberOfRows)
// // let stroka=" "
// // let numberOfRows=0
// // const printSmile = function (stroka,numberOfRows){
        
// //         for(let n=-1; n<numberOfRows;n++){
// //         console.log(stroka)
// //         n+=n
// //         }

// // }
// // printSmile("!",3)
 
// //2. Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось :), во второй :):) и так далее
// // let p
// // let n=":)"
// // for(let i=1; i<6;i++){
  
// //     p+=n
// //     console.log(p)

// // }

// // let isPalindrom=function(word){
// //     if (word.toLowerCase()== word.toLowerCase().split('').reverse().join('')){
// //         console.log("Its a Palindrom")
// //     }else{   
// //         console.log("Its a not Palindrom")
// //     }
// // }
// // isPalindrom("Abbbba")



// // //Task 1.
// const users = [
//     {
//         firstName: 'John',
//         lastName: 'Caper',
//         phone: '7436676737634',
//         registrationDate: '12.10.2021'
//     },
//     {
//         firstName: 'Clark',
//         lastName: 'Kent',
//         phone: '4346676737634',
//         registrationDate: '16.09.2021'
//     },
//     {
//         firstName: 'Tony',
//         lastName: 'Stark',
//         phone: '7436698337634',
//         registrationDate: '11.10.2021'
//     },
//     {
//         firstName: 'Bruce',
//         lastName: 'Wayne',
//         phone: '1111176737634',
//         registrationDate: '09.10.2021'
//     },
//     {
//         firstName: 'Star',
//         lastName: 'Lord',
//         phone: '7439374737634',
//         registrationDate: '10.10.2021'
//     },
//     {
//         firstName: 'Kate',
//         lastName: 'Bishop',
//         phone: '7436693647634',
//         registrationDate: '11.10.2021'
//     },
//     {
//         firstName: 'Jerry',
//         lastName: 'James',
//         phone: '7409048737634',
//         registrationDate: '10.10.2021'
//     },
//     {
//         firstName: 'Jeremy',
//         lastName: 'Clarkson',
//         phone: '743667600289334',
//         registrationDate: '16.10.2020'
//     },
//     {
//         firstName: 'Robert',
//         lastName: 'Patrik',
//         phone: '7436676730093',
//         registrationDate: '10.10.2020'
//     },
//     {
//         firstName: 'Jonny',
//         lastName: 'Sins',
//         phone: '74923982737634',
//         registrationDate: '01.01.2021'
//     },
//     {
//         firstName: 'Andrew',
//         lastName: 'Garfield',
//         phone: '743667988344',
//         registrationDate: '09.10.2019'
//     },
//     {
//         firstName: 'Jane',
//         lastName: 'Foster',
//         phone: '74368783427634',
//         registrationDate: '09.10.2019'
//     },
//     {
//         firstName: 'Rick',
//         lastName: 'Smith',
//         phone: '700000037634',
//         registrationDate: '12.10.2021'
//     },
// ];
// let iii=users.filter(function(e){
//     return e.lastName=='09.10.2021'|| e.registrationDate=='10.10.2021'
// });
// console.log(iii)
// // Task 2*
// let people = [{
//     "name": "Leanne Graham",
//     "username": "Bret",
//     "email": "Sincere@april.biz",
//     "address": {
//         "street": "Kulas Light",
//         "suite": "Apt. 556",
//         "city": "Gwenborough",
//         "zipcode": "92998-3874",
//         "geo": {
//             "lat": "-37.3159",
//             "lng": "81.1496"
//         }
//     },
//     "phone": "1-770-736-8031 x56442",
//     "website": "hildegard.org",
//     "company": {
//         "name": "Romaguera-Crona",
//         "catchPhrase": "Multi-layered client-server neural-net",
//         "bs": "harness real-time e-markets"
//     }
// },
// {
//     "name": "Clementine Bauch",
//     "username": "Samantha",
//     "email": "Nathan@yesenia.net",
//     "address": {
//         "street": "Douglas Extension",
//         "suite": "Suite 847",
//         "city": "McKenziehaven",
//         "zipcode": "59590-4157",
//         "geo": {
//             "lat": "-68.6102",
//             "lng": "-47.0653"
//         }
//     },
//     "phone": "1-463-123-4447",
//     "website": "ramiro.info",
//     "company": {
//         "name": "Romaguera-Jacobson",
//         "catchPhrase": "Face to face bifurcated interface",
//         "bs": "e-enable strategic applications"
//     }
// },
// {
//     "name": "Ervin Howell",
//     "username": "Antonette",
//     "email": "Shanna@melissa.tv",
//     "address": {
//         "street": "Victor Plains",
//         "suite": "Suite 879",
//         "city": "Wisokyburgh",
//         "zipcode": "90566-7771",
//         "geo": {
//             "lat": "-43.9509",
//             "lng": "-34.4618"
//         }
//     },
//     "phone": "010-692-6593 x09125",
//     "website": "anastasia.net",
//     "company": {
//         "name": "Deckow-Crist",
//         "catchPhrase": "Proactive didactic contingency",
//         "bs": "synergize scalable supply-chains"
//     }
// },
// {
//     "name": "Clementine Bauch",
//     "username": "Samantha",
//     "email": "Nathan@yesenia.net",
//     "address": {
//         "street": "Douglas Extension",
//         "suite": "Suite 847",
//         "city": "McKenziehaven",
//         "zipcode": "59590-4157",
//         "geo": {
//             "lat": "-68.6102",
//             "lng": "-47.0653"
//         }
//     },
//     "phone": "1-463-123-4447",
//     "website": "ramiro.info",
//     "company": {
//         "name": "Romaguera-Jacobson",
//         "catchPhrase": "Face to face bifurcated interface",
//         "bs": "e-enable strategic applications"
//     }
// },
// {
//     "name": "Patricia Lebsack",
//     "username": "Karianne",
//     "email": "Julianne.OConner@kory.org",
//     "address": {
//         "street": "Hoeger Mall",
//         "suite": "Apt. 692",
//         "city": "South Elvis",
//         "zipcode": "53919-4257",
//         "geo": {
//             "lat": "29.4572",
//             "lng": "-164.2990"
//         }
//     },
//     "phone": "493-170-9623 x156",
//     "website": "kale.biz",
//     "company": {
//         "name": "Robel-Corkery",
//         "catchPhrase": "Multi-tiered zero tolerance productivity",
//         "bs": "transition cutting-edge web services"
//     }
// },
// {
//     "name": "Chelsey Dietrich",
//     "username": "Kamren",
//     "email": "Lucio_Hettinger@annie.ca",
//     "address": {
//         "street": "Skiles Walks",
//         "suite": "Suite 351",
//         "city": "Roscoeview",
//         "zipcode": "33263",
//         "geo": {
//             "lat": "-31.8129",
//             "lng": "62.5342"
//         }
//     },
//     "phone": "(254)954-1289",
//     "website": "demarco.info",
//     "company": {
//         "name": "Keebler LLC",
//         "catchPhrase": "User-centric fault-tolerant solution",
//         "bs": "revolutionize end-to-end systems"
//     }
// },
// {
//     "name": "Clementine Bauch",
//     "username": "Samantha",
//     "email": "Nathan@yesenia.net",
//     "address": {
//         "street": "Douglas Extension",
//         "suite": "Suite 847",
//         "city": "McKenziehaven",
//         "zipcode": "59590-4157",
//         "geo": {
//             "lat": "-68.6102",
//             "lng": "-47.0653"
//         }
//     },
//     "phone": "1-463-123-4447",
//     "website": "ramiro.info",
//     "company": {
//         "name": "Romaguera-Jacobson",
//         "catchPhrase": "Face to face bifurcated interface",
//         "bs": "e-enable strategic applications"
//     }
// },
// {
//     "name": "Mrs. Dennis Schulist",
//     "username": "Leopoldo_Corkery",
//     "email": "Karley_Dach@jasper.info",
//     "address": {
//         "street": "Norberto Crossing",
//         "suite": "Apt. 950",
//         "city": "South Christy",
//         "zipcode": "23505-1337",
//         "geo": {
//             "lat": "-71.4197",
//             "lng": "71.7478"
//         }
//     },
//     "phone": "1-477-935-8478 x6430",
//     "website": "ola.org",
//     "company": {
//         "name": "Considine-Lockman",
//         "catchPhrase": "Synchronised bottom-line interface",
//         "bs": "e-enable innovative applications"
//     }
// },
// {
//     "name": "Kurtis Weissnat",
//     "username": "Elwyn.Skiles",
//     "email": "Telly.Hoeger@billy.biz",
//     "address": {
//         "street": "Rex Trail",
//         "suite": "Suite 280",
//         "city": "Howemouth",
//         "zipcode": "58804-1099",
//         "geo": {
//             "lat": "24.8918",
//             "lng": "21.8984"
//         }
//     },
//     "phone": "210.067.6132",
//     "website": "elvis.io",
//     "company": {
//         "name": "Johns Group",
//         "catchPhrase": "Configurable multimedia task-force",
//         "bs": "generate enterprise e-tailers"
//     }
// },
// {
//     "name": "Clementina DuBuque",
//     "username": "Moriah.Stanton",
//     "email": "Rey.Padberg@karina.biz",
//     "address": {
//         "street": "Kattie Turnpike",
//         "suite": "Suite 198",
//         "city": "Lebsackbury",
//         "zipcode": "31428-2261",
//         "geo": {
//             "lat": "-38.2386",
//             "lng": "57.2232"
//         }
//     },
//     "phone": "024-648-3804",
//     "website": "ambrose.net",
//     "company": {
//         "name": "Hoeger LLC",
//         "catchPhrase": "Centralized empowering task-force",
//         "bs": "target end-to-end models"
//     }
// },
// {
//     "name": "Leanne Graham",
//     "username": "Bret",
//     "email": "Sincere@april.biz",
//     "address": {
//         "street": "Kulas Light",
//         "suite": "Apt. 556",
//         "city": "Gwenborough",
//         "zipcode": "92998-3874",
//         "geo": {
//             "lat": "-37.3159",
//             "lng": "81.1496"
//         }
//     },
//     "phone": "1-770-736-8031 x56442",
//     "website": "hildegard.org",
//     "company": {
//         "name": "Romaguera-Crona",
//         "catchPhrase": "Multi-layered client-server neural-net",
//         "bs": "harness real-time e-markets"
//     }
// },
// {
//     "name": "Nicholas Runolfsdottir V",
//     "username": "Maxime_Nienow",
//     "email": "Sherwood@rosamond.me",
//     "address": {
//         "street": "Ellsworth Summit",
//         "suite": "Suite 729",
//         "city": "Aliyaview",
//         "zipcode": "45169",
//         "geo": {
//             "lat": "-14.3990",
//             "lng": "-120.7677"
//         }
//     },
//     "phone": "586.493.6943 x140",
//     "website": "jacynthe.com",
//     "company": {
//         "name": "Abernathy Group",
//         "catchPhrase": "Implemented secondary concept",
//         "bs": "e-enable extensible e-tailers"
//     }
// },
// {
//     "name": "Clementine Bauch",
//     "username": "Samantha",
//     "email": "Nathan@yesenia.net",
//     "address": {
//         "street": "Douglas Extension",
//         "suite": "Suite 847",
//         "city": "McKenziehaven",
//         "zipcode": "59590-4157",
//         "geo": {
//             "lat": "-68.6102",
//             "lng": "-47.0653"
//         }
//     },
//     "phone": "1-463-123-4447",
//     "website": "ramiro.info",
//     "company": {
//         "name": "Romaguera-Jacobson",
//         "catchPhrase": "Face to face bifurcated interface",
//         "bs": "e-enable strategic applications"
//     }
// },
// {
//     "name": "Glenna Reichert",
//     "username": "Delphine",
//     "email": "Chaim_McDermott@dana.io",
//     "address": {
//         "street": "Dayna Park",
//         "suite": "Suite 449",
//         "city": "Bartholomebury",
//         "zipcode": "76495-3109",
//         "geo": {
//             "lat": "24.6463",
//             "lng": "-168.8889"
//         }
//     },
//     "phone": "(775)976-6794 x41206",
//     "website": "conrad.com",
//     "company": {
//         "name": "Yost and Sons",
//         "catchPhrase": "Switchable contextually-based project",
//         "bs": "aggregate real-time technologies"
//     }
// },
// {
//     "name": "Clementina DuBuque",
//     "username": "Moriah.Stanton",
//     "email": "Rey.Padberg@karina.biz",
//     "address": {
//         "street": "Kattie Turnpike",
//         "suite": "Suite 198",
//         "city": "Lebsackbury",
//         "zipcode": "31428-2261",
//         "geo": {
//             "lat": "-38.2386",
//             "lng": "57.2232"
//         }
//     },
//     "phone": "024-648-3804",
//     "website": "ambrose.net",
//     "company": {
//         "name": "Hoeger LLC",
//         "catchPhrase": "Centralized empowering task-force",
//         "bs": "target end-to-end models"
//     }
// },
// {
//     "name": "Mrs. Dennis Schulist",
//     "username": "Leopoldo_Corkery",
//     "email": "Karley_Dach@jasper.info",
//     "address": {
//         "street": "Norberto Crossing",
//         "suite": "Apt. 950",
//         "city": "South Christy",
//         "zipcode": "23505-1337",
//         "geo": {
//             "lat": "-71.4197",
//             "lng": "71.7478"
//         }
//     },
//     "phone": "1-477-935-8478 x6430",
//     "website": "ola.org",
//     "company": {
//         "name": "Considine-Lockman",
//         "catchPhrase": "Synchronised bottom-line interface",
//         "bs": "e-enable innovative applications"
//     }
// }
// ]
// let people_1= new Set(people)
// console.log(people_1)

// Task 2*** Реализуйте считывание из JSONки из файла task2.json с помощью, например, модуля fs. для дальнейшего использования в функции, 
//описанной в задании
// const fs = require('fs');
// let rawdata = fs.readFileSync('C:/Users/ROPD-/Desktop/task2.json');
// let student = JSON.parse(rawdata);
// let people_3= new Set(student)
// console.log(people_3)

// Task 3**
// В файле task3.txt найдете структуру компании и задания, необходимые выполнить.
// Примечание: ВСЕ задания выполнять не обязательно, если вам люто сложно. Но ПЕРВОЕ - прям надо всем:)
const enterprises = [
    {
      id: 1,
      name: "Предприятие 1",
      departments: [
        {
          id: 2,
          name: "Отдел тестирования",
          employees_count: 10,
        },
        {
          id: 3,
          name: "Отдел маркетинга",
          employees_count: 20,
        },
        {
          id: 4,
          name: "Администрация",
          employees_count: 15,
        },
      ]
    },
    {
      id: 5,
      name: "Предприятие 2",
      departments: [
        {
          id: 6,
          name: "Отдел разработки",
          employees_count: 50,
        },
        {
          id: 7,
          name: "Отдел маркетинга",
          employees_count: 20,
        },
        {
          id: 8,
          name: "Отдел охраны труда",
          employees_count: 5,
        },
      ]
    },
    {
      id: 9,
      name: "Предприятие 3",
      departments: [
        {
          id: 10,
          name: "Отдел аналитики",
          employees_count: 0,
        },
      ]
    }
  ]
  enterprises.forEach(nameofdepartements=>{
    console.log(nameofdepartements.departments)
     })




// Task 4****
// В файле task4.txt вы найдете разноуровневый массив объектов. Очень похожий на массив из 3го задания, только количество вложенностей может 
//быть не ограничено. 
// Задание: написать функцию: 
// Функция строит древовидный список компании.
// При ее вызове в консоль должен вывестись список подразделений компании с указанием количества сотрудников и с соблюдение вложенности подразделений.

















