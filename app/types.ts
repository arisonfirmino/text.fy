import { Like, Post, User } from "@prisma/client";

export type PostWithRelations = Post & {
  user: User;
  likedBy: (Like & {
    user: User;
  })[];
};

export interface PostsTimelineProps {
  posts: (Post & {
    user: User;
    likedBy: (Like & {
      user: User;
    })[];
  })[];
  filteredPosts: (Post & {
    user: User;
    likedBy: (Like & {
      user: User;
    })[];
  })[];
}

export interface PostProps {
  post: Post & {
    user: User;
  };
}

export interface FollowButtonProps {
  user: Pick<User, "id">;
}

export interface UserDataProps {
  user:
    | (User & {
        posts: Post[];
        followers: {
          follower: User;
        }[];
        following: {
          following: User;
        }[];
      })
    | null;
}

export interface DeleteAllPostsProps {
  user: {
    id: string;
    posts: Post[];
  } | null;
}
