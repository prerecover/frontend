import * as yup from 'yup';

const languagesSchema = yup.array().of(yup.string().required());

// Основная схема для TInputs
export const SCHEMA = yup.object().shape({
  name: yup.string().required('Название обязательно'),
  type: yup.string().required('Тип обязателен'),
  clinicWorkBegin: yup.string().required('Дата начала работы обязательна'),
  square: yup
    .number()
    .required('Площадь обязательна')
    .positive('Площадь должна быть положительным числом'),
  phone: yup.string().required('Телефон обязателен'),
  reportPhone: yup.string().required('Телефон для отчетов обязателен'),
  country: yup.string().required('Страна обязательна'),
  city: yup.string().required('Город обязателен'),
  address: yup.string().required('Адрес обязателен'),
  floorCount: yup
    .number()
    .required('Количество этажей обязательно')
    .integer('Должно быть целым числом')
    .min(1, 'Минимум 1 этаж'),
  hasComputer: yup.boolean().required('Укажите наличие компьютеров'),
  hasElevator: yup.boolean().required('Укажите наличие лифта'),
  hasInternet: yup.boolean().required('Укажите наличие интернета'),
  workTime: yup.string().required('Время работы обязательно'),
  languages: languagesSchema
    .required('Языки обязательны')
    .min(1, 'Должен быть указан хотя бы один язык'),
});
