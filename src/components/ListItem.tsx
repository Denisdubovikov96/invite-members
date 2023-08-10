import ChevronRightIcon from "./icons/ChevronRightIcon";
import type { Invite, TeamMember } from "../models";
import Chip from "./Chip";

export type ListItemProps<T> = {
  data: T;
};

const ListItem = <T extends TeamMember | (Invite & { user?: never })>({
  data,
}: ListItemProps<T>): JSX.Element => {
  const isInvite = !data?.user;

  const getDisplayInfo = (): string => {
    if (isInvite) {
      return data.phone;
    }
    const hasUserName = !!(data.user?.name || data.user?.lastName);
    const name =
      hasUserName &&
      `${(data.user?.name || "") + " "}${data.user?.lastName || ""}`;

    return name || data.user.email || data.user.phone || "Incognito";
  };
  const userName = getDisplayInfo();

  return (
    <div className="list-item">
      <div className="list-item__title">{userName}</div>
      <div className="list-item__actions">
        {isInvite && (
          <Chip content="Invited" className="list-item__actions-chip" />
        )}
        <ChevronRightIcon />
      </div>
    </div>
  );
};

export default ListItem;
