import React from "react";
import DocsPage from "@material-docs/core/components/DocsPage";
import H1 from "@material-docs/core/components/H1";
import H3 from "@material-docs/core/components/H3";
import Markdown from "@material-docs/core/components/Markdown";
import Image from "@material-docs/core/components/Image";
import H4 from "@material-docs/core/components/H4";
import Code from "@material-docs/core/components/Code";
import Locale from "@material-docs/core/components/Locale";

const image = "https://cdnb.artstation.com/p/users/avatars/000/449/963/large/fc6a568b26ecfe1fe02f6dc60da732ae.jpg?1587936613";

export default function FirstPage() {
    return (
        <DocsPage
            name={"Page about me"}
            searchLabel={"Danil Andreev | About me"}
            searchDescription={"This is a page about my person."}
            searchTags={["me", "info", "danil", "andreev", "programmer"]}
        >
            <H1><Locale path={"pages/FirstPage/header1"}/></H1>
            <H3><Locale path={"pages/FirstPage/header2"}/></H3>
            <Markdown locale={"pages/FirstPage/text"} />
            <Image src={image}/>
            <H4><Locale path={"pages/FirstPage/header3"}/></H4>
            <Code>
                $ Hello darkness my old friend
            </Code>
        </DocsPage>

    );
}
