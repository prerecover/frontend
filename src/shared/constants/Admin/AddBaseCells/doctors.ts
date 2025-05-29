import { TDataStructure } from '../../../../recovery/clinics/data-structure'
import { EnMultiselectTypes } from '../../../../recovery/clinics/float-cells-types/Multiselect'
import { TAddBody } from '../../../../recovery/clinics/table-bodies/add'
import { EnCellTypes } from '../../../../recovery/shared/CellTypes'
import { EnWorkDays } from '../../../types/Admin/Doctors/entities/WorkDays'
import { EnModes } from '../../../types/Admin/shared/Entities/Modes'

export const ADD_DOCTORS_CELL_BASE_STRUCTURE: (
	newId: TDataStructure['id']
) => TAddBody[0] = newId => {
	return {
		id: newId,
		mode: EnModes.add,
		data: [
			{
				// Врач
				cellType: EnCellTypes.inline,
				data: null,
			},
			{
				// Специальность
				cellType: EnCellTypes.inline,
				data: null,
			},
			{
				// Онлайн/Офлайн
				cellType: EnCellTypes.net,
				data: null,
			},
			{
				// Опыт
				cellType: EnCellTypes.inlineArea,
				data: null,
			},
			{
				// Дни работы
				cellType: EnMultiselectTypes.workDays,
				data: [
					{
						isSelected: null,
						value: EnWorkDays.Monday,
						data: 'Понедельник',
					},
					{
						isSelected: null,
						value: EnWorkDays.Tuesday,
						data: 'Вторник',
					},
					{
						isSelected: null,
						value: EnWorkDays.Wednesday,
						data: 'Среда',
					},
					{
						isSelected: null,
						value: EnWorkDays.Thursday,
						data: 'Четверг',
					},
					{
						isSelected: null,
						value: EnWorkDays.Friday,
						data: 'Пятница',
					},
					{
						isSelected: null,
						value: EnWorkDays.Sunday,
						data: 'Суббота',
					},
					{
						isSelected: null,
						value: EnWorkDays.Weekday,
						data: 'Воскресенье',
					},
				],
			},
			{
				// Время работы
				cellType: EnCellTypes.inline,
				data: null,
			},
			////////////////////////////////////
			{
				// Медиафайлов
				cellType: EnCellTypes.inline,
				data: null,
			},
			////////////////////////////////////
			{
				// Услуги
				cellType: EnMultiselectSearchTypes.services,
				data: [],
			},
			{
				// Действия
				cellType: EnCellTypes.action,
				data: null,
			},
		],
	}
}
