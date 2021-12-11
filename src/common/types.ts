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
  title: string;
  tags: Array<Tag>;
  author: Partial<User>;
  readme: string;
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

export const isGitPost = (blog: Post): blog is GitPost => (blog as GitPost).repoUrl !== undefined;
