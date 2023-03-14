export type PostType = {
  id: string;
  title: string;
  updatedAt?: string;
  user: {
    email: string;
    id: string;
    image: string;
    name: string;
  };
  comment: {
    createdAt?: string;
    id: string;
    postId: string;
    title: string;
    userId: string;
    user: {
      email: string;
      id: string;
      image: string;
      name: string;
    };
  }[];
};
