import React, {ChangeEvent, useState} from 'react';

export const Register = React.memo(() => {
    const [inviter, setInviter] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [profile, setProfile] = useState<string>("");
    const [wallet, setWallet] = useState<string>("");
    const [denon, setDenon] = useState<string>("");


    const inputInviterHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setInviter(e.currentTarget.value)
    }
    const inputNameHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value)
    }
    const inputProfileHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setProfile(e.currentTarget.value)
    }
    const inputWalletHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setWallet(e.currentTarget.value)
    }
    const inputDenonHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setDenon(e.currentTarget.value)
    }


    return (
        <>
            <h2>Title</h2>
            <div className={"row"}>
                <span>defundd</span>
                <input onChange={inputInviterHandler} value={inviter}/>
            </div>
            <div className={"row"}>
                <span>НАЗВАНИЕ_БИНАРНИКА</span>
                <input onChange={inputNameHandler} value={name}/>
            </div>
            <div className={"row"}>
                <span>НАЗВАНИЕ_СЕТИ</span>
                <input onChange={inputProfileHandler} value={profile}/>
            </div>
            <div className={"row"}>
                <span>НАЗВАНИЕ КОШЕЛЬКА</span>
                <input onChange={inputWalletHandler} value={wallet}/>
            </div>
            <div className={"row"}>
                <span>НАЗВАНИЕ_ДЕНОМ</span>
                <input onChange={inputDenonHandler} value={denon}/>
            </div>
            <div className={"result"}>

               <div>defundd init {name} --chain-id=defund-private-1</div>



            </div>
        </>
    );
});

