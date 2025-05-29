import { TPrevPage } from '../shared/Pagination'
import { EnLanguages } from './entities/Languages'

export type TClinicsNetItem = Pick<
	TClinicsDataStructure,
	'id' | 'address' | 'name'
> &
	TPrevPage

export type TClinicsDataStructure = {
	id: string
	name: string
	type: string
	clinicWorkBegin: string
	square: number
	phone: string
	reportPhone: string
	country: string
	city: string
	address: string
	floorCount: number
	hasComputer: boolean
	workTime: string
	categories: {
		qnt: number
	}
	mediaFiles: unknown
	languages: EnLanguages[]
	hasElevator: boolean
	clinicsNet: TClinicsNetItem[]
	servicesQnt: number
	doctorsQnt: number
} & TPrevPage
