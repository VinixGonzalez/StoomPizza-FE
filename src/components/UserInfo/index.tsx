import { Avatar, Card, Text } from "components";
import React, { useEffect, useState } from "react";
import { API } from "services/api";
import { GlobalFlexContainer } from "styles";
import { USER_LOGGED } from "utils/constants";

interface UserInfoData {
  id: number;
  name: string;
  email: string;
  picture: string;
  points: number;
  totalOrders: number;
  address: {
    street: string;
    number: string;
    complement: string;
    city: string;
  };
}

export const UserInfo: React.FC = () => {
  const [userData, setUserData] = useState<UserInfoData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    (async () => {
      await API.get(`/user/${USER_LOGGED.Admin}`)
        .then((res) => {
          const user: UserInfoData = res.data;
          setUserData(user);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setLoading(false);
        });
    })();
  }, []);

  return (
    <>
      {userData ? (
        <Card>
          <GlobalFlexContainer>
            {loading ? (
              <GlobalFlexContainer direction="column" align="center">
                <img
                  height={160}
                  src="/images/pizza_loading.gif"
                  alt="loading"
                />
                <Text
                  as="p"
                  size="md"
                  displayText="Carregando..."
                  font="Dancing Script"
                  color="var(--red-primary)"
                />
              </GlobalFlexContainer>
            ) : (
              <>
                <Avatar src={userData.picture} />
                <div style={{ marginLeft: "1rem" }}>
                  <Text
                    as="span"
                    displayText={userData.name}
                    font="Dancing Script"
                    size="md"
                    noWrap
                    color="var(--red-primary)"
                  />
                  <Text
                    as="span"
                    displayText={`${userData.points} pontos`}
                    font="Maven Pro"
                    size="md"
                    color="var(--text-primary)"
                  />
                </div>
              </>
            )}
          </GlobalFlexContainer>
        </Card>
      ) : (
        <Card>
          <Text
            align="center"
            as="h3"
            displayText="Faça Login para ganhar pontos!"
            color="var(--red-primary)"
          />
        </Card>
      )}
    </>
  );
};
