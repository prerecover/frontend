import { TDataStructure } from '../../../../recovery/clinics/data-structure'
import { EnMultiselectTypes } from '../../../../recovery/clinics/float-cells-types/Multiselect'
import { TAddBody } from '../../../../recovery/clinics/table-bodies/add'
import { EnCellTypes } from '../../../../recovery/shared/CellTypes'
import { EnPayType } from '../../../types/Admin/Services/entities/PayType'
import { EnModes } from '../../../types/Admin/shared/Entities/Modes'

export const ADD_SERVICES_CELL_BASE_STRUCTURE: (
	newId: TDataStructure['id']
) => TAddBody[0] = newId => {
	return {
		id: newId,
		mode: EnModes.add,
		data: [
			{
				// Услуга
				cellType: EnCellTypes.inline,
				data: null,
			},
			{
				// Категория
				cellType: EnCellTypes.inline,
				data: null,
			},
			{
				// Онлайн/Офлайн
				cellType: EnCellTypes.net,
				data: null,
			},
			{
				// Описание
				cellType: EnCellTypes.inlineArea,
				data: null,
			},
			{
				// Цена
				cellType: EnCellTypes.inlineArea,
				data: null,
			},
			{
				// Как оплачивать услугу?
				cellType: EnMultiselectTypes.payType,
				data: [
					{
						isSelected: null,
						value: EnPayType.online,
						data: 'Онлайн',
					},
					{
						isSelected: null,
						value: EnPayType.cashier,
						data: 'В кассу',
					},
					{
						isSelected: null,
						value: EnPayType.doctor,
						data: 'Доктору',
					},
					{
						isSelected: null,
						value: EnPayType.installments,
						data: 'В рассрочку',
					},
					{
						isSelected: null,
						value: EnPayType.credit,
						data: 'В кредит',
					},
				],
			},
			{
				// Длительность
				cellType: EnCellTypes.inline,
				data: null,
			},
			{
				// Врачи
				cellType: EnMultiselectSearchTypes.doctors,
				data: [],
			},
			{
				// Медиафайлов
				cellType: EnCellTypes.inlineArea,
				data: null,
			},
			{
				// Действия
				cellType: EnCellTypes.inline,
				data: null,
			},
		],
	}
}
