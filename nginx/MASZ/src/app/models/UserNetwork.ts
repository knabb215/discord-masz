import { AutoModerationEvent } from "./AutoModerationEvent";
import { DiscordUser } from "./DiscordUser";
import { Guild } from "./Guild";
import { ModCase } from "./ModCase";
import { UserInviteView } from "./UserInviteView";

export interface UserNetwork {
    guilds: Guild[];
    user : DiscordUser;
    invited: UserInviteView[];
    invitedBy: UserInviteView[];
    modCases: ModCase[];
    modEvents: AutoModerationEvent[];
}