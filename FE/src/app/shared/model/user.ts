export interface User {
  userId: string;
  displayName: string;
  jobRole? :string,
  seriesName?: any
}

export const defaultsUser: Pick<User, 'userId' | 'displayName' | 'jobRole' | 'seriesName'> = {
  userId: '',
  displayName: '',
  jobRole :'' ,
  seriesName:''
};



