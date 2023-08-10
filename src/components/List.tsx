import { Invite, TeamMember } from "../models";
import ListItem from "./ListItem";

export type ListProps = {
  users: (TeamMember | Invite)[];
};

const List: React.FC<ListProps> = ({ users }) => {
  return (
    <div className="list">
      {users.map((userData) => (
        <ListItem data={userData} key={userData.id} />
      ))}
    </div>
  );
};

export default List;
