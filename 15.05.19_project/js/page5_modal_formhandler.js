let form = document.forms.formhandler;          // находим форму
// let name = document.forms.name;                 // получаем <input name="name">
// let telephone = document.forms.telephone;       // получаем <input name="telephone">
//
form.addEventListener('submit', takeForm);                      // на всю форму вешается обработчик события (а НЕ на кнопку отправить) submit и функция
// function takeForm(event) {                                      // в функции пишем проверку формы и потом отправку ее на сервер. На вход в функцию придет Объект событие event (на прошлом уроке разбирали)
//     event.preventDefault();// отмена события по умолчанию       // отмена события event по умолчанию с помощью метода .preventDefault()
//     console.log(this); // form                                  // это обращение к форме form.addEventListener (потому что на нее повесили обработчик события)
//     let formData = new FormData(this);                          // Объект FormData - в него передаем форму form (сюда попадут значения всех полей)
//
//
//                                                                 // Объект FormData - это Объекто-ориентированный Объект
//     console.log(formData);
//     console.log(formData.get("name"));                          //.get - получить одно значение поля <input> c name="login" из объекта
//     console.log(formData.get("telephone"));                     // .getAll - получить  массив со значениями (т.е. если в объекте FormData  несоклько значений <input> c name="login")
//
// }


function takeForm(event) {
    console.log(event);//
    event.preventDefault();                                      // отмена события по умолчанию (отмена "submit");
    let name = document.getElementById("name").value;            // получаем значения из полей формы
    let telephone = document.getElementById("telephone").value;

    if (!name) {                                                 // проверка полей формы
        if (!telephone) {
            console.log("Вы не ввели данные");
        }
        return false;                                            // вернуть false если данные не заполнены
    }
       return console.log (name.value + telephone.value);        // вернуть значения из полей формы если данные заполнены
}

console.log(takeForm());
//
//
// let containerform = document.createElement("div");      // контейнер <div> для данных с формы
// let elemformName = document.createElement("p");         // элемент <p> для имени из формы
// let elemformTelephone = document.createElement("p");    // элемент <p> для телефона из формы
// elemformName.innerText = name;                                  // добавление в <p>  значения из поля name
// elemformTelephone.innerText = telephone;                        // добавление в <p>  значения из поля telephone
//
// containerform.appendChild(elemformName);                        // добавление <p> в <div>
// containerform.appendChild(elemformTelephone);                   // добавление <p> в <div>
// console.log(containerform);
//
//

    // console.log(formData);
    // console.log(formData.get("name"));
    // console.log(formData.get("telephone"));



// отличие - в своем способе получаю значения элементов из формы по id  и далее проверяю их
//в варианте дарьи получаю значение элементов  из формы по name и далее проверяю их