import React  from "react";
import { FAQItem } from "./ui-components";


export default function Contact(){
    return(
        <FAQItem width="80%"
        margin="auto"
        overrides={{
            Paragraph: {
                children:"alexander850sk@outlook.com"
            },
            Title:{
                children:"+57 310 709 8051"
            }

        }}/>
    )
}