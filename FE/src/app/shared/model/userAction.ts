import { User } from './user';

export interface UserData extends User {
  isAdmin?: boolean;
  isActive?: boolean;
  data?: {
    storyPoints: number | null  |string;
  };
}

export interface UserAction {
  actionType: string;
  userData: UserData | UserData[];
}
