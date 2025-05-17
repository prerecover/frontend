import AccountProfileProtectionItem from "./AccountProfileProtectionItem";

interface IAccountProfileProtectionProps {
    email?: string | null;
    phone?: string | null;
}

export default function AccountProfileProtection({email, phone}: IAccountProfileProtectionProps) {


    return (
        <div className="bg-white p-5 rounded-xl grid grid-cols-2 mobile:grid-cols-1 gap-3">
            <AccountProfileProtectionItem title="Номер" content={phone}/>
            <AccountProfileProtectionItem title="Эл. почта" content={email}/>
        </div>
    )
}