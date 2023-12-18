import { Server, Profile, Member } from "@prisma/client"

export type ServerWithMemebersWithProfiles = Server & {
    member:(Member & {profile: Profile})[]
} 