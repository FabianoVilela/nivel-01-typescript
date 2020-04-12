interface TechObject {
  title: string;
  experience: number;
}

interface CreateUserData {
  name: string;
  email: string;
  password: string;
  techs?: Array<string>; // Optional (?) // or string[]
  techsObject?: Array<TechObject>; // Optional (?)
}

export default function createUser({
  name,
  email,
  password,
  techs,
  techsObject,
}: CreateUserData) {
  const user = {
    name,
    email,
    password,
    techs,
    techsObject,
  };

  return user;
}
