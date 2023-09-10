import { StoryPointsRevealData } from './storyPointsReveal';
import { User } from './user';

export interface UserData extends User {
  isAdmin?: boolean;
  isActive?: boolean;
  data?: {
    storyPoints?: number | string;
  };
}

export interface UserAction {
  actionType: string;
  userData: UserData | UserData[];
  storyPointsRevealData?: StoryPointsRevealData;
}
