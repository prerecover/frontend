import { EnNetType } from '../shared/entities/NetType'
import { EnPayType } from './entities/PayType'
import { TDoctorsDataStructure } from '../doctors/data-structure'

export type TDoctorItem = {
	id: TDoctorsDataStructure['id']
	name: TDoctorsDataStructure['name']
	speciality: TDoctorsDataStructure['speciality']
}

export type TServicesDataStructure = {
	id: string
	name: string
	category: string
	consultationType: EnNetType
	description: string
	price: string
	payType: EnPayType[]
	duration: string
	doctors: TDoctorItem[]
}
