export type UserProps = {
  avatarUrl: string;
  login: string;
  name: string;
  location: string;
  bio: string;
  followers: {
    totalCount: number;
  };
  following: {
    totalCount: number;
  };
};
