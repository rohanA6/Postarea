export type PostsType = {
  title: string;
  id: string;
  createdAt?: string;
  comment?: {
    createdAt: string;
    id: string;
    postId: string;
    userId: string;
  }[];
  user: {
    name: string;
    image: string;
  };
};
