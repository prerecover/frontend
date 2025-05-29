import { TDataStructure } from '../../../../recovery/clinics/data-structure'
import { EnLanguages } from '../../../../recovery/clinics/entities/Languages'
import { EnAccumulator } from '../../../../recovery/clinics/float-cells-types/Accumulator'
import { EnLinks } from '../../../../recovery/clinics/float-cells-types/Links'
import { EnMultiselectTypes } from '../../../../recovery/clinics/float-cells-types/Multiselect'
import { TAddBody } from '../../../../recovery/clinics/table-bodies/add'
import { EnCellTypes } from '../../../../recovery/shared/CellTypes'
import { EnModes } from '../../../types/Admin/shared/Entities/Modes'

export const ADD_CLINICS_CELL_BASE_STRUCTURE: (
	newId: TDataStructure['id']
) => TAddBody[0] = newId => {
	return {
		id: newId,
		mode: EnModes.add,
		data: [
			{
				// Название
				cellType: EnCellTypes.inline,
				data: null,
			},
			{
				// Тип учреждения
				cellType: EnCellTypes.inline,
				data: null,
			},
			{
				// Начало работы
				cellType: EnCellTypes.inline,
				data: null,
			},
			{
				// Площадь, м²
				cellType: EnCellTypes.inline,
				data: null,
			},
			{
				// Телефон
				cellType: EnCellTypes.inline,
				data: null,
			},
			{
				// Телефон для отправки отчета в тг
				cellType: EnCellTypes.inline,
				data: null,
			},
			{
				// Страна
				cellType: EnCellTypes.inline,
				data: null,
			},
			{
				// Город
				cellType: EnCellTypes.inline,
				data: null,
			},
			{
				// Адрес
				cellType: EnCellTypes.inlineArea,
				data: null,
			},
			{
				// Количество этажей
				cellType: EnCellTypes.inline,
				data: null,
			},
			{
				// Компьютер
				cellType: EnCellTypes.has,
				data: null,
			},
			{
				// Интернет
				cellType: EnCellTypes.has,
				data: null,
			},
			{
				// Дни и время работы
				cellType: EnCellTypes.inlineArea,
				data: null,
			},
			{
				// Категорий
				cellType: EnCellTypes.inline,
				data: null,
			},
			////////////////////////////////
			{
				// Всего медиафайлов
				cellType: EnCellTypes.inline,
				data: null,
			},
			{
				// Фото клиники
				cellType: EnCellTypes.inline,
				data: null,
			},
			////////////////////////////////
			{
				// Язык клиники
				cellType: EnMultiselectTypes.language,
				data: [
					{ data: 'Русский', isSelected: null, value: EnLanguages.ru },
					{ data: 'Узбекский', isSelected: null, value: EnLanguages.uz },
					{ data: 'Английский', isSelected: null, value: EnLanguages.en },
				],
			},
			{
				// Лифт
				cellType: EnCellTypes.has,
				data: null,
			},
			{
				// Всего услуг
				cellType: EnLinks.services,
				data: null,
			},
			{
				// Всего врачей
				cellType: EnLinks.doctors,
				data: null,
			},
			{
				// Сеть клиник
				cellType: EnAccumulator.clinicsNet,
				data: null,
			},
			{
				// Действия
				cellType: EnCellTypes.action,
				data: null,
			},
		],
	}
}
