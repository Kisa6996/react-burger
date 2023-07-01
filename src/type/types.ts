export type TIngredients = {
  _id: string;
  name: string;
  type: string;
  proteins: number;
  fat: number;
  carbohydrates: number;
  calories: number;
  price: number;
  image: string;
  image_mobile: string;
  image_large: string;
  __v: number;
};
export type TCardProps = {
  ingredient: TIngredients;
  count: number;
};
export type TItem = {
  structure: TIngredients;
  uuid: string;
};

type  TAnswerLogin =  {
  userRequest: boolean,
  userFailed: boolean,
  isLogin: boolean,
};
export type TUseAuth ={
  isRegister: boolean,
  isAuth: boolean,
  answerLogin:  TAnswerLogin,
  token: string,
}
