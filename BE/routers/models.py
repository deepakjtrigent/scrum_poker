from typing import Optional
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


class User_action(BaseModel):
    actionType: str
    userData: Optional[User_details]
