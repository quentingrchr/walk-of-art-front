
import { Checkbox } from "@components/checkbox"
import React from "react"


const Home: React.FC = () => {
    return (
        <div>
            <Checkbox checkboxName="check1" checkboxLabel="Hello World" />
            <Checkbox checkboxName="check2"/>
            <Checkbox checkboxName="check3" checkboxLabel="Sheeeesh" guidanceLabel="Guidance" guidanceType="error"/>
            <Checkbox checkboxName="check4" checkboxLabel="Should be disabled" guidanceLabel="Guidance" guidanceType="error" isDisabled={true}/>
            <Checkbox checkboxName="check5" checkboxLabel="Should be disabled" guidanceLabel="Guidance" guidanceType="error" isDisabled={true} isChecked={true}/>
            <Checkbox checkboxName="check6" checkboxLabel="boooom" guidanceLabel="Guidance"/>
            <Checkbox checkboxName="check7" checkboxLabel="Wanna get some newsletters ??" guidanceLabel="Pro tip : no u don't" guidanceType="info"/>
        </div>
    )
}

export default Home
