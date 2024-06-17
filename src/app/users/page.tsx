"use client";

import {FormDialog} from "@/components/FormDialog";
import DataTablePage from "@/components/DataTablePage";
import {Suspense} from "react";

export default function UsersPage(props: any) {

    return (
        <main>
            <h1>Users</h1>
            <FormDialog/>
            <Suspense>
                <DataTablePage/>
            </Suspense>
        </main>
    );
};
