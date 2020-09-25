import React from "react";
import DocsPage from "@material-docs/core/components/DocsPage";
import H1 from "@material-docs/core/components/H1";
import H3 from "@material-docs/core/components/H3";
import Markdown from "@material-docs/core/components/Markdown";
import Image from "@material-docs/core/components/Image";
import H4 from "@material-docs/core/components/H4";
import Code from "@material-docs/core/components/Code";

export default function FirstPage() {
    return (
        <DocsPage
            name={"Page about me"}
            searchLabel={"Danil Andreev | About me"}
            searchDescription={"This is a page about my person."}
            searchTags={["me", "info", "danil", "andreev", "programmer"]}
        >
            <H1>My name is Danil Andreev</H1>
            <H3>This is a page about my history.</H3>
            <Markdown>Hello, my name is __Danil Andreev__, I am a programmer from Kiev, Ukraine.</Markdown>
            <Image src={"https://cdnb.artstation.com/p/users/avatars/000/449/963/large/fc6a568b26ecfe1fe02f6dc60da732ae.jpg?1587936613"}/>
            <H4>I will show you a piece of code</H4>
            <Code>
                $ Hello darkness my old friend
            </Code>
        </DocsPage>

    );
}
