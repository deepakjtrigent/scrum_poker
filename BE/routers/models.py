from typing import Optional, List
from pydantic import BaseModel


class User(BaseModel):
    userId: str
    displayName: str
    jobRole: Optional[str] = None


class seriesData(BaseModel):
    seriesName: str


class User_data(BaseModel):
    storyPoints: float | str


class User_details (User):
    isAdmin: Optional[bool] = None
    isActive: Optional[bool] = None
    data: Optional[User_data] = None


class Story_points(BaseModel):
    points: float | str
    repetition: int


class Story_points_data(BaseModel):
    storyPointsData: List[Story_points]
    averageValue: int


class User_action(BaseModel):
    actionType: str
    userData: Optional[User_details]
    storyPointsRevealData: Optional[Story_points_data] = None