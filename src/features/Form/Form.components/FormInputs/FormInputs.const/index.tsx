import * as Yup from 'yup'
const regex = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/

export const ValidationScema = Yup.object().shape({
    phoneNumber: Yup.string().required("Заполните поле!").matches(regex, 'Номер не корректен!'),
    name: Yup.string().required("Заполните поле!"),
})