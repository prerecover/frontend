import { IUser } from "@/shared/types";
import AccountMainBlockItem from "./AccountMainBlockItem";

interface IAccountMainBlockProps {
    user: IUser
}

export default function AccountMainBlock({user}: IAccountMainBlockProps) {

    

    return (
        <div className="bg-white p-5 rounded-xl">
            <h2 className="text-dark mb-5 font-medium text-base">Основная информация</h2>
        
            <div className="grid grid-cols-2 mobile:grid-cols-1 gap-4">
                <AccountMainBlockItem placeholder="Имя" content={user.firstName}/>
                <AccountMainBlockItem placeholder="Фамилия" content={user.firstName}/>
                <AccountMainBlockItem placeholder="Дата рождения" content={user.birthday}/>
                <AccountMainBlockItem placeholder="Пол" content={user.sex}/>
                <AccountMainBlockItem placeholder="Почта" content={user.email}/>
                <AccountMainBlockItem placeholder="Страна" content={user.country}/>
                <AccountMainBlockItem placeholder="Город" content={user.city}/>
                <AccountMainBlockItem placeholder="Адрес" content={user.address}/>
            </div>
        </div>
    )
}