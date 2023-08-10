import React, { useEffect, useState } from "react";
import List from "./components/List";
import AdminSectionIcon from "./components/icons/AdminSectionIcon";
import UserSectionIcon from "./components/icons/UserSectionIcon";
import { getInvites, getUsers } from "./services";
import { Invite, Role, Roles, TeamMember } from "./models";

type Users = Record<Role, (TeamMember | Invite)[]>;

const SectionTitleLookup = {
  [Roles.admin]: <AdminSectionIcon />,
  [Roles.standard]: <UserSectionIcon />,
};

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState<Users>({} as Users);

  const fetchUsers = async () => {
    try {
      const { data: members } = await getUsers();
      const { data: invites } = await getInvites();
      const allUsers = [...(members || []), ...(invites || [])];
      setUsers(() =>
        allUsers.reduce(
          (acc, current) => ({
            ...acc,
            [current.role]: [...(acc?.[current?.role] || []), current],
          }),
          {} as Users
        )
      );
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="app">
      {loading ? (
        <div className="loading">loading...</div>
      ) : (
        <>
          {Object.entries(users).map(([role, data]) => (
            <div className="section">
              <div className="section__title">
                {SectionTitleLookup[role as Role]}
              </div>
              <List users={data} />
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default App;
