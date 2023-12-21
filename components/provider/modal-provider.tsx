"use client";

import { CreateServerModal } from "@/components/modals/create-server-modal";
import { InviteModal } from "@/components/modals/invite-modal";
import { EditServerModal } from "@/components/modals/edit-server-modal";
import { MembersModal } from "@/components/modals/members-modal";
import { CreateChannelModal } from "@/components/modals/create-channel-modal";
import { LeaveServer } from "@/components/modals/leave-server-modal";
import { DeleteServer } from "@/components/modals/delete-server-modal";
import { useEffect, useState } from "react";

export const ModalProvider = () => {
    const [isMounted,setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    },[]);

    if(!isMounted) return null;

    return (
        <div>
            <CreateServerModal/>
            <InviteModal/>
            <EditServerModal/>
            <MembersModal/>
            <CreateChannelModal/>
            <LeaveServer/>
            <DeleteServer/>
        </div>
    )
}