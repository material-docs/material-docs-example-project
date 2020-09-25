import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import DocsLayout from "@material-docs/core/components/DocsLayout";
import DocsPages from "@material-docs/core/components/DocsPages";
import DocsMenu from "@material-docs/core/components/DocsMenu";
import AutoDocsMenu from "@material-docs/core/components/AutoDocsMenu";
import FirstPage from "./pages/FirstPage";
import SecondPage from "./pages/SecondPage";
import PagesGroup from "@material-docs/core/components/PagesGroup";

ReactDOM.render(
    <React.StrictMode>
        <DocsLayout
            name={"My documentation"}
            version={"1.0.0-alpha"}
            logo={"http://material-docs.com/static/media/logo.5a237c82.svg"}
            keywords={["my", "test", "documentation"]}
            description={"This is an example documentation for Material Docs framework."}
            author={"Danil Andreev"}
        >
            <DocsMenu>
                <AutoDocsMenu />
            </DocsMenu>
            <DocsPages>
                <PagesGroup name={"My Group"}>
                    <FirstPage/>
                </PagesGroup>
                <SecondPage/>
            </DocsPages>
        </DocsLayout>
    </React.StrictMode>,
    document.getElementById('root')
);

serviceWorker.unregister();
