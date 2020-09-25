import React from "react";
import DocsPage from "@material-docs/core/components/DocsPage";
import H1 from "@material-docs/core/components/H1";
import Table from "@material-docs/core/components/Table";
import TableRow from "@material-docs/core/components/TableRow";
import TableCell from "@material-docs/core/components/TableCell";
import TableHead from "@material-docs/core/components/TableHead";
import TableBody from "@material-docs/core/components/TableBody";
import H3 from "@material-docs/core/components/H3";
import Link from "@material-docs/core/components/Link";

export default function SecondPage() {
    return (
        <DocsPage
            name={"Features page"}
            searchLabel={"Features are cool!"}
            searchDescription={"This is a page about features."}
            searchTags={["page", "feature", "amazing"]}
        >
            <H1>This is a feature page</H1>
            <H3 noDivider>Table</H3>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Action</TableCell>
                        <TableCell>Dog</TableCell>
                        <TableCell>Human</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>Can speak</TableCell>
                        <TableCell>No</TableCell>
                        <TableCell>Yes</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Can eat</TableCell>
                        <TableCell>Yes</TableCell>
                        <TableCell>Yes</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Can run very fast</TableCell>
                        <TableCell>No</TableCell>
                        <TableCell>Yes</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
            <Link page={["My Group", "Page about me"]}>Redirect to Page About Me</Link>
        </DocsPage>
    );
}