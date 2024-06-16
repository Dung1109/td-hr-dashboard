"use client";

import {FormDialog} from "@/components/FormDialog";
import DemoPage from "@/components/DataTable";

export default function UsersPage(props: any) {

    return (
        <main>
            <h1>Users</h1>
            <FormDialog/>
            <DemoPage />
        </main>
    );
};
