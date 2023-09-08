
export interface StoryPointsRevealData {
    storyPointsData: StoryPointsData[];
    averageValue: number;
}

export interface StoryPointsData {
  points: number | string;
  repetition: number;
}
