import React, {ChangeEvent, useState} from 'react';

export const Register = React.memo(() => {
    const [inviter, setInviter] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [profile, setProfile] = useState<string>("");
    const inputInviterHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setInviter(e.currentTarget.value)
    }
    const inputNameHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value)
    }
    const inputProfileHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setProfile(e.currentTarget.value)
    }

    return (
        <>
            <h2>Title</h2>
            <div className={"row"}>
                <span>inviter</span>
                <input onChange={inputInviterHandler} value={inviter}/>
            </div>
            <div className={"row"}>
                <span>name</span>
                <input onChange={inputNameHandler} value={name}/>
            </div>
            <div className={"row"}>
                <span>profile</span>
                <input onChange={inputProfileHandler} value={profile}/>
            </div>
            <div className={"result"}>
                <div> gnokey maketx call ADDRESS --pkgpath "gno.land/r/users" --func "Register" --gas-fee 1gnot --gas-wanted 2000000 --send "" --broadcast true --chainid testchain --args "" --args "{inviter}" --args "" --remote gno.land:36657</div>


                <div> gnokey query auth/accounts/ --remote gno.land:36657</div>
                <div> gnokey maketx call --pkgpath "gno.land/r/users" --func "Register"
                    --gas-fee 1gnot --gas-wanted 2000000 --send "" --args "{inviter}" --args "{name}" {profile} --args "" unsigned.tx
                </div>
                <div> gnokey sign  --txpath unsigned.tx --chainid testchain --number  {profile}
                    ACCOUNTNUMBER --sequence SEQUENCENUMBER signed.tx
                </div>
                <div> gnokey broadcast signed.tx --remote gno.land:36657</div>
            </div>
        </>
    );
});

