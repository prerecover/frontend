import { EnNetType } from '../shared/entities/NetType'
import { EnWorkDays } from './entities/WorkDays'
import { TServicesDataStructure } from '../services/data-structure'

export type TServiceItem = {
	id: TServicesDataStructure['id']
	name: TServicesDataStructure['name']
	category: TServicesDataStructure['category']
}

export type TDoctorsDataStructure = {
	id: string
	name: string
	speciality: string
	consultationType: EnNetType
	experience: string
	workDays: EnWorkDays[]
	workTime: string
	services: TServiceItem
}
