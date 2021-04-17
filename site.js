let form = document.forms[1];
console.log(form);
form.addEventListener("submit", functionRequestSending);

function functionRequestSending(event) {
    event.preventDefault();


    let formData = new FormData();

    let city = form.elements.city.value;
    let street = form.elements.street.value;
    let email = form.elements.email.value;
    let phone = form.elements.phone.value;
    let name = form.elements.name.value;
    let surname = form.elements.surname.value;
    let status = form.elements.status.value;
    let statusPayment = form.elements.status_payment.value;

    const oneWordReg = /^[a-zA-Zа-яА-Я]{2,}$/;
    const streetReg = /^[a-zA-Zа-яА-Я]{2,},\d+$/;
    const emailReg = /^[\w\.]{2,}@[a-zA-Z]{4,10}\.[a-zA-Z]+$/;
    const phoneReg = /^[+]*[0-9]*\s*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/;

    console.log(status);

    if (city == "") {
        Swal.fire(
            'Ошибка',
            'Город не указан',
            'error'
        )
        console.log('Город не введён');
    } else if (!oneWordReg.test(city)) {
        Swal.fire(
            'Ошибка',
            'Город указан неверно',
            'error'
        )
        console.log('Город введён неверно');
    } else if (street == "") {
        Swal.fire(
            'Ошибка',
            'Улица не указана',
            'error'
        )
        console.log('Улица не введена');
    } else if (!streetReg.test(street)) {
        Swal.fire(
            'Ошибка',
            'Улица указана неверно',
            'error'
        )
        console.log('Улица введена неверно');
    } else if (email == "") {
        Swal.fire(
            'Ошибка',
            'Email не указан',
            'error'
        )
        console.log('Email не введён');
    } else if (!emailReg.test(email)) {
        Swal.fire(
            'Ошибка',
            'Email указан неверно',
            'error'
        )
        console.log('Email введён неверно');
    } else if (phone == "") {
        Swal.fire(
            'Ошибка',
            'Телефон не указан',
            'error'
        )
        console.log('Телефон не введён');
    } else if (!phoneReg.test(phone)) {
        Swal.fire(
            'Ошибка',
            'Телефон указан неверно',
            'error'
        )
        console.log('Телефон введён неверно');
    } else if (name == "") {
        Swal.fire(
            'Ошибка',
            'Имя не указано',
            'error'
        )
        console.log('Имя не введено');
    } else if (!oneWordReg.test(name)) {
        Swal.fire(
            'Ошибка',
            'Имя указано неверно',
            'error'
        )
        console.log('Имя введено неверно');
    } else if (surname == "") {
        Swal.fire(
            'Ошибка',
            'Фамилия не указана',
            'error'
        )
        console.log('Фамилия не введёна');
    } else if (!oneWordReg.test(surname)) {
        Swal.fire(
            'Ошибка',
            'Фамилия указана неверно',
            'error'
        )
        console.log('Фамилия введена неверно');
    } else if (status == "") {
        Swal.fire(
            'Ошибка',
            'Не выбран способ получения',
            'error'
        )
        console.log('Не выбран способ получения/оплата');
    } else if (statusPayment == "") {
        Swal.fire(
            'Ошибка',
            'Не выбран способ оплаты',
            'error'
        )
        console.log('Не выбран способ оплаты');
    } else {
        Swal.fire({
            icon: 'success',
            title: 'Данные записаны',
            showConfirmButton: false,
            timer: 1800
        })
        console.log("Город: " + city);
        console.log("Адрес: " + street);
        console.log("Email: " + email);
        console.log("Телефон: " + phone);
        console.log("Имя: " + name);
        console.log("Фамилия: " + surname);

        form.reset();
    }
}
