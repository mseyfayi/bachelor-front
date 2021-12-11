// todo fix this
export interface Tag {
  id: string;
  name: string;
  color: string;
}

export interface User {
  id: string;
  githubId?: string;
  beheshtiId?: string;
  firstName?: string;
  lastName?: string;
  avatar?: string;
}

interface Comment {
  id: string;
  user: User;
  context: string;
}

interface PostFile {
  name: string;
  size: string;
  url: string;
}

export interface SimplePost {
  id: string;
  tags: Array<Tag>;
  author: Partial<User>;
  content: string;
  likesCount: number;
  comments: Array<Comment>;
  files?: Array<PostFile>;
}

export interface GitPost extends SimplePost {
  repoUrl: string;
  repoTitle: string;
  description: string;
  starsCount: number;
  forksCount: number;
}

export type Post = GitPost | SimplePost;

export const isGitPost = (post: Post): post is GitPost => (post as GitPost).repoUrl !== undefined;
